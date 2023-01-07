import IconCaretDown from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/caret-down.tsx";

type Props = {
  children: never[];
  id: string;
  title: string;
  menu: {
    title: string;
    href: string;
  }[];
};

export default function DropDown({ id, title, menu }: Props) {
  return (
    <div class="hidden sm:block">
      <div
        id={id}
        class="inline-flex place-self-center"
        onClick={() => {
          document.getElementById("dropdownContent" + title)?.classList.toggle(
            "hidden",
          );

          document.addEventListener("click", (e) => {
            if (!e.target) return;
            //@ts-ignore
            const targetId: string = e.target.id;
            if (
              targetId != "dropdownContent" + title &&
              targetId.includes(id) == false
            ) {
              if (
                document.getElementById("dropdownContent" + title)?.classList
                  .contains("hidden") == false
              ) {
                document.getElementById("dropdownContent" + title)?.classList
                  .add(
                    "hidden",
                  );
              }
            }
          });
        }}
      >
        <h1
          id={id + `title`}
          class="font-bold text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl-text-2xl"
        >
          {title}
        </h1>
        <IconCaretDown></IconCaretDown>
      </div>
      <ul
        id={"dropdownContent" + title}
        class="z-50 absolute hidden border"
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
