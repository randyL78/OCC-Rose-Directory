export interface Rose {
  id?: number;
  name: string;
  slug: string;
  imageUrl: string;
  description: string;
  history: string;
  careInstructions: string;
  reblooms: string;
  fragranceIntensity: number;
  fragranceDescription?: string;
  colorPrimary: string;
  colorSecondary?: string;
  qrCodeUrl?: string;
}
