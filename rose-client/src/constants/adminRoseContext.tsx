import {AdminIndexItem} from "../interfaces/AdminIndexItem.ts";
import {useOutletContext} from "react-router-dom";

export type AdminIndexContext = {
  plants: AdminIndexItem[]
}

export function useAdminIndex() {
  return useOutletContext<AdminIndexContext>()
}
