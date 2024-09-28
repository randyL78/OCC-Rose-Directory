import {AdminIndexItem} from "../interfaces/AdminIndexItem.ts";
import {useOutletContext} from "react-router-dom";

export type RoseAdminContext = {
  roses: AdminIndexItem[]
}

export function useAdminRoses() {
  return useOutletContext<RoseAdminContext>()
}
