import {LoaderFunctionArgs, redirect} from "react-router-dom";
import {deleteRose} from "../api/delete-rose.ts";
import {ResponseStatusType} from "../interfaces/Response.ts";


export async function deleteRoseAction({params, request}: LoaderFunctionArgs) {
  const { roseSlug } = params;

  if (!roseSlug) {
    return new Response("No rose slug provided", {status: 400});
  }

  const { status} = await deleteRose(roseSlug);

  if (status === ResponseStatusType.unauthorized || status === ResponseStatusType.unknown) {
    return redirectToLogin(request)
  }

  return redirect('/admin/roses');
}

function redirectToLogin(request: Request) {
  const params = new URLSearchParams();
  params.set("from", new URL(request.url).pathname);
  params.set("login", "true")
  return redirect(`/?${params.toString()}`)
}
