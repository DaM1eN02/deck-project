import DropDown from "../components/DropDown.tsx";
import SearchBar from "../components/SearchBar.tsx";
import CalendarIcon from "../components/CalendarIcon.tsx";
import { tw } from "twind";
import { css } from "twind/css";
import Login from "./Login.tsx";
import { openLogin } from "./Login.tsx";
import ProfileIcon from "../components/ProfileIcon.tsx";
import { readCookie } from "../cookie.ts";
import { useEffect, useState } from "preact/hooks";

const height = css({
  height: "calc(66.6% * 0.166)",
});

export const open = css({
  transform: "scale(1)",
});

export const close = css({
  transform: "scale(0)",
});

type Props = {
  fixed?: boolean;
};

export default function Header({ fixed }: Props) {
  const [loginComponent, setLoginComponent] = useState(<></>);

  useEffect(() => {
    readCookie("userID")
      ? setLoginComponent(
        <a id="profileButton" href={`/profile`}>
          <ProfileIcon></ProfileIcon>
        </a>,
      )
      : setLoginComponent(
        <button
          type="button"
          id="loginButton"
          onClick={() => {
            openLogin();
          }}
        >
          Login / Register
        </button>,
      );
  });

  return (
    <div
      id="header"
      class={tw`${
        fixed ? "fixed" : ""
      } ${height} z-20 flex justify-around items-center w-screen text-white overflow-x-hidden text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl-text-2xl`}
      style={"background-color: rgba(0, 0, 0, 0.5)"}
    >
      <a href="/">
        <h1 class="font-bold text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl-text-4xl">
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
          { title: "Österreich", href: "/search/austria" },
          { title: "Schweiz", href: "/search/switzerland" },
          { title: "Frankreich", href: "/search/france" },
        ]}
      >
      </DropDown>
      <SearchBar></SearchBar>
      <a href="/calendar">
        <CalendarIcon></CalendarIcon>
      </a>
      {loginComponent}
      <Login></Login>
    </div>
  );
}
