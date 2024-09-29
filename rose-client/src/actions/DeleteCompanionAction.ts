import {LoaderFunctionArgs, redirect} from "react-router-dom";
import {ResponseStatusType} from "../interfaces/Response.ts";
import {redirectToLogin} from "../utilities/redirect-to-login.ts";
import {deleteCompanion} from "../api/delete-companion.ts";
import {routes} from "../constants/routes.ts";

export async function deleteCompanionAction({params, request}: LoaderFunctionArgs) {
  const { slug } = params

  if(!slug) {
    return new Response("No companion slug provided", {status: 400})
  }

  const { status } = await deleteCompanion(slug)

  if (status === ResponseStatusType.unauthorized || status === ResponseStatusType.unknown) {
    return redirectToLogin(request)
  }

  return redirect(routes.CompanionAdmin);
}
