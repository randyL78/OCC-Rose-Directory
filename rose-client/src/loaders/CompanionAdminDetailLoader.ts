import {LoaderFunctionArgs} from "react-router-dom";
import {ResponseStatusType} from "../interfaces/Response.ts";
import {redirectToLogin} from "../utilities/redirect-to-login.ts";
import {AdminCompanionDetailItem} from "../interfaces/AdminCompanionDetailItem.ts";
import {getAdminCompanion} from "../api/get-admin-companion.ts";

export async function companionAdminDetailLoader({ request, params }: LoaderFunctionArgs) {
  const { slug } = params

  if(!slug){
    return new Response("No slug provided", { status: 500 });
  }

  const companionResponse = await getAdminCompanion(slug);

  if(companionResponse.status === ResponseStatusType.unauthorized) {
    return redirectToLogin(request)
  }

  return companionResponse.data as AdminCompanionDetailItem
}
