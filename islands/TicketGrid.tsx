import { createQrCodeAsDataUrl } from "../qrcode.ts";
import { StateUpdater, useEffect, useState } from "preact/hooks";
import { events, EventType } from "../events.ts";
import { readCookie } from "../cookie.ts";
import { http } from "../fetch.ts";

type TicketType = {
  ticketId: number;
  userId: number;
  eventName: string;
  startDate: string;
  endDate: string;
  ticketDetails: string;
  active: boolean;
  redeemDays: number;
  lastRedeemed: string | null;
};

async function refreshResults(
  setResults: StateUpdater<never[]>,
  userID: string,
) {
  const res = http(
    `https://ticket4youdhbw.onrender.com/api/ticket/allOfUser/${userID}`,
    "GET",
  );
  setResults((await res).ticketlist ?? []);
}

export default function TicketGrid() {
  const [results, setResults] = useState([]);
  const [userID, setUserID] = useState("0");

  useEffect(() => {
    setUserID(readCookie("userID") ?? "0");
    refreshResults(setResults, userID);
  });

  return (
    <div class="w-9/12 m-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 justify-items-center gap-8">
      {results.map((ticket: TicketType) => {
        const event = events.find((event) => {
          if (event.name == ticket.eventName) return event;
        });
        return (
          <Ticket
            id={ticket.ticketId.toString()}
            name={ticket.eventName}
            country={event?.country ?? ""}
            description={event?.description ?? ""}
            image={event?.image ?? ""}
          >
          </Ticket>
        );
      })}
    </div>
  );
}

function Ticket({ id, name, country, description, image }: EventType) {
  const dataUrl: string = createQrCodeAsDataUrl(
    id,
  );

  return (
    <div
      class="w-full bg-center bg-cover flex flex-col items-center justify-center border"
      style={"background-image:url(" + image + "); aspect-ratio: 1 / 1"}
      onClick={() => {
        document.getElementById(id)?.classList.toggle("hidden");
      }}
    >
      <div class="text-white" style="background: rgba(0, 0, 0, 0.7);">
        <div>{name}</div>
      </div>
      <div
        id={id}
        class="hidden z-40 w-full h-full fixed top-0 left-0 flex items-center justify-center"
        style="background: rgba(0, 0, 0, 0.8);"
      >
        <div
          class="z-50 flex flex-col content-center items-center h-2/3"
          style={"background: rgba(200, 200, 200, 1); aspect-ratio: 1 / 1"}
        >
          <h1 class="text-xs sm:text-md md:text-xl lg:text-3xl xl:text-5xl 2xl-text-7xl text-black">
            SCAN TO VERIFY
          </h1>
          <img
            src={dataUrl}
            class="h-2/3 my-auto mx-5"
            alt="QR-Code"
          >
          </img>
        </div>
      </div>
    </div>
  );
}
