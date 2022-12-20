import * as React from "preact";

import Button from "../components/Button.tsx";

type Slide = {
  children: never[];
  title: string;
  subtitle: string;
  description: string;
  image: string;
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

export default function Slider() {
  return (
    <div class="h-screen flex content-center">
      <Button left={true}></Button>
      <div class="w-full flex justify-around content-center">
        {slides.map((card) => {
          return (
            <Card
              title={card.title}
              subtitle={card.subtitle}
              description={card.description}
              image={card.image}
            >
            </Card>
          );
        })}
      </div>
      <Button left={false}></Button>
    </div>
  );
}

function Card({ title, subtitle, description, image }: Slide) {
  return (
    <div
      class="h-96 w-64 p-2"
      style={"background-image:linear-gradient(rgba(0, 0, 40, 0.8),rgba(0, 0, 40, 0.8)), url(" +
        image + ");"}
    >
      <div class="font-mono text-5xl text-white">{title}</div>
      <hr></hr>
      <div class="font-mono text-4xl text-white">{subtitle}</div>
      <div class="font-mono text-1xl text-white">{description}</div>
    </div>
  );
}
