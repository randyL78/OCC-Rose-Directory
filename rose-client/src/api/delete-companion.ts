import {ResponseStatusType, RoseResponse} from "../interfaces/Response.ts";
import {authenticatedRequests} from "./authenticated-request.ts";

export async function deleteCompanion(slug: string): Promise<RoseResponse> {
  const response = await authenticatedRequests.delete(`admin/companions/${slug}`);

  if(response.status !== ResponseStatusType.success && response.status !== ResponseStatusType.unauthorized) {
    console.error("Error deleting companion plant");
    console.error(response.errorMessage)
  }

  return response
}
