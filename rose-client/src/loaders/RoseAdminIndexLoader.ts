import getRoseQrCodes from "../api/get-rose-qr-codes.ts";
import {getToken, removeToken} from "../utilities/token.ts";
import {LoaderFunctionArgs, redirect} from "react-router-dom";
import {ResponseStatusType} from "../interfaces/Response.ts";

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

function redirectToLogin(request: Request) {
  const params = new URLSearchParams();
  params.set("from", new URL(request.url).pathname);
  params.set("login", "true")
  return redirect(`/?${params.toString()}`)
}
