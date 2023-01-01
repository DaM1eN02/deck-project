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

export default function Slider() {
  let currentIndex = 0;
  let leftIndex = slides.length - 1;
  let rightIndex = currentIndex + 1;

  return (
    <div
      class={tw`flex content-center bg-cover bg-center`}
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

          currentIndex = currentIndex > 0
            ? currentIndex - 1
            : slides.length - 1;
          leftIndex = leftIndex > 0 ? leftIndex - 1 : slides.length - 1;
          rightIndex = rightIndex > 0 ? rightIndex - 1 : slides.length - 1;

          document.getElementById(`slide${rightIndex}`)?.classList.remove(
            tw`${centerPicture}`,
          );
          document.getElementById(`slide${rightIndex}`)?.classList.add(
            tw`${rightPicture}`,
          );

          document.getElementById(`slide${currentIndex}`)?.classList
            .remove(
              tw`${leftPicture}`,
            );
          document.getElementById(`slide${currentIndex}`)?.classList.add(
            tw`${centerPicture}`,
          );

          document.getElementById(`slide${leftIndex}`)?.classList.remove(
            tw`${nonePicture}`,
          );
          document.getElementById(`slide${leftIndex}`)?.classList.add(
            tw`${leftPicture}`,
          );

          const background = document.getElementById(`background`);
          if (background) {
            background.style.backgroundImage =
              `linear-gradient(rgba(0, 0, 40, 0.5),rgba(0, 0, 40, 0.5)), url(${
                slides[currentIndex].image
              }`;
            background.style.backdropFilter = "blur(1)";
          }
        }}
      >
        <Button left={true} color="white"></Button>
      </div>
      <div class="w-10/12 flex content-center justify-around">
        <div class="w-full flex justify-center items-center">
          {slides.map((slide, index) => {
            return (
              <Card
                slide={{
                  id: index,
                  title: slide.title,
                  subtitle: slide.subtitle,
                  image: slide.image,
                  description: slide.description,
                }}
                currentIndex={currentIndex}
                leftIndex={leftIndex}
                rightIndex={rightIndex}
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

          currentIndex = currentIndex < slides.length - 1
            ? currentIndex + 1
            : 0;
          leftIndex = leftIndex < slides.length - 1 ? leftIndex + 1 : 0;
          rightIndex = rightIndex < slides.length - 1 ? rightIndex + 1 : 0;

          document.getElementById(`slide${leftIndex}`)?.classList.remove(
            tw`${centerPicture}`,
          );
          document.getElementById(`slide${leftIndex}`)?.classList.add(
            tw`${leftPicture}`,
          );

          document.getElementById(`slide${currentIndex}`)?.classList
            .remove(
              tw`${rightPicture}`,
            );
          document.getElementById(`slide${currentIndex}`)?.classList.add(
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
                slides[currentIndex].image
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

type SlideProps = {
  children: [];
  slide: {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    id: number;
  };
  currentIndex: number;
  leftIndex: number;
  rightIndex: number;
};

function Card({ slide, currentIndex, leftIndex, rightIndex }: SlideProps) {
  return (
    <div
      id={"slide" + slide.id}
      class={tw`w-1/5 h-2/3 p-2 flex bg-center absolute transition-all ease-out duration-700 ${
        slide.id == leftIndex ? leftPicture : ""
      } ${slide.id == currentIndex ? centerPicture : ""} ${
        slide.id == rightIndex ? rightPicture : ""
      } ${
        (slide.id != leftIndex && slide.id != currentIndex &&
            slide.id != rightIndex)
          ? nonePicture
          : ""
      }
      } hover:ring-8`}
      style={"background-image:url(" + slide.image + ")"}
    >
      <div class="p-2" style={"background-color: rgba(255, 255, 255, 0.75)"}>
        <div class="text-4xl">{slide.title}</div>
        <hr></hr>
        <div class="text-3xl">{slide.subtitle}</div>
        <div class="text-1xl">{slide.description}</div>
      </div>
      <div class="flex justify-center self-end">
        <a class="bg-white" href={`/event/${slide.id}`}>Zum Angebot</a>
      </div>
    </div>
  );
}
