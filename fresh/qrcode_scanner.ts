import { createRequire } from "https://deno.land/std@0.170.0/node/module.ts";

const require = createRequire(import.meta.url);
const Html5QrcodeScanner = require("html5-qrcode");

export function scanner() {
  console.log("Scanning");
  const html5QrcodeScanner = new Html5QrcodeScanner(
    "reader",
    { fps: 10, qrbox: { width: 250, height: 250 } },
    /* verbose= */ false,
  );
  html5QrcodeScanner.render(onScanSuccess, onScanFailure);
}

function onScanSuccess(decodedText: string, decodedResult: string) {
  // handle the scanned code as you like, for example:
  console.log(`Code matched = ${decodedText}`, decodedResult);
}

function onScanFailure(error: string) {
  // handle scan failure, usually better to ignore and keep scanning.
  // for example:
  console.warn(`Code scan error = ${error}`);
}
