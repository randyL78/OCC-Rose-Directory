import {roses} from "../data/roses.ts";
import {RoseQrItem} from "../interfaces/RoseQrItem.ts";

function getRoseQrCodes(): RoseQrItem[] {
  return roses
    .map(({name, qrCodeUrl, slug, id}) => ({ id, name, qrCodeUrl, slug }))
    .sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1);
}

export default getRoseQrCodes;
