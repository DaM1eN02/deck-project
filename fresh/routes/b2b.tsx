import * as React from "preact";
import { Html5QrcodeScanner } from "../node_modules/html5-qrcode/cjs/html5-qrcode-scanner.js";
import { createQrCodeAsDataUrl } from "../qrcode.ts";

const dataUrl: string = createQrCodeAsDataUrl(
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
);

export default function B2B() {
  return (
    <div class="h-screen grid grid-cols-3">
      <script src="../node_modules/html5-qrcode/html5-qrcode.min.js"></script>
      <img src={dataUrl} class="h-1/2 m-auto"></img>
      <div class="grid grid-rows-2">
        <button onClick={scan} class="m-auto">Scanner</button>
        <div id="reader" class="m-auto"></div>
      </div>
      <div id="result" class="m-auto"></div>
    </div>
  );
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

function scan() {
  let html5QrcodeScanner = new Html5QrcodeScanner(
    "reader",
    { fps: 10, qrbox: { width: 250, height: 250 } },
    /* verbose= */ false,
  );
  html5QrcodeScanner.render(onScanSuccess, onScanFailure);
}
