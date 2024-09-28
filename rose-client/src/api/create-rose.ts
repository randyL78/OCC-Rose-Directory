import {AdminRoseDetailItem} from "../interfaces/AdminRoseDetailItem.ts";
import {ResponseStatusType, RoseResponse} from "../interfaces/Response.ts";
import {authenticatedRequests} from "./authenticated-request.ts";

export async function createRose(rose: AdminRoseDetailItem): Promise<RoseResponse> {
  const response = await authenticatedRequests.create('admin/roses',rose)

  if(response.status !== ResponseStatusType.success && response.status !== ResponseStatusType.unauthorized) {
    console.error("Error creating rose")
    console.error(response.errorMessage)
  }

  return response
}
