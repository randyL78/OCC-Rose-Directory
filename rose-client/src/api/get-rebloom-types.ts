import {getToken, setToken} from "../utilities/token.ts";
import {ResponseStatusType, RoseResponse} from "../interfaces/Response.ts";
import api from "../services/api.ts";
import axios from "axios";

export async function getRebloomTypes(): Promise<RoseResponse> {
  try {
    const token = getToken();
    if(!token) {
      return {
        status: ResponseStatusType.unauthorized,
        errorMessage: "User is not logged in",
      }
    }

    const response = await api.get(`admin/reblooms`, {
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
      setToken(token)
      return {
        status: ResponseStatusType.success,
        data: response.data as string[],
      }
    }

  } catch (e) {
    console.error("Error fetching rebloom types");
    console.error(e);

    if(axios.isAxiosError(e) && e.request.status === 401) {
      return {
        status: ResponseStatusType.unauthorized,
        errorMessage: "User is not logged in",
      }
    }

    return {
      status: ResponseStatusType.bad_request,
      errorMessage: e as string
    }
  }

  return {
    status: ResponseStatusType.bad_request,
    errorMessage: 'unknown error occurred'
  }
}
