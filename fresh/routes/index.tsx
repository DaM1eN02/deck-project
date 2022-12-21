import * as React from "preact";

import Footer from "../islands/Footer.tsx";
import Header from "../islands/Header.tsx";
import Slider from "../islands/Slider.tsx";

export default function Home() {
  return (
    <div class="font-mono bg-gray-400">
      <Header></Header>
      <Slider></Slider>
      <Footer></Footer>
    </div>
  );
}
