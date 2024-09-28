import {getToken, removeToken, setToken} from "../utilities/token.ts";
import {ResponseStatusType, ResponseDataType} from "../interfaces/Response.ts";
import api from "../services/api.ts";

interface ServerResponse {
  data: ResponseDataType;
  status: number;
}

export class authenticatedRequests {
  static async update(url: string, data: ResponseDataType) {
    const request = async (token: string) => await api.put(url, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })

    return this.perform(request)
  }


  static async create(url: string, data: ResponseDataType) {
    const request = async (token: string) => await api.post(url, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })

    return this.perform(request)
  }

  static async delete(url: string) {
    const request = async (token: string) =>  await api.delete(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })

    return this.perform(request)
  }

  static async get(url: string) {
    const request = async (token: string) =>  await api.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })

    return this.perform(request)
  }

  static async perform(request: { (token: string): Promise<ServerResponse> }) {
    try {
      const token = getToken()
      if (!token) {
        return {
          status: ResponseStatusType.unauthorized,
          errorMessage: "User is not logged in",
        }
      }

     const response = await request(token)

      if(response.status === 401) {
        removeToken()
        return {
          status: ResponseStatusType.unauthorized,
          errorMessage: "User is not logged in",
        }
      }

      if(response.status >= 200 && response.status < 300) {
        setToken(token)

        return {
          status: ResponseStatusType.success,
          data: response.data as ResponseDataType,
        }
      }
    } catch (e) {
      return {
        status: ResponseStatusType.bad_request,
        errorMessage: e as string,
      }
    }

    return {
      status: ResponseStatusType.bad_request,
      errorMessage: "Error deleting rose",
    }
  }
}
