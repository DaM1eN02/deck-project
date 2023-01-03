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

async function onResult(qrScanner: QrScanner, result: string) {
  const res = await fetch(
    `https://ticket4youdhbw.onrender.com/api/ticket/status/${result}`,
  );
  console.log(res);
  qrScanner.stop();
}
