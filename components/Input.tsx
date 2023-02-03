import { tw } from "twind";
import { css } from "twind/css";

const moveUp = css({
  transform: "translateY(-110%)",
});

type InputProps = {
  id: string;
  label: string;
  type?: "password" | "username" | "email" | "date";
};

export default function Input({ id, label, type }: InputProps) {
  return (
    <div
      id={id}
      class="relative h-1/12 w-9/12 m-5 flex justify-center text-xs"
      onfocusin={() => {
        document.getElementById(id + "span")?.classList.add(
          tw`${moveUp}`,
        );
      }}
      onfocusout={() => {
        //@ts-ignore
        if (document.getElementById(id + "input").value == "") {
          document.getElementById(id + "span")?.classList.remove(
            tw`${moveUp}`,
          );
        }
      }}
    >
      <input
        id={id + "input"}
        class="p-2 h-1/12 w-full bg-blue-200 rounded-3xl"
        type={type}
      >
      </input>
      <span
        id={id + "span"}
        class={tw`absolute top-0 left-0 p-2 bg-blue-400 rounded-3xl transition-all ease-in-out duration-500 cursor-text`}
        onClick={() => {
          document.getElementById(id + "input")?.focus();
        }}
      >
        {label}
      </span>
    </div>
  );
}
