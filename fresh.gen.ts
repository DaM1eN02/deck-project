// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/b2b.tsx";
import * as $1 from "./routes/calendar.tsx";
import * as $2 from "./routes/event/[eventID].tsx";
import * as $3 from "./routes/index.tsx";
import * as $4 from "./routes/profile/[profileID].tsx";
import * as $5 from "./routes/search/[string].tsx";
import * as $$0 from "./islands/Calendar.tsx";
import * as $$1 from "./islands/Footer.tsx";
import * as $$2 from "./islands/Header.tsx";
import * as $$3 from "./islands/Scanner.tsx";
import * as $$4 from "./islands/Slider.tsx";
import * as $$5 from "./islands/TicketGrid.tsx";

const manifest = {
  routes: {
    "./routes/b2b.tsx": $0,
    "./routes/calendar.tsx": $1,
    "./routes/event/[eventID].tsx": $2,
    "./routes/index.tsx": $3,
    "./routes/profile/[profileID].tsx": $4,
    "./routes/search/[string].tsx": $5,
  },
  islands: {
    "./islands/Calendar.tsx": $$0,
    "./islands/Footer.tsx": $$1,
    "./islands/Header.tsx": $$2,
    "./islands/Scanner.tsx": $$3,
    "./islands/Slider.tsx": $$4,
    "./islands/TicketGrid.tsx": $$5,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
