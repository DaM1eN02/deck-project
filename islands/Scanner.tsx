import * as React from "preact";
import * as scanner from "../qrcode_scanner.ts";
import { useRef } from "preact/hooks";

export default function Scanner() {
  useRef(null);
  return (
    <div class="grid grid-rows-2">
      <video id="scanner" class="m-auto"></video>
      <div onClick={scanner.scan} class="m-auto cursor-pointer">Scan</div>
    </div>
  );
}
