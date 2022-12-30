import * as React from "preact";
import { createQrCodeAsDataUrl } from "../qrcode.ts";
// import QrScanner from "../node_modules/qr-scanner/qr-scanner.min.js";

const dataUrl: string = createQrCodeAsDataUrl(
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
);

export default function B2B() {
  return (
    <div class="h-screen grid grid-cols-3">
      <img src={dataUrl} class="h-1/2 m-auto" alt="QR-Code"></img>
      <div class="grid grid-rows-2">
        <video id="scanner"></video>
        <div
          onClick={test}
          class="h-full w-full m-auto border"
        >
          Scanner
        </div>
      </div>
      <div>
        <div id="result" class="m-auto">Ok</div>
      </div>
    </div>
  );
}

function test() {
  alert("Test");
  console.log("Test");
  const element = document.getElementById("result");
  if (!element) return;
  element.innerText = "Test";
  // const qrScanner = new QrScanner(
  //   "scanner",
  //   (result: string) => console.log("decoded qr code:", result),
  //   {/* your options or returnDetailedScanResult: true if you're not specifying any other options */},
  // );
}
