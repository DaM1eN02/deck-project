import { PageProps } from "$fresh/server.ts";
import Header from "../../islands/Header.tsx";
import Footer from "../../islands/Footer.tsx";

export default function Event(props: PageProps) {
  return (
    <div class="font-mono select-none">
      <Header></Header>
      <div class="grid grid-cols-3 gap-4">
        <div>Event Photo</div>
        <div class="col-span-2">Options</div>
      </div>
      <Footer></Footer>
    </div>
  );
}
