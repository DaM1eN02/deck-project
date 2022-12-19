import IconCaretDown from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/caret-down.tsx";

type Props = {
  title: string;
  menu: [{
    title: string;
    href: string;
  }];
};

export default function DropDown({ title, menu }: Props) {
  return (
    <div>
      <div class="flex flex-row">
        <h1>{title}</h1>
        <IconCaretDown></IconCaretDown>
      </div>
      <ul class="flex flex-col">
        {menu.map((item) => {
          <li>
            <a href={item.href}>{item.title}</a>
          </li>;
        })}
      </ul>
    </div>
  );
}
