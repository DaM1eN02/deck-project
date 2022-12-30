import QrScanner from "./node_modules/qr-scanner/qr-scanner.min.js";
export async function scan() {
  console.log("Test");
  if (!await QrScanner.hasCamera()) return;
  console.log(QrScanner.listCameras);

  const qrScanner = new QrScanner(
    document.getElementById("scanner"),
    (result: string) => console.log("decoded qr code:", result),
    {/* your options or returnDetailedScanResult: true if you're not specifying any other options */},
  );
  qrScanner.start();
}
