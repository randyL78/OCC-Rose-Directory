import {ResponseStatusType, RoseResponse} from "../interfaces/Response.ts";
import {authenticatedRequests} from "./authenticated-request.ts";

export async function deleteRose(slug: string): Promise<RoseResponse> {
  const response = await authenticatedRequests.delete(`admin/roses/${slug}`)

  if(response.status !== ResponseStatusType.success && response.status !== ResponseStatusType.unauthorized) {
    console.error("Error deleting rose")
    console.error(response.errorMessage)
  }

  return response
}
