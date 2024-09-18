import {RoseQrItem} from "../interfaces/RoseQrItem.ts";
import {useOutletContext} from "react-router-dom";

export type RoseAdminContext = {
  roses: RoseQrItem[]
}

export function useAdminRoses() {
  return useOutletContext<RoseAdminContext>()
}
