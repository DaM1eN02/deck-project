import IconChevronRight from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/chevron-right.tsx";
import IconChevronLeft from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/chevron-left.tsx";

type Props = {
  left: boolean;
  color: string;
};

export function Button({ left, color }: Props) {
  const Icon = left ? IconChevronLeft : IconChevronRight;
  return (
    <Icon size={64} stroke={4} color={color}>
    </Icon>
  );
}
