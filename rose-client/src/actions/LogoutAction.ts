import {signOut} from "../api/sign-in.ts";
import {redirect} from "react-router-dom";

export async function logOut() {
  signOut()
  return redirect('/')
}
