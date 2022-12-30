import * as React from "preact";
export default function SearchBar() {
  return (
    <div>
      <input
        class="font-bold text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl-text-2xl"
        placeholder="Search . . ."
      >
      </input>
    </div>
  );
}
