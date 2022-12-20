import * as React from "preact";

import IconChevronRight from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/chevron-right.tsx";
import IconChevronLeft from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/chevron-left.tsx";

type Props = {
  left: boolean;
};

export default function Button({ left }: Props) {
  const Icon = left ? IconChevronLeft : IconChevronRight;
  return (
    <div>
      <Icon></Icon>
    </div>
  );
}
