import Header from "../islands/Header.tsx";
import Scanner from "../islands/Scanner.tsx";
import { createQrCodeAsDataUrl } from "../qrcode.ts";

const dataUrl: string = createQrCodeAsDataUrl(
  "1",
);

export default function B2B() {
  return (
    <div>
      <Header></Header>
      <div class="h-screen grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2">
        <img src={dataUrl} class="h-1/2 m-auto" alt="QR-Code"></img>
        <Scanner></Scanner>
      </div>
    </div>
  );
}
