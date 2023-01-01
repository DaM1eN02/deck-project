import IconCaretDown from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/caret-down.tsx";

type Props = {
  children: never[];
  title: string;
  menu: {
    title: string;
    href: string;
  }[];
};

export default function DropDown({ title, menu }: Props) {
  return (
    <div>
      <div
        class="z-0 inline-flex place-self-center"
        onClick={() => {
          document.getElementById("dropdownContent" + title)?.classList.toggle(
            "hidden",
          );
        }}
      >
        <h1 class="font-bold text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl-text-2xl">
          {title}
        </h1>
        <IconCaretDown></IconCaretDown>
      </div>
      <ul
        id={"dropdownContent" + title}
        class="z-10 absolute hidden border"
        style={"background-color: rgba(255, 255, 255, 0.5)"}
      >
        {menu.map((item) => {
          return (
            <li class="m-auto">
              <a
                class="font-bold text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl-text-2xl"
                href={item.href}
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
