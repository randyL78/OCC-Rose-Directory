import {PlantIndexItem} from "../interfaces/PlantIndexItem.ts";

export async function companionIndexLoader() {
  return [
    {
      slug: 'obedient-plant',
      name: 'Obedient Plant',
      imageUrl: 'https://directnativeplants.com/wp-content/uploads/2022/01/dreamstime_m_99850767-1.jpg'
    }
  ] as PlantIndexItem[]
}
