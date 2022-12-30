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
        <div class="flex">
          <div>
            <div
              class="h-64 w-64 rounded-full bg-center bg-cover"
              style={"background-image: url(https://www.perfocal.com/blog/content/images/2020/07/Perfocal_Male_Dating_Profile_Portrait_Asian.jpg)"}
            >
            </div>
          </div>
          <div>
            <div>{props.params.eventID}</div>
          </div>
        </div>
        <div class="m-10">
          <h1>My Tickets</h1>
          <TicketGrid></TicketGrid>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
