import DropDown from "../components/DropDown.tsx";
import SearchBar from "../components/SearchBar.tsx";
import CalendarIcon from "../components/CalendarIcon.tsx";
import ProfileIcon from "../components/ProfileIcon.tsx";
import { tw } from "twind";
import { css } from "twind/css";
import { PageProps } from "$fresh/server.ts";

const height = css({
  height: "calc(66.6% * 0.166)",
});

type Props = {
  fixed?: boolean;
};

export default function Header({ fixed }: Props) {
  return (
    <div
      class={tw`${
        fixed ? "fixed" : ""
      } ${height} z-10 flex flex-row justify-around items-center w-screen text-white overflow-x-hidden`}
      style={"background-color: rgba(0, 0, 0, 0.5)"}
    >
      <a href="/">
        <h1 class="font-bold text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl-text-2xl">
          Ticket4You
        </h1>
      </a>
      <DropDown
        id="dd1"
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
        id="dd2"
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
