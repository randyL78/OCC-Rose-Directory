import getRoseQrCodes from "../api/get-rose-qr-codes.ts";
import {getToken} from "../utilities/token.ts";
import {LoaderFunctionArgs, redirect} from "react-router-dom";

export async function roseAdminIndexLoader({ request }: LoaderFunctionArgs) {
  const token = getToken();

  if(!token) {
    const params = new URLSearchParams();
    params.set("from", new URL(request.url).pathname);
    params.set("login", "true")
    return redirect(`/?${params.toString()}`)
  }

  return getRoseQrCodes();
}
