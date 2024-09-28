import {CompanionDetailItem} from "../interfaces/CompanionDetailItem.ts";

export async function companionDetailLoader() {
  return {
    slug: 'obedient-plant',
    name: 'Obedient Plant',
    imageUrl: 'https://directnativeplants.com/wp-content/uploads/2022/01/dreamstime_m_99850767-1.jpg',
    description: 'Also called False Dragonhead, it is a Virginia Native and highly deer resistant. Has lavender-pink, 4-6” tubular flower heads that are long lasting and great for flower arrangements. This attractive perennial is snapdragon-like, but its’ square stem is typical of the mint family. If the flowers are bent, they tend to stay in the new position for a while, hence the common name Obedient Plant. It is wonderfully adaptable, tolerating both drought and poor drainage. Spreads aggressively by stolons but is easy to pull out and keep in check. Obedient plant is a good nectar source for butterflies and hummingbirds. Easy to establish and maintain. Grows 3-5’ tall and in clumps. Prefers full sun and regular watering.'
  } as CompanionDetailItem
}
