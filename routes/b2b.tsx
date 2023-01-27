import Footer from "../islands/Footer.tsx";
import Header from "../islands/Header.tsx";
import { css, tw } from "twind/css";

const height = css({
  height: "calc(100% - (66.6% * 0.166) - 8rem)",
});

export default function B2B() {
  return (
    <div id="bg" class={tw`h-screen overflow-x-hidden select-none`}>
      <Header></Header>
      <div class={tw`grid grid-cols-2 ${height}`}>
        <a href="/ticketmanager">Ticket Manager</a>
        <a href="/ticketscanner">Ticket Scanner</a>
      </div>
      <Footer></Footer>
    </div>
  );
}
