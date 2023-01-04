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
  console.log(result);
  const res = await fetch(
    `https://ticket4youdhbw.onrender.com/api/ticket/status/${result}`,
  );
  const obj = await res.json();
  const doc = document.getElementById("bg");
  if (!doc) {
    return;
  }
  if (obj.active == true) {
    doc.style.background = "#00FF00";
    doc.style.opacity = "0.5";
    setTimeout(() => {
      doc.style.background = "0000000";
    }, 1000);
  } else {
    doc.style.background = "#FF0000";
    setTimeout(() => {
      doc.style.background = "0000000";
    }, 1000);
  }
  qrScanner.stop();
}
