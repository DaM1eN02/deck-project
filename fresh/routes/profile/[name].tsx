import * as React from "preact";
import { PageProps } from "$fresh/server.ts";
import Header from "../../islands/Header.tsx";
import Footer from "../../islands/Footer.tsx";
import TicketGrid from "../../islands/TicketGrid.tsx";

export default function Profile(props: PageProps) {
  return (
    <div class="font-mono h-screen">
      <Header></Header>
      <div class="m-2">
        <div>{props.params.name}</div>
        <div>
          <h1>My Tickets</h1>
          <TicketGrid></TicketGrid>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
