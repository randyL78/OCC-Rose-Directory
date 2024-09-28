import api from "../services/api.ts";
import {removeToken, setToken} from "../utilities/token.ts";
import axios from "axios";
import {ResponseStatusType} from "../interfaces/Response.ts";


interface signInParams {
  username: string;
  password: string;
}

export async function signIn({ username, password }: signInParams) {
  try {
    const response = await api.post('login', {}, {
      auth: {
        username,
        password
      }
    });

    if(response.status === 200){
      const token = response.data

      setToken(token);
      return { status: "success" };
    }
  } catch (e) {
    console.error(e)
    if(axios.isAxiosError(e) && e.request.status === 401) {
      removeToken()
      api.defaults.headers.common.Authorization = null

      return {
        status: ResponseStatusType.unauthorized,
        errorMessage: 'Invalid username or password'
      }
    }
  }

  removeToken()
  api.defaults.headers.common.Authorization = null
  return {
    status: ResponseStatusType.unknown,
    errorMessage: 'Unknown error occurred, please try again later'
  };
}

export function signOut() {
  removeToken()
  api.defaults.headers.common.Authorization = null
}
