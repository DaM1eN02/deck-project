import { tw } from "twind";
import { css } from "twind/css";
import { close, open } from "./Header.tsx";
import * as uuid from "https://deno.land/std@0.168.0/uuid/mod.ts";

const left = css({
  transform: "translateX(0%) scaleX(0.95) scaleY(1.05)",
});

const right = css({
  transform: "translateX(100%) scaleX(0.95) scaleY(1.05)",
});

const top = css({
  transform: "translateY(0%) scaleY(0.95) scaleX(1.05)",
});

const down = css({
  transform: "translateY(100%) scaleY(0.95) scaleX(1.05)",
});

const up = css({
  zIndex: "50",
});

export default function Login() {
  const contents = [{
    text: "Have an account?",
    buttonText: "Log In",
    onClick: () => {
      const form = document.getElementById("form");
      if (!form) return;

      if (
        form.classList.contains(tw`lg:${right}`) &&
        form.classList.contains(tw`${down}`)
      ) {
        form.classList.remove(
          tw`lg:${right}`,
        );
        form.classList.add(
          tw`lg:${left}`,
        );
        form.classList.remove(
          tw`${down}`,
        );
        form.classList.add(
          tw`${top}`,
        );
      }

      document.getElementById("formRegister")?.classList.toggle(
        tw`${up}`,
      );
      document.getElementById("formLogin")?.classList.toggle(
        tw`${up}`,
      );
    },
  }, {
    text: "Don't hava an account?",
    buttonText: "Register",
    onClick: () => {
      const form = document.getElementById("form");
      if (!form) return;

      if (
        form.classList.contains(tw`lg:${left}`) &&
        form.classList.contains(tw`${top}`)
      ) {
        form.classList.remove(
          tw`lg:${left}`,
        );
        form.classList.add(
          tw`lg:${right}`,
        );
        form.classList.remove(
          tw`${top}`,
        );
        form.classList.add(
          tw`${down}`,
        );
      }

      document.getElementById("formRegister")?.classList.toggle(
        tw`${up}`,
      );
      document.getElementById("formLogin")?.classList.toggle(
        tw`${up}`,
      );
    },
  }];

  return (
    <div
      id="loginBackground"
      class={tw`z-30 ${close} fixed top-0 w-screen h-screen flex justify-center content-center items-center`}
      style={"background: rgba(50, 50, 50, 0.7)"}
      onClick={(e) => {
        //@ts-ignore
        if (e.target.id != "loginBackground") return;
        document.getElementById("loginBackground")?.classList.remove(
          tw`${open}`,
        );
        document.getElementById("loginBackground")?.classList.add(
          tw`${close}`,
        );

        document.getElementById("login")?.classList.remove(
          tw`${open}`,
        );
        document.getElementById("login")?.classList.add(
          tw`${close}`,
        );

        document.getElementById("form")?.classList.remove(
          tw`${right}`,
          tw`${left}`,
        );
        document.getElementById("form")?.classList.add(
          tw`${left}`,
        );

        document.getElementById("formRegister")?.classList.remove(
          tw`${up}`,
        );
        document.getElementById("formLogin")?.classList.remove(
          tw`${up}`,
        );
        document.getElementById("formRegister")?.classList.add(
          tw`${up}`,
        );
      }}
    >
      <div
        id="login"
        class={tw`z-40 ${close} relative h-2/3 lg:h-1/2 w-1/2 transition-all ease-in-out duration-1000`}
      >
        <div
          class="h-full grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 items-center justify-items-center text-center"
          style={"background: rgba(200,200,200,0.8)"}
        >
          {contents.map((content) => {
            return (
              <div>
                <div class="m-4">{content.text}</div>
                <button
                  class="m-4 border"
                  onClick={content.onClick}
                >
                  {content.buttonText}
                </button>
              </div>
            );
          })}
        </div>
        <div
          id="form"
          class={tw`absolute top-0 h-1/2 lg:h-full w-full lg:w-1/2 transition-all ease-in-out duration-500 ${top} lg:${left}`}
        >
          <RegisterForm></RegisterForm>
          <LoginForm></LoginForm>
        </div>
      </div>
    </div>
  );
}

function LoginForm() {
  return (
    <div
      id="formLogin"
      class={tw`${up} absolute h-full w-full bg-white flex flex-col justify-center items-center text-black`}
    >
      <label>LOGIN</label>
      <Input label="E-Mail"></Input>
      <Input label="Password"></Input>
      <button type="submit"></button>
    </div>
  );
}

function RegisterForm() {
  return (
    <div
      id="formRegister"
      class={tw`absolute h-full w-full bg-white flex flex-col justify-center items-center text-black`}
    >
      <label>REGISTER</label>
      <Input label="E-Mail"></Input>
      <Input label="Password"></Input>
      <Input label="Confirm Password"></Input>
      <button type="submit"></button>
    </div>
  );
}

const moveUp = css({
  transform: "translateY(-110%)",
});

type InputProps = {
  label: string;
};

function Input({ label }: InputProps) {
  const id = uuid.v1.generate();

  return (
    <div
      class="relative mt-12"
      onfocusin={() => {
        document.getElementById(id.toString())?.classList.add(
          tw`${moveUp}`,
        );
      }}
      onfocusout={() => {
        document.getElementById(id.toString())?.classList.remove(
          tw`${moveUp}`,
        );
      }}
    >
      <input class="p-2 bg-red-600 rounded-3xl"></input>
      <span
        id={id.toString()}
        class={tw`absolute top-0 left-0 p-2 bg-red-400 rounded-3xl transition-all ease-in-out duration-500`}
      >
        {label}
      </span>
    </div>
  );
}
