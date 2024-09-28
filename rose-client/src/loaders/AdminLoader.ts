import {ResponseStatusType} from "../interfaces/Response.ts";
import {redirectToLogin} from "../utilities/redirect-to-login.ts";
import {LoaderFunctionArgs} from "react-router-dom";
import {hasAccess} from "../api/has-access.ts";

export async function adminLoader({ request }: LoaderFunctionArgs) {
  const response = await hasAccess()

  if(response.status === ResponseStatusType.unauthorized) {
    return redirectToLogin(request)
  }

  return response
}
