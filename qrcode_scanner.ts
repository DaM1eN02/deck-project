import QrScanner from "./node_modules/qr-scanner/qr-scanner.min.js";

export async function scan() {
  if (!(await QrScanner.hasCamera())) return;

  const qrScanner = new QrScanner(
    document.getElementById("scanner"),
    (result: { data: string }) => onResult(result.data, qrScanner),
    {
      /* your options or returnDetailedScanResult: true if you're not specifying any other options */
    },
  );

  qrScanner.start();
}

async function onResult(result: string, qrScanner: QrScanner) {
  qrScanner.stop();
  const res = await fetch(
    `https://ticket4youdhbw.onrender.com/api/ticket/status/${result}`,
  );
  const obj = await res.json();
  const doc = document.getElementById("bg");
  if (!doc) {
    return;
  }

  const popBg = document.getElementById("popBg");
  if (!popBg) return;
  const pop = document.getElementById("pop");
  if (!pop) return;

  if (obj.active == true) {
    doc.style.background = "#55ee55";

    popBg.classList.toggle("hidden");

    const element = document.createElement("div");
    element.classList.add(
      "h-full",
      "grid",
      "justify-center",
      "relative",
    );

    const title = document.createElement("div");
    title.classList.add("align-middle", "text-lime-600");
    title.textContent = "SCAN ERFOLGREICH";

    const userData = document.createElement("div");
    userData.classList.add(
      "h-full",
      "grid",
      "justify-center",
      "content-center",
      "items-center",
    );

    const firstName = document.createElement("div");
    firstName.append(obj.Owner.first_name);

    const lastName = document.createElement("div");
    lastName.append(obj.Owner.last_name);

    const bday = document.createElement("div");
    bday.append(obj.Owner.birthdate);

    userData.append(firstName, lastName, bday);

    const button = document.createElement("button");
    button.textContent = "Next";
    button.onclick = () => {
      doc.style.background = "#ffffff";
      popBg.classList.toggle("hidden");
      qrScanner.start();
    };

    element.append(title, userData, button);
    pop.appendChild(element);
  } else {
    doc.style.background = "#ee5555";

    popBg.classList.toggle("hidden");

    const element = document.createElement("div");
    element.classList.add(
      "h-full",
      "grid",
      "justify-center",
      "relative",
    );

    const title = document.createElement("div");
    title.classList.add("align-middle", "text-red-600");
    title.textContent = "SCAN FEHLGESCHLAGEN";

    const userData = document.createElement("div");
    userData.append(obj.Error);

    const button1 = document.createElement("button");
    button1.textContent = "Try Again";
    button1.onclick = () => {
      doc.style.background = "#ffffff";
      popBg.classList.toggle("hidden");
      qrScanner.start();
    };

    const button2 = document.createElement("button");
    button2.textContent = "Try Again";
    button2.onclick = () => {
      doc.style.background = "#ffffff";
      popBg.classList.toggle("hidden");
      qrScanner.start();
    };

    element.append(title, userData, button1, button2);
    pop.appendChild(element);
  }
}
