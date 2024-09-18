import {ResponseStatusType, RoseResponse} from "../interfaces/Response.ts";
import {getToken, removeToken} from "../utilities/token.ts";
import api from "../services/api.ts";

export async function deleteRose(slug: string): Promise<RoseResponse> {
  try {
    const token = getToken()
    if (!token) {
      return {
        status: ResponseStatusType.unauthorized,
        errorMessage: "User is not logged in",
      }
    }

    const response = await api.delete(`admin/roses/${slug}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })

    if(response.status === 401) {
      removeToken()
      return {
        status: ResponseStatusType.unauthorized,
        errorMessage: "User is not logged in",
      }
    }

    if(response.status === 200) {
      return {
        status: ResponseStatusType.success,
      }
    }
  } catch (e) {
    console.error(e)
  }

  return {
    status: ResponseStatusType.bad_request,
    errorMessage: "Error deleting rose",
  }
}
