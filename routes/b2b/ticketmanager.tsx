import Footer from "../../islands/Footer.tsx";
import Header from "../../islands/Header.tsx";
import { css, tw } from "twind/css";
import { http } from "../../fetch.ts";
import { useEffect } from "preact/hooks";

const height = css({
  height: "calc(100% - (66.6% * 0.166) - 8rem)",
});

export default function TicketManager() {
  useEffect(() => {
    console.log("Test");
  });

  return (
    <div class="font-mono h-screen overflow-x-hidden select-none">
      <Header></Header>
      <div class={tw`grid grid-rows-3 p-5 ${height}`}>
        <div class="grid justify-center items-center">
          <b class="text-3xl text-blue-400">Ticket Manager</b>
        </div>
        <div class="grid justify-center items-center">
          <input
            placeholder="Ticket ID"
            value=""
            label="ticketID"
            id="ticketInput"
            class="border bg-blue-200"
          >
          </input>
        </div>
        <div class="grid grid-cols-2 gap-5">
          <Button label="Ticket aktivieren"></Button>
          <Button label="Ticket deaktivieren"></Button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

type Props = {
  label: string;
};

function Button({ label }: Props) {
  return (
    <button
      class="rounded bg-blue-200"
      onClick={() => {
        console.log(1);
      }}
    >
      {label}
    </button>
  );
}

async function ticket(activate: boolean) {
  const func = activate ? "activate" : "deactivate";
  //@ts-ignore
  const ticketID = document.getElementById("ticketInput").value;
  const res = http(
    `https://ticket4youdhbw.onrender.com/api/ticket/${func}/${ticketID}`,
    "POST",
  );

  console.log(await res);
}
