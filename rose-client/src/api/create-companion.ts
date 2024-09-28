import {ResponseStatusType, RoseResponse} from "../interfaces/Response.ts";
import {authenticatedRequests} from "./authenticated-request.ts";
import {CompanionDetailItem} from "../interfaces/CompanionDetailItem.ts";

export async function createCompanion(companion: CompanionDetailItem): Promise<RoseResponse> {
  const response = await authenticatedRequests.create('admin/companions',companion)

  if(response.status !== ResponseStatusType.success && response.status !== ResponseStatusType.unauthorized) {
    console.error("Error creating companion plant")
    console.error(response.errorMessage)
  }

  return response
}
