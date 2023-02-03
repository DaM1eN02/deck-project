import Footer from "../../islands/Footer.tsx";
import Header from "../../islands/Header.tsx";
import Scanner from "../../islands/Scanner.tsx";
import ScannerPopup from "../../islands/ScannerPopup.tsx";
import { css, tw } from "twind/css";

const height = css({
  height: "calc(100% - (66.6% * 0.166) - 8rem)",
});

export default function TicketScanner() {
  return (
    <div id="bg" class={tw`h-screen overflow-x-hidden select-none`}>
      <Header></Header>
      <div class={tw`w-full ${height} flex justify-center`}>
        <Scanner></Scanner>
        <ScannerPopup></ScannerPopup>
      </div>
      <Footer></Footer>
    </div>
  );
}
