import QrScanner from "./node_modules/qr-scanner/qr-scanner.min.js";
export async function scan() {
  if (!await QrScanner.hasCamera()) return;

  const qrScanner = new QrScanner(
    document.getElementById("scanner"),
    (result: { data: string }) => onResult(qrScanner, result.data),
    {/* your options or returnDetailedScanResult: true if you're not specifying any other options */},
  );

  qrScanner.start();
}

function onResult(qrScanner: QrScanner, result: string) {
  document.open(result);
  qrScanner.stop();
}
