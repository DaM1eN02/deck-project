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
  transform: "",
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
    title: "Machu Picchu",
    subtitle: "Peru",
    description: "Adventure is never far away",
    image:
      "https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
  },
  {
    title: "Chamonix",
    subtitle: "France",
    description: "Let your dreams come true",
    image:
      "https://images.unsplash.com/photo-1581836499506-4a660b39478a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
  },
  {
    title: "Mimisa Rocks",
    subtitle: "Australia",
    description: "A piece of heaven",
    image:
      "https://images.unsplash.com/photo-1566522650166-bd8b3e3a2b4b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
  },
  {
    title: "Four",
    subtitle: "Australia",
    description: "A piece of heaven",
    image:
      "https://images.unsplash.com/flagged/photo-1564918031455-72f4e35ba7a6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
  },
  {
    title: "Five",
    subtitle: "Australia",
    description: "A piece of heaven",
    image:
      "https://images.unsplash.com/photo-1579130781921-76e18892b57b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
  },
];

let currentSlideCount = 0;
let leftIndex = slides.length - 1;
let rightIndex = currentSlideCount + 1;

const height = css({
  height: "calc(100vh - 4rem - 8rem)",
});

export default function Slider() {
  return (
    <div
      id="sliderBackground"
      class={tw`${height} flex content-center bg-no-repeat bg-cover bg-center`}
      style={"background-image:linear-gradient(rgba(0, 0, 40, 0.5),rgba(0, 0, 40, 0.5)), url(" +
        slides[currentSlideCount].image + "); backdrop-filter:blur(1)"}
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
        <Button left={true}></Button>
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

          const background = document.getElementById(`sliderBackground`);
          if (background) {
            background.style.backgroundImage =
              `linear-gradient(rgba(0, 0, 40, 0.5),rgba(0, 0, 40, 0.5)), url(${
                slides[currentSlideCount].image
              }`;
            background.style.backdropFilter = "blur(1)";
          }
        }}
      >
        <Button left={false}></Button>
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
      class={tw`w-1/4 h-1/2 p-2 bg-center absolute transition-all ease-out duration-500 ${
        id == leftIndex ? leftPicture : ""
      } ${id == currentSlideCount ? centerPicture : ""} ${
        id == rightIndex ? rightPicture : ""
      } ${
        (id != leftIndex && id != currentSlideCount && id != rightIndex)
          ? nonePicture
          : ""
      }
      }`}
      style={"background-image:url(" + image + ");"}
    >
      <div class="text-5xl text-white">{title}</div>
      <hr></hr>
      <div class="text-4xl text-white">{subtitle}</div>
      <div class="text-1xl text-white">{description}</div>
    </div>
  );
}
