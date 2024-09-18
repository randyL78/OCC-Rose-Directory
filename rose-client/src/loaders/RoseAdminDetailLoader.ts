import {getToken, removeToken} from "../utilities/token.ts";
import {LoaderFunctionArgs} from "react-router-dom";
import {ResponseStatusType} from "../interfaces/Response.ts";
import getAdminRose from "../api/get-admin-rose.ts";
import {redirectToLogin} from "../utilities/redirect-to-login.ts";

export async function roseAdminDetailLoader({ request, params }: LoaderFunctionArgs) {
  const token = getToken();

  if(!token) {
    return redirectToLogin(request)
  }

  const { roseSlug } = params;

  if(!roseSlug) {
    return new Response("No slug provided", { status: 500 });
  }

  const rosesResponse = await getAdminRose(roseSlug)

  if(rosesResponse.status === ResponseStatusType.unauthorized) {
    removeToken()
    return redirectToLogin(request)
  }

  return rosesResponse
}

