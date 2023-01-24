import Header from "../islands/Header.tsx";
import Footer from "../islands/Footer.tsx";
import TicketGrid from "../islands/TicketGrid.tsx";
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
              style={`background-image: url("/franke.jpeg")`}
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
