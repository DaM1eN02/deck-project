import { createRequire } from "https://deno.land/std@0.170.0/node/module.ts";

const require = createRequire(import.meta.url);
const qrcode = require("./node_modules/qrcode-generator");

export function createQrCodeAsDataUrl(data: string) {
  // create a QR code object
  const typeNumber = 0;
  const errorCorrectionLevel = "H";
  const qr = qrcode(typeNumber, errorCorrectionLevel);

  // add the data to the QR code object
  qr.addData(data);
  qr.make();

  // create an image from the QR code data and return it as a data URL
  return qr.createDataURL(4, 0);
}
