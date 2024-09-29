import {AdminCompanionDetailItem} from "../interfaces/AdminCompanionDetailItem.ts";
import {ResponseStatusType, RoseResponse} from "../interfaces/Response.ts";
import {authenticatedRequests} from "./authenticated-request.ts";

export async function updateCompanion(companion: AdminCompanionDetailItem): Promise<RoseResponse> {
  const response = await authenticatedRequests.update(`admin/companions/${companion.slug}`,companion)

  if(response.status !== ResponseStatusType.success && response.status !== ResponseStatusType.unauthorized) {
    console.error("Error updating companion plant")
    console.error(response.errorMessage)
  }

  return response
}
