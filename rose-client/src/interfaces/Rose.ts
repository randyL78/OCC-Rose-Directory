export interface Rose {
  id: number;
  name: string;
  slug: string;
  description: string;
  imageUrl: string;
  history: string;
  careInstructions: string;
  reblooms: boolean;
  fragranceIntensity: number;
  fragranceDescription: string;
  colorPrimary: string;
  colorSecondary?: string;
}
