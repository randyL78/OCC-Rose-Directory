import {AdminRoseDetailItem} from "../interfaces/AdminRoseDetailItem.ts";
import {ResponseStatusType, RoseResponse} from "../interfaces/Response.ts";

export async function createRoseLoader() {
  const rose = {
    name: '',
    slug: 'Auto configured',
    imageUrl: '',
    thumbnailUrl: '',
    qrCodeUrl: '',
    description: '',
    history: '',
    careInstructions: '',
    reblooms: '',
    fragranceIntensity: null,
    fragranceDescription: '',
    colorPrimary: '',
    colorSecondary: '',
  } as AdminRoseDetailItem

  return {
    status: ResponseStatusType.success,
    data: rose
  } as RoseResponse
}
