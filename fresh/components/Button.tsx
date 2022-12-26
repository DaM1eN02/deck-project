import * as React from "preact";

import IconChevronRight from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/chevron-right.tsx";
import IconChevronLeft from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/chevron-left.tsx";

type Props = {
  left: boolean;
  color: string;
};

export default function Button({ left, color }: Props) {
  const Icon = left ? IconChevronLeft : IconChevronRight;
  return (
    <div class="flex justify-center content-center cursor-pointer">
      <Icon size={64} color={color}></Icon>
    </div>
  );
}
