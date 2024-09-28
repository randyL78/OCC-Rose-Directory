import {AdminRoseDetailItem} from "../interfaces/AdminRoseDetailItem.ts";
import {ResponseStatusType, RoseResponse} from "../interfaces/Response.ts";
import {authenticatedRequests} from "./authenticated-request.ts";

export async function updateRose(rose: AdminRoseDetailItem): Promise<RoseResponse> {
  const response = await authenticatedRequests.update(`admin/roses/${rose.slug}`,rose)

  if(response.status !== ResponseStatusType.success && response.status !== ResponseStatusType.unauthorized) {
    console.error("Error updating rose")
    console.error(response.errorMessage)
  }

  return response
}
