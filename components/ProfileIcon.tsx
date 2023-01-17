import IconUserCircle from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/user-circle.tsx";

export default function ProfileIcon() {
  return (
    <div class="flex flex-row gap-4 items-center">
      <IconUserCircle></IconUserCircle>
      <h1 class="font-bold text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl-text-2xl">
        {localStorage.getItem("firstName")}
      </h1>
    </div>
  );
}
