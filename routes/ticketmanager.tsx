import Footer from "../islands/Footer.tsx";
import Header from "../islands/Header.tsx";
import { css, tw } from "twind/css";

const height = css({
  height: "calc(100% - (66.6% * 0.166) - 8rem)",
});

export default function TicketManager() {
  return (
    <div>
      <Header></Header>
      <div class={tw`${height}`}></div>
      <Footer></Footer>
    </div>
  );
}
