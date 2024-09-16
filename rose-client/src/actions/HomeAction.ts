import {LoaderFunctionArgs, redirect} from "react-router-dom";
import {signIn} from "../api/sign-in.ts";

export async function homeAction({ request }: LoaderFunctionArgs) {
  const data = await request.formData()
  const username = data.get('username') as string
  const password = data.get('password') as string

  const { status } = await signIn({username, password})

  if (status === 'error') {
    return redirect("/?login=true")
  }

  return null
}
