import { tw } from "twind";
import { css } from "twind/css";
import Footer from "../islands/Footer.tsx";
import Header from "../islands/Header.tsx";
import Slider from "../islands/Slider.tsx";
import { events, EventType } from "../events.ts";

const bottom = css({
  bottom: "-16.6%",
});

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  bday: string;
};

export default function Home() {
  return (
    <div class="font-mono h-screen select-none">
      <div
        id="background"
        class="h-2/3 bg-cover relative transition ease-out duration-500 overflow-x-hidden"
        style={"background-image:linear-gradient(rgba(0, 0, 40, 0.5),rgba(0, 0, 40, 0.5)), url(https://res.cloudinary.com/j2ski/albums/u44159/20200312/ischgl-im-winter)"}
      >
        <Header fixed={true}></Header>
        <div class={tw`h-5/6 grid relative ${bottom}`}>
          <Slider></Slider>
        </div>
      </div>
      <div class="grid gap-2 p-5">
        {events.map((event) => {
          return <Event {...event}></Event>;
        })}
      </div>
      <Footer></Footer>
    </div>
  );
}

function Event(slide: EventType) {
  return (
    <a
      href={`/event/${slide.id}`}
      class="w-11/12 h-64 m-auto border flex items-center gap-5 p-5 odd:flex-row even:flex-row-reverse"
    >
      <iframe
        class="h-5/6 rounded-full bg-cover hover:scale-125 transition ease-out duration-500"
        style={`background-image:url(${slide.image}); aspect-ratio: 1 / 1`}
      >
      </iframe>
      <div class="flex flex-col items-center mx-5">
        <div class="pointer-events-none">{slide.name}</div>
        <div>{slide.country}</div>
        <div>{slide.description}</div>
      </div>
    </a>
  );
}
