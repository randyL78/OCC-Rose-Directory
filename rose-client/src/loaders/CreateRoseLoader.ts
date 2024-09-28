import {AdminRoseDetailItem} from "../interfaces/AdminRoseDetailItem.ts";
import {ResponseStatusType, RoseResponse} from "../interfaces/Response.ts";
import {getRebloomTypes} from "../api/get-rebloom-types.ts";

export async function createRoseLoader() {
  const rose: AdminRoseDetailItem = {
    name: '',
    slug: 'Auto configured',
    imageUrl: '',
    thumbnailUrl: '',
    qrCodeUrl: '',
    description: '',
    history: '',
    careInstructions: '',
    reblooms: '',
    fragranceIntensity: 0,
    fragranceDescription: '',
    colorPrimary: '',
    colorSecondary: '',
  }

  const rebloomTypes = await getRebloomTypes()
  if(rebloomTypes.status !== ResponseStatusType.success) {
    rebloomTypes.data = []
  }

  return {
    status: ResponseStatusType.success,
    data: { rose, rebloomTypes: rebloomTypes.data as string[], step: 0 },
  } as RoseResponse
}
