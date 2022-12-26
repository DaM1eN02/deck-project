import * as React from "preact";

import Footer from "../islands/Footer.tsx";
import Header from "../islands/Header.tsx";
import Slider from "../islands/Slider.tsx";

export default function Home() {
  return (
    <div class="font-mono h-screen">
      <div
        id="background"
        class="h-2/3 bg-cover"
        style={"background-image:linear-gradient(rgba(0, 0, 40, 0.5),rgba(0, 0, 40, 0.5)), url(https://res.cloudinary.com/j2ski/albums/u44159/20200312/ischgl-im-winter)"}
      >
        <Header></Header>
        <div class="h-5/6 grid items-center">
          <Slider></Slider>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
