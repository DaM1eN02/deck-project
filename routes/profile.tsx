import { PageProps } from "$fresh/server.ts";
import Header from "../islands/Header.tsx";
import Footer from "../islands/Footer.tsx";
import TicketGrid from "../islands/TicketGrid.tsx";
import { useEffect, useState } from "preact/hooks";
import { readCookie } from "../cookie.ts";
import UserData from "../islands/UserData.tsx";

export default function Profile() {
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
          <UserData></UserData>
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
