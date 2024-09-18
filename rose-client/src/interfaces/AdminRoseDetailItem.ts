export interface AdminRoseDetailItem {
  id?: number;
  name: string;
  slug: string ;
  imageUrl: string;
  qrCodeUrl?: string;
  thumbnailUrl?: string;
  description: string;
  history: string;
  careInstructions: string;
  reblooms: string;
  fragranceIntensity: number;
  fragranceDescription?: string;
  colorPrimary: string;
  colorSecondary?: string;
}
