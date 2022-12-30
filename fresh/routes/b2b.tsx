import * as React from "preact";
import { createQrCodeAsDataUrl } from "../qrcode.ts";

// test the function
const dataUrl: string = createQrCodeAsDataUrl(
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
);

export default function B2B() {
  return (
    <div class="h-screen flex justify-center items-center">
      <img src={dataUrl} class="h-1/2"></img>
    </div>
  );
}
