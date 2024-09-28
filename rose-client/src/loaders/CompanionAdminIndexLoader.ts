import {LoaderFunctionArgs} from "react-router-dom";
import {ResponseStatusType} from "../interfaces/Response.ts";
import {redirectToLogin} from "../utilities/redirect-to-login.ts";
import {getCompanionAdminIndexItems} from "../api/get-companion-admin-index-items.ts";

export async function companionAdminIndexLoader({ request }: LoaderFunctionArgs) {
  const response = await getCompanionAdminIndexItems()

  if(response.status === ResponseStatusType.unauthorized) {
    return redirectToLogin(request)
  }

  return response
}
