import {getToken, removeToken} from "../utilities/token.ts";
import {LoaderFunctionArgs} from "react-router-dom";
import {ResponseStatusType} from "../interfaces/Response.ts";
import getAdminRose from "../api/get-admin-rose.ts";
import {redirectToLogin} from "../utilities/redirect-to-login.ts";
import {getRebloomTypes} from "../api/get-rebloom-types.ts";
import {RoseDetailItem} from "../interfaces/RoseDetailItem.ts";

export async function roseAdminDetailLoader({ request, params }: LoaderFunctionArgs) {
  const token = getToken();

  if(!token) {
    return redirectToLogin(request)
  }

  const { roseSlug } = params;

  if(!roseSlug) {
    return new Response("No slug provided", { status: 500 });
  }

  const rebloomTypes = await getRebloomTypes()
  const rosesResponse = await getAdminRose(roseSlug)

  if(rebloomTypes.status !== ResponseStatusType.success) {
    rebloomTypes.data = []
  }

  if(rosesResponse.status === ResponseStatusType.unauthorized) {
    removeToken()
    return redirectToLogin(request)
  }

  const roseData = rosesResponse.data as RoseDetailItem

  let key: keyof RoseDetailItem

  for(key in roseData) {
    // @ts-expect-error we know this is a key of RoseDetailItem
    roseData[key] = roseData[key] || ''
  }

  rosesResponse.data = { rose: roseData, rebloomTypes: rebloomTypes.data as string[] }

  return rosesResponse
}

