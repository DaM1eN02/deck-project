import * as React from "preact";

import DropDown from "../components/DropDown.tsx";
import SearchBar from "../components/SearchBar.tsx";
import CalendarIcon from "../components/CalendarIcon.tsx";
import ProfileIcon from "../components/ProfileIcon.tsx";

export default function Header() {
  return (
    <div class="flex flex-row justify-around items-center w-full h-16">
      <h1 class="font-bold text-3xl">Ticket4You</h1>
      <DropDown
        title="Events"
        menu={[
          { title: "Skifahren", href: "/skifahren" },
          { title: "Konzerte", href: "/konzerte" },
          { title: "Freizeit", href: "/freizeit" },
          { title: "Sport", href: "/sport" },
        ]}
      >
      </DropDown>
      <DropDown
        title="Locations"
        menu={[
          { title: "Deutschland", href: "/germany" },
          { title: "Österreich", href: "/austria" },
          { title: "Schweiz", href: "/switzerland" },
          { title: "Frankreich", href: "/france" },
        ]}
      >
      </DropDown>
      <SearchBar></SearchBar>
      <CalendarIcon></CalendarIcon>
      <ProfileIcon name="User"></ProfileIcon>
    </div>
  );
}
