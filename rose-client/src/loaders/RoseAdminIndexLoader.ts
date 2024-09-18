import getRoseQrCodes from "../api/get-rose-qr-codes.ts";
import {getToken, removeToken} from "../utilities/token.ts";
import {LoaderFunctionArgs} from "react-router-dom";
import {ResponseStatusType} from "../interfaces/Response.ts";
import {redirectToLogin} from "../utilities/redirect-to-login.ts";

export async function roseAdminIndexLoader({ request }: LoaderFunctionArgs) {
  const token = getToken();

  if(!token) {
    return redirectToLogin(request)
  }

  const rosesResponse = await getRoseQrCodes()

  if(rosesResponse.status === ResponseStatusType.unauthorized) {
    removeToken()
    return redirectToLogin(request)
  }

  return rosesResponse
}
