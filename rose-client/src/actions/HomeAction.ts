import {LoaderFunctionArgs, redirect} from "react-router-dom";
import {signIn} from "../api/sign-in.ts";

export async function homeAction({ request }: LoaderFunctionArgs) {
  const data = await request.formData()
  const username = data.get('username') as string
  const password = data.get('password') as string
  const from = data.get('from') as string | null

  const { status } = await signIn({username, password})

  if (status === 'error') {
    const params = new URLSearchParams();
    params.set("from", from || '/');
    params.set("login", "true")
    return {
      error: "Invalid username or password",
    }
  }

  return redirect(from || '/')
}
