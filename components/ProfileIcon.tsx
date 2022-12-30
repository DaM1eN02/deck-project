import * as React from "preact";
import IconUserCircle from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/user-circle.tsx";

type Props = {
  name: string;
};

export default function ProfileIcon({ name }: Props) {
  return (
    <div class="flex flex-row">
      <IconUserCircle></IconUserCircle>
      <h1 class="font-bold text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl-text-2xl">
        {name}
      </h1>
    </div>
  );
}
