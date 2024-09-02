import getRoseQrCodes from "../api/get-rose-qr-codes.ts";

export async function roseAdminIndexLoader() {
  return getRoseQrCodes();
}
