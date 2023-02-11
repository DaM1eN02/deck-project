import Footer from "../islands/Footer.tsx";
import Header from "../islands/Header.tsx";
import { css, tw } from "twind/css";

const height = css({
  height: "calc(100% - (66.6% * 0.166) - 8rem)",
});

export default function B2B() {
  return (
    <div id="bg" class={tw`font-mono h-screen overflow-x-hidden select-none`}>
      <Header></Header>
      <div
        class={tw`grid grid-cols-2 text-center p-5 gap-5 ${height}`}
      >
        <a
          href="/b2b/ticketmanager"
          class="h-full grid justify-center items-center bg-blue-200 rounded"
        >
          <div>Ticket Manager</div>
        </a>
        <a
          href="/b2b/ticketscanner"
          class="h-full grid justify-center items-center bg-blue-200 rounded"
        >
          <div>Ticket Scanner</div>
        </a>
      </div>
      <Footer></Footer>
    </div>
  );
}
