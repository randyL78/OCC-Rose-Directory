import {LoaderFunctionArgs, redirect} from "react-router-dom";
import {deleteRose} from "../api/delete-rose.ts";
import {ResponseStatusType} from "../interfaces/Response.ts";
import {redirectToLogin} from "../utilities/redirect-to-login.ts";
import {routes} from "../constants/routes.ts";


export async function deleteRoseAction({params, request}: LoaderFunctionArgs) {
  const { roseSlug } = params;

  if (!roseSlug) {
    return new Response("No rose slug provided", {status: 400});
  }

  const { status} = await deleteRose(roseSlug);

  if (status === ResponseStatusType.unauthorized || status === ResponseStatusType.unknown) {
    return redirectToLogin(request)
  }

  return redirect(routes.RoseAdmin);
}

