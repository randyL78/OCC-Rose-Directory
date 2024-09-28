import {ResponseStatusType, RoseResponse} from "../interfaces/Response.ts";
import {authenticatedRequests} from "./authenticated-request.ts";
import {AdminIndexItem} from "../interfaces/AdminIndexItem.ts";

export async function getCompanionAdminIndexItems(): Promise<RoseResponse> {
  const response = await authenticatedRequests.get('admin/companions')

  if(response.status === ResponseStatusType.success) {
    return {
      status: ResponseStatusType.success,
      data: response.data as AdminIndexItem[],
    }
  }

  if(response.status !== ResponseStatusType.unauthorized) {
    console.error("Error fetching Admin Companion Plants")
    console.error(response.errorMessage)
  }

  return response
}
