import Footer from "../../islands/Footer.tsx";
import Header from "../../islands/Header.tsx";
import { css, tw } from "twind/css";
import { http } from "../../fetch.ts";

const height = css({
  height: "calc(100% - (66.6% * 0.166) - 8rem)",
});

export default function TicketManager() {
  return (
    <div class="h-screen overflow-x-hidden select-none">
      <Header></Header>
      <div class={tw`grid grid-rows-3 p-5 ${height}`}>
        <div class="grid justify-center items-center">
          <b class="text-3xl text-blue-400">Ticket Manager</b>
        </div>
        <div class="grid justify-center items-center">
          <input
            id="ticketInput"
            class="border bg-blue-200"
          >
          </input>
        </div>
        <div class="grid grid-cols-2 gap-5">
          <button
            class="border bg-blue-200"
            onClickCapture={() => {
              console.log(1);
            }}
          >
            Ticket aktivieren
          </button>
          <button
            class="border bg-blue-200"
            onClick={() => {
              console.log(2);
            }}
          >
            Ticket deaktivieren
          </button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

async function ticket(activate: boolean) {
  console.log("Test");
  const func = activate ? "activate" : "deactivate";
  //@ts-ignore
  const ticketID = document.getElementById("ticketInput").value;
  console.log(ticketID);
  const res = http(
    `https://ticket4youdhbw.onrender.com/api/ticket/${func}/${ticketID}`,
    "POST",
  );

  console.log(await res);
}
