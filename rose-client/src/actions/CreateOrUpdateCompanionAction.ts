import {LoaderFunctionArgs, redirect} from "react-router-dom";
import {CompanionDetailItem} from "../interfaces/CompanionDetailItem.ts";
import {routes} from "../constants/routes.ts";
import {createCompanion} from "../api/create-companion.ts";

export async function createOrUpdateCompanionAction({ request, params }: LoaderFunctionArgs) {
  const data = await request.formData()
  const { slug } = params

  const newCompanion: CompanionDetailItem = {
    name: data.get('name') as string,
    slug: '',
    imageUrl: data.get("imageUrl") as string,
    description: data.get("description") as string,
  }

  if(slug) {
    newCompanion.slug = slug
    console.log('updating companion')
  } else {
    await createCompanion(newCompanion)
  }

  return redirect(routes.CompanionAdmin)
}
