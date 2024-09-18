import {AdminRoseDetailItem} from "../interfaces/AdminRoseDetailItem.ts";

export async function createRoseLoader() {
  return {
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
  } as AdminRoseDetailItem
}
