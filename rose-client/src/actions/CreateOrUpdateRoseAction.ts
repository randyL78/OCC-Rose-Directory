import {LoaderFunctionArgs, redirect} from "react-router-dom";
import {createRose} from "../api/create-rose.ts";
import {AdminRoseDetailItem} from "../interfaces/AdminRoseDetailItem.ts";
import {updateRose} from "../api/update-rose.ts";

export async function createOrUpdateRoseAction({ request, params }: LoaderFunctionArgs) {
  const data = await request.formData()
  const { roseSlug } = params;

  const newRose: AdminRoseDetailItem = {
    name: data.get("name") as string,
    slug: data.get("slug") as string,
    imageUrl: data.get("imageUrl") as string,
    thumbnailUrl: data.get("thumbnailUrl") as string || undefined,
    qrCodeUrl: data.get("qrCodeUrl") as string || undefined,
    colorPrimary: data.get("colorPrimary") as string,
    colorSecondary: data.get("colorSecondary") as string || undefined,
    fragranceIntensity: parseInt(data.get("fragranceIntensity") as string),
    fragranceDescription: data.get("fragranceDescription") as string || undefined,
    description: data.get("description") as string,
    careInstructions: data.get("careInstructions") as string,
    history: data.get("history") as string,
    reblooms: data.get("reblooms") as string,
  }

  if(roseSlug) {
    newRose.slug = roseSlug
    await updateRose(newRose);
  } else {
    await createRose(newRose)
  }

  return redirect('/admin/roses')
}
