import { Button } from "../components/Button.tsx";
import { tw } from "twind";
import { css } from "twind/css";
import { events, EventType } from "../events.ts";

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

export default function Slider() {
  let currentIndex = 0;
  let leftIndex = events.length - 1;
  let rightIndex = currentIndex + 1;

  return (
    <div
      class={tw`flex content-center bg-cover bg-center`}
    >
      <div
        class="w-1/12 grid content-center justify-center hover:sm:border cursor-pointer"
        onClick={() => {
          document.getElementById(`slide${rightIndex}`)?.classList.remove(
            tw`${rightPicture}`,
          );
          document.getElementById(`slide${rightIndex}`)?.classList.add(
            tw`${nonePicture}`,
          );

          currentIndex = currentIndex > 0
            ? currentIndex - 1
            : events.length - 1;
          leftIndex = leftIndex > 0 ? leftIndex - 1 : events.length - 1;
          rightIndex = rightIndex > 0 ? rightIndex - 1 : events.length - 1;

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
                events[currentIndex].image
              }`;
            background.style.backdropFilter = "blur(1)";
          }
        }}
      >
        <Button left={true} color="white"></Button>
      </div>
      <div class="w-10/12 flex content-center justify-around">
        <div class="overflow-auto w-full flex justify-center items-center">
          {events.map((slide, index) => {
            return (
              <Card
                slide={{
                  id: index,
                  title: slide.name,
                  subtitle: slide.country,
                  image: slide.image ?? "",
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
        class="z-10 w-1/12 grid content-center justify-center hover:sm:border cursor-pointer"
        onClick={() => {
          document.getElementById(`slide${leftIndex}`)?.classList.remove(
            tw`${leftPicture}`,
          );
          document.getElementById(`slide${leftIndex}`)?.classList.add(
            tw`${nonePicture}`,
          );

          currentIndex = currentIndex < events.length - 1
            ? currentIndex + 1
            : 0;
          leftIndex = leftIndex < events.length - 1 ? leftIndex + 1 : 0;
          rightIndex = rightIndex < events.length - 1 ? rightIndex + 1 : 0;

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
                events[currentIndex].image
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
  children?: never[];
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
      class={tw`w-3/5 sm:w-2/5 lg:w-1/5 h-2/3 p-2 flex bg-center absolute transition-all ease-out duration-700 ${
        (slide.id != leftIndex && slide.id != currentIndex &&
            slide.id != rightIndex)
          ? nonePicture
          : ""
      } ${slide.id == leftIndex ? leftPicture : ""} ${
        slide.id == currentIndex ? centerPicture : ""
      } ${slide.id == rightIndex ? rightPicture : ""}`}
      style={"background-image:url(" + slide.image + ")"}
    >
      <div class="p-2" style={"background-color: rgba(255, 255, 255, 0.75)"}>
        <div class="text-4xl">{slide.title}</div>
        <hr></hr>
        <div class="text-3xl">{slide.subtitle}</div>
        <div class="text-1xl">{slide.description}</div>
      </div>
      <div
        class={tw`flex justify-center self-end`}
      >
        <a class="bg-white" href={`/event/${slide.id}`}>Zum Angebot</a>
      </div>
    </div>
  );
}
