import { tw } from "twind";
import { css } from "twind/css";
import Footer from "../islands/Footer.tsx";
import Header from "../islands/Header.tsx";
import Slider from "../islands/Slider.tsx";

const slides: Array<Slide> = [
  {
    title: "Ischgl",
    subtitle: "Austria",
    description: "Adventure is never far away",
    image:
      "https://res.cloudinary.com/j2ski/albums/u44159/20200312/ischgl-im-winter",
  },
  {
    title: "Wagrain",
    subtitle: "Austria",
    description: "Let your dreams come true",
    image:
      "https://th.bing.com/th/id/R.de95e607fcfe957e32c671ae46ce6d7c?rik=c0kgCFsKaamrcg&pid=ImgRaw&r=0",
  },
  {
    title: "Zermatt",
    subtitle: "Switzerland",
    description: "A piece of heaven",
    image:
      "https://th.bing.com/th/id/R.69bc4aeb7d73b0888ac9d954a19262e5?rik=cqA0eVZHhp6FMA&riu=http%3a%2f%2fcdn.justluxe.com%2farticles%2fimages%2fnews%2fshutterstock_254090041.jpg&ehk=hdbqYVj3jpk8mYnlbqkLIVt2NDH7VySp4c0cQRtrWeU%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    title: "Oberwallis",
    subtitle: "Switzerland",
    description: "A piece of heaven",
    image:
      "https://th.bing.com/th/id/OIP.O3VLujsHNvUO0wEzJKrMRwHaE8?pid=ImgDet&rs=1",
  },
];

const bottom = css({
  bottom: "-16.6%",
});

export default function Home() {
  return (
    <div class="font-mono h-screen overflow-hidden overflow-y-scroll">
      <div
        id="background"
        class="h-2/3 bg-cover relative"
        style={"background-image:linear-gradient(rgba(0, 0, 40, 0.5),rgba(0, 0, 40, 0.5)), url(https://res.cloudinary.com/j2ski/albums/u44159/20200312/ischgl-im-winter)"}
      >
        <Header></Header>
        <div class={tw`h-5/6 grid relative ${bottom}`}>
          <Slider></Slider>
        </div>
      </div>
      <div class="m-8">
        {slides.map((slide) => {
          return <Event {...slide}></Event>;
        })}
      </div>
      <Footer></Footer>
    </div>
  );
}

type Slide = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
};

function Event(slide: Slide) {
  return (
    <div class="w-10/12 h-64 m-auto border flex items-center gap-8 odd:justify-start even:justify-end">
      <div
        class="h-64 w-64 rounded-full bg-center hover:scale-125 transition ease-out duration-500"
        style={`background-image:url(${slide.image})`}
      >
      </div>
      <div class="flex flex-col items-center">
        <div>{slide.title}</div>
        <div>{slide.subtitle}</div>
        <div>{slide.description}</div>
      </div>
    </div>
  );
}
