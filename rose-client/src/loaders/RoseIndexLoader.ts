import getAllRoses from "../api/get-all-roses.ts";

export async function roseIndexLoader() {
  return getAllRoses()
}
