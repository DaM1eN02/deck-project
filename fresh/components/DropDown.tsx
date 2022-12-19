import IconCaretDown from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/caret-down.tsx";

type Props = {
  title: string;
};

export default function DropDown({ title }: Props) {
  return (
    <div class="flex flex-row">
      <h1>{title}</h1>
      <IconCaretDown></IconCaretDown>
    </div>
  );
}
