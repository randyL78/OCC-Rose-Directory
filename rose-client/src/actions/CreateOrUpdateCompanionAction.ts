import {LoaderFunctionArgs, redirect} from "react-router-dom";
import {routes} from "../constants/routes.ts";
import {createCompanion} from "../api/create-companion.ts";
import {updateCompanion} from "../api/update-companion.ts";
import {AdminCompanionDetailItem} from "../interfaces/AdminCompanionDetailItem.ts";

export async function createOrUpdateCompanionAction({ request, params }: LoaderFunctionArgs) {
  const data = await request.formData()
  const { slug } = params

  const newCompanion: AdminCompanionDetailItem = {
    name: data.get('name') as string,
    slug: '',
    imageUrl: data.get("imageUrl") as string,
    description: data.get("description") as string,
    qrCodeUrl: data.get("qrCodeUrl") as string,
  }

  if(slug) {
    newCompanion.slug = slug
    await updateCompanion(newCompanion)
  } else {
    await createCompanion(newCompanion)
  }

  return redirect(routes.CompanionAdmin)
}
