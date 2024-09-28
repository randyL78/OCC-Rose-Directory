import {AdminCompanionDetailItem} from "../interfaces/AdminCompanionDetailItem.ts";
import {ResponseStatusType} from "../interfaces/Response.ts";

export async function createCompanionLoader() {
  const companion: AdminCompanionDetailItem = {
    name: '',
    slug: 'Auto Configured',
    imageUrl: '',
    description: '',
    qrCodeUrl: 'Auto Configured',
  }

  return {
    status: ResponseStatusType.success,
    data: companion,
  }
}
