import api from "../services/api.ts";
import {getToken} from "../utilities/token.ts";
import {ResponseStatusType, RoseResponse} from "../interfaces/Response.ts";
import {RoseQrItem} from "../interfaces/RoseQrItem.ts";
import axios from "axios";

async function getRoseQrCodes(): Promise<RoseResponse> {
  try {
    const token = getToken();
    if(!token) {
      return {
        status: ResponseStatusType.unauthorized,
        errorMessage: "User is not logged in",
      }
    }

    const response = await api.get('admin/roses', {
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
        data: response.data as RoseQrItem[],
      }
    }

  } catch (e) {
    console.log("Error fetching Admin Roses")
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

export default getRoseQrCodes;
