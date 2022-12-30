import * as React from "preact";
import { createQrCodeAsDataUrl } from "../qrcode.ts";

const dataUrl: string = createQrCodeAsDataUrl(
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
);

export default function B2B() {
  return (
    <div class="h-screen grid grid-cols-3">
      <img src={dataUrl} class="h-1/2 m-auto"></img>
      <div class="grid grid-rows-2">
        <button class="m-auto">Scanner</button>
        <div id="reader" class="m-auto"></div>
      </div>
      <div id="result" class="m-auto"></div>
    </div>
  );
}
