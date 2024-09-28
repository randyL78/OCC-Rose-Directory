import getRoseQrCodes from "../api/get-rose-qr-codes.ts";
import {LoaderFunctionArgs} from "react-router-dom";
import {ResponseStatusType} from "../interfaces/Response.ts";
import {redirectToLogin} from "../utilities/redirect-to-login.ts";

export async function roseAdminIndexLoader({ request }: LoaderFunctionArgs) {
  const rosesResponse = await getRoseQrCodes()

  if(rosesResponse.status === ResponseStatusType.unauthorized) {
    return redirectToLogin(request)
  }

  return rosesResponse
}
