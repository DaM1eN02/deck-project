import { PageProps } from "$fresh/server.ts";
import Header from "../../islands/Header.tsx";
import Footer from "../../islands/Footer.tsx";
import TicketGrid from "../../islands/TicketGrid.tsx";

export default function Profile(props: PageProps) {
  return (
    <div class="font-mono h-screen overflow-x-hidden select-none">
      <Header></Header>
      <div class="m-2">
        <div class="flex">
          <div>
            <div
              class="h-64 w-64 rounded-full bg-center bg-cover"
              style={"background-image: url(https://www.funnytummy.com/wp-content/uploads/2021/10/funny-profile-pictures-1-772x1024.jpg)"}
            >
            </div>
          </div>
          <div>
            <div>{props.params.eventID}</div>
          </div>
        </div>
        <div class="m-10">
          <h1>My Tickets</h1>
          <TicketGrid userId={1}></TicketGrid>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
