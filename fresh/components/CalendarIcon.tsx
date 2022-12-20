import * as React from "preact";
import IconCalendar from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/calendar.tsx";

export default function CalendarIcon() {
  return (
    <a href="/calendar">
      <IconCalendar size={32}>
      </IconCalendar>
    </a>
  );
}
