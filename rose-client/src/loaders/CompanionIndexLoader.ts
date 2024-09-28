import {getAllCompanions} from "../api/get-all-companions.ts";

export async function companionIndexLoader() {
  return await getAllCompanions()
}
