import { createQrCodeAsDataUrl } from "../qrcode.ts";
import { useEffect, useRef, useState } from "preact/hooks";

type EventType = {
  children?: never[];
  id: string;
  event: string;
  image: string | undefined;
};

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

type Props = {
  userId: number;
};

const events: EventType[] = [{
  id: "1",
  event: "Skipass Ischgl",
  image:
    "https://res.cloudinary.com/j2ski/albums/u44159/20200312/ischgl-im-winter",
}, {
  id: "2",
  event: "Skipass Wagrain",
  image:
    "https://th.bing.com/th/id/R.de95e607fcfe957e32c671ae46ce6d7c?rik=c0kgCFsKaamrcg&pid=ImgRaw&r=0",
}, {
  id: "3",
  event: "Skipass Zermatt",
  image:
    "https://th.bing.com/th/id/R.69bc4aeb7d73b0888ac9d954a19262e5?rik=cqA0eVZHhp6FMA&riu=http%3a%2f%2fcdn.justluxe.com%2farticles%2fimages%2fnews%2fshutterstock_254090041.jpg&ehk=hdbqYVj3jpk8mYnlbqkLIVt2NDH7VySp4c0cQRtrWeU%3d&risl=&pid=ImgRaw&r=0",
}, {
  id: "4",
  event: "Skipass Oberwallis",
  image:
    "https://th.bing.com/th/id/OIP.O3VLujsHNvUO0wEzJKrMRwHaE8?pid=ImgDet&rs=1",
}];

// export const handler: Handlers<TicketType[]> = {
//   async GET(_, ctx) {
//     const userId = ctx.params;
//     const res = await fetch(
//       `https://ticket4youdhbw.onrender.com/api/ticket/allOfUser/${userId}`,
//     );
//     return ctx.render((await res.json()).ticketlist);
//   },
// };

export default function TicketGrid(
  { userId }: Props,
) {
  const [results, setResults] = useState([]);

  fetch(
    `https://ticket4youdhbw.onrender.com/api/ticket/allOfUser/${userId}`,
  ).then(async (res) => {
    const list = (await res.json()).ticketlist;
    setResults(list);
  });

  return (
    <div class="w-9/12 m-auto grid grid-cols-3 justify-items-center gap-8">
      {results.map((ticket: TicketType) => {
        const event = events.find((event) => {
          if (event.event == ticket.eventName) return event;
        });
        return (
          <Ticket
            id={ticket.ticketId.toString()}
            event={ticket.eventName}
            image={event ? event.image : ""}
          >
          </Ticket>
        );
      })}
    </div>
  );
}

function Ticket({ id, event, image }: EventType) {
  const dataUrl: string = createQrCodeAsDataUrl(
    id,
  );

  return (
    <div
      class="w-full bg-center bg-cover flex flex-col items-center justify-center"
      style={"background-image:url(" + image + "); aspect-ratio: 1 / 1"}
      onClick={() => {
        document.getElementById(id)?.classList.toggle("hidden");
      }}
    >
      <div class="text-white" style="background: rgba(0, 0, 0, 0.7);">
        <div>{event}</div>
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
