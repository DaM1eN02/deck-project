import Header from "../islands/Header.tsx";
import Scanner from "../islands/Scanner.tsx";

export default function B2B() {
  return (
    <div id="bg" class="h-screen overflow-x-hidden">
      <Header></Header>
      <div class="m-5 w-full grid justify-center">
        <Scanner></Scanner>
      </div>
    </div>
  );
}
