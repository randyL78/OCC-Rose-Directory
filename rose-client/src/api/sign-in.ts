import api from "../services/api.ts";
import {removeToken, setToken} from "../utilities/token.ts";


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
  }

  removeToken()
  api.defaults.headers.common.Authorization = null
  return { status: "error" };
}

export function signOut() {
  removeToken()
  api.defaults.headers.common.Authorization = null
}
