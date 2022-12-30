import * as React from "preact";

import DropDown from "../components/DropDown.tsx";
import SearchBar from "../components/SearchBar.tsx";
import CalendarIcon from "../components/CalendarIcon.tsx";
import ProfileIcon from "../components/ProfileIcon.tsx";

export default function Header() {
  return (
    <div
      class="flex flex-row justify-around items-center h-32"
      style={"background-color: rgba(255, 255, 255, 0.25)"}
    >
      <a href="/">
        <h1 class="font-bold text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl-text-2xl">
          Ticket4You
        </h1>
      </a>
      <DropDown
        title="Events"
        menu={[
          { title: "Skifahren", href: "/search/skifahren" },
          { title: "Konzerte", href: "/search/konzerte" },
          { title: "Freizeit", href: "/search/freizeit" },
          { title: "Sport", href: "/search/sport" },
        ]}
      >
      </DropDown>
      <DropDown
        title="Locations"
        menu={[
          { title: "Deutschland", href: "/search/germany" },
          { title: "Österreich", href: "search//austria" },
          { title: "Schweiz", href: "/search/switzerland" },
          { title: "Frankreich", href: "/search/france" },
        ]}
      >
      </DropDown>
      <SearchBar></SearchBar>
      <a href="/calendar">
        <CalendarIcon></CalendarIcon>
      </a>
      <a href="/profile/User">
        <ProfileIcon name="User"></ProfileIcon>
      </a>
    </div>
  );
}