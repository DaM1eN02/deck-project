import * as React from "preact";
import IconUserCircle from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/user-circle.tsx";

type Props = {
  name: string;
};

export default function ProfileIcon({ name }: Props) {
  return (
    <div class="flex flex-row">
      <IconUserCircle size={32}></IconUserCircle>
      <h1 class="font-mono font-bold text-2xl">{name}</h1>
    </div>
  );
}
