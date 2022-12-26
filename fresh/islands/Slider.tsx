import * as React from "preact";
import Button from "../components/Button.tsx";
import { tw } from "twind";
import { css } from "twind/css";

const nonePicture = css({
  display: "block",
  zIndex: "0",
  transform: "scale(.25)",
  filter: "blur(0.4rem)",
});

const leftPicture = css({
  display: "block",
  transform:
    "translateX(-100%) rotate3d(0, 1, 0, 45deg) skewY(3deg) scale(.75)",
  filter: "blur(0.2rem)",
  zIndex: "1",
});

const centerPicture = css({
  display: "block",
  zIndex: "2",
});

const rightPicture = css({
  display: "block",
  transform:
    "translateX(100%) rotate3d(0, 1, 0, -45deg) skewY(-3deg) scale(.75)",
  filter: "blur(0.2rem)",
  zIndex: "1",
});

type Slide = {
  children: never[];
  title: string;
  subtitle: string;
  description: string;
  image: string;
  id: number;
};

const slides = [
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

let currentSlideCount = 0;
let leftIndex = slides.length - 1;
let rightIndex = currentSlideCount + 1;

export default function Slider() {
  return (
    <div
      id="sliderBackground"
      class={tw`h-5/6 flex content-center bg-no-repeat bg-cover bg-center`}
    >
      <div
        class="w-1/12 grid content-center"
        onClick={() => {
          document.getElementById(`slide${rightIndex}`)?.classList.remove(
            tw`${rightPicture}`,
          );
          document.getElementById(`slide${rightIndex}`)?.classList.add(
            tw`${nonePicture}`,
          );

          currentSlideCount = currentSlideCount > 0
            ? currentSlideCount - 1
            : slides.length - 1;
          leftIndex = leftIndex > 0 ? leftIndex - 1 : slides.length - 1;
          rightIndex = rightIndex > 0 ? rightIndex - 1 : slides.length - 1;

          document.getElementById(`slide${rightIndex}`)?.classList.remove(
            tw`${centerPicture}`,
          );
          document.getElementById(`slide${rightIndex}`)?.classList.add(
            tw`${rightPicture}`,
          );

          document.getElementById(`slide${currentSlideCount}`)?.classList
            .remove(
              tw`${leftPicture}`,
            );
          document.getElementById(`slide${currentSlideCount}`)?.classList.add(
            tw`${centerPicture}`,
          );

          document.getElementById(`slide${leftIndex}`)?.classList.remove(
            tw`${nonePicture}`,
          );
          document.getElementById(`slide${leftIndex}`)?.classList.add(
            tw`${leftPicture}`,
          );
        }}
      >
        <Button left={true} color="white"></Button>
      </div>
      <div class="w-10/12 flex content-center justify-around">
        <div class="w-full flex justify-center items-center">
          {slides.map((slide, index) => {
            return (
              <Card
                id={index}
                title={slide.title}
                subtitle={slide.subtitle}
                description={slide.description}
                image={slide.image}
              >
              </Card>
            );
          })}
        </div>
      </div>
      <div
        class="w-1/12 grid content-center"
        onClick={() => {
          document.getElementById(`slide${leftIndex}`)?.classList.remove(
            tw`${leftPicture}`,
          );
          document.getElementById(`slide${leftIndex}`)?.classList.add(
            tw`${nonePicture}`,
          );

          currentSlideCount = currentSlideCount < slides.length - 1
            ? currentSlideCount + 1
            : 0;
          leftIndex = leftIndex < slides.length - 1 ? leftIndex + 1 : 0;
          rightIndex = rightIndex < slides.length - 1 ? rightIndex + 1 : 0;

          document.getElementById(`slide${leftIndex}`)?.classList.remove(
            tw`${centerPicture}`,
          );
          document.getElementById(`slide${leftIndex}`)?.classList.add(
            tw`${leftPicture}`,
          );

          document.getElementById(`slide${currentSlideCount}`)?.classList
            .remove(
              tw`${rightPicture}`,
            );
          document.getElementById(`slide${currentSlideCount}`)?.classList.add(
            tw`${centerPicture}`,
          );

          document.getElementById(`slide${rightIndex}`)?.classList.remove(
            tw`${nonePicture}`,
          );
          document.getElementById(`slide${rightIndex}`)?.classList.add(
            tw`${rightPicture}`,
          );

          const background = document.getElementById(`background`);
          if (background) {
            background.style.backgroundImage =
              `linear-gradient(rgba(0, 0, 40, 0.5),rgba(0, 0, 40, 0.5)), url(${
                slides[currentSlideCount].image
              }`;
            background.style.backdropFilter = "blur(1)";
          }
        }}
      >
        <Button left={false} color="white"></Button>
      </div>
    </div>
  );
}

function Card({ title, subtitle, description, image, id }: Slide) {
  const leftIndex = currentSlideCount > 0
    ? currentSlideCount - 1
    : slides.length - 1;
  const rightIndex = currentSlideCount < slides.length - 1
    ? currentSlideCount + 1
    : 0;

  return (
    <div
      id={"slide" + id}
      class={tw`w-1/5 h-1/3 p-2 bg-center absolute transition-all ease-out duration-500 ${
        id == leftIndex ? leftPicture : ""
      } ${id == currentSlideCount ? centerPicture : ""} ${
        id == rightIndex ? rightPicture : ""
      } ${
        (id != leftIndex && id != currentSlideCount && id != rightIndex)
          ? nonePicture
          : ""
      }
      } hover:ring-8`}
      style={"background-image:url(" + image + ");"}
    >
      <div class="p-2" style={"background-color: rgba(255, 255, 255, 0.75)"}>
        <div class="text-4xl">{title}</div>
        <hr></hr>
        <div class="text-3xl">{subtitle}</div>
        <div class="text-1xl">{description}</div>
      </div>
    </div>
  );
}
