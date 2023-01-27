import * as scanner from "../qrcode_scanner.ts";

export default function Scanner() {
  return (
    <div class="w-9/10 h-9/10 grid grid-rows-2">
      <video
        id="scanner"
        class="m-auto h-8/10"
      >
      </video>
      <div onClick={scanner.scan} class="m-auto cursor-pointer">Scan</div>
    </div>
  );
}
