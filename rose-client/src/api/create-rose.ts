import {AdminRoseDetailItem} from "../interfaces/AdminRoseDetailItem.ts";
import {getToken} from "../utilities/token.ts";
import {ResponseStatusType, RoseResponse} from "../interfaces/Response.ts";
import api from "../services/api.ts";
import {RoseQrItem} from "../interfaces/RoseQrItem.ts";

export async function createRose(rose: AdminRoseDetailItem): Promise<RoseResponse> {
  try {
    const token = getToken();
    if(!token) {
      return {
        status: ResponseStatusType.unauthorized,
        errorMessage: "User is not logged in",
      }
    }

    const response = await api.post(`admin/roses`, rose, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })

    if(response.status === 401) {
      return {
        status: ResponseStatusType.unauthorized,
        errorMessage: "User is not logged in",
      }
    }

    if(response.status === 200) {
      return {
        status: ResponseStatusType.success,
        data: response.data as RoseQrItem
      }
    }

  } catch (e) {
    console.error("Error creating rose");
    console.error(e)
    return {
      status: ResponseStatusType.bad_request,
      errorMessage: e as string,
    }
  }

  return {
    status: ResponseStatusType.bad_request,
    errorMessage: 'unknown error occurred'
  }
}
