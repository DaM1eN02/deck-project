import { tw } from "twind";
import { css } from "twind/css";
import { close, open } from "./Header.tsx";
import * as uuid from "https://deno.land/std@0.168.0/uuid/mod.ts";
import Input from "../components/Input.tsx";
import { http } from "../fetch.ts";
import { createCookie } from "../cookie.ts";

const left = css({
  transform: "translateX(0%) translateY(0%) scaleX(0.95) scaleY(1.05)",
});

const right = css({
  transform: "translateX(100%) translateY(0%) scaleX(0.95) scaleY(1.05)",
});

const up = css({
  zIndex: "50",
});

function switchRegisterToLogin() {
  const form = document.getElementById("form");
  if (!form) return;

  if (
    form.classList.contains(tw`lg:${right}`)
  ) {
    form.classList.remove(
      tw`lg:${right}`,
    );
    form.classList.add(
      tw`lg:${left}`,
    );
  }

  document.getElementById("formRegister")?.classList.toggle(
    tw`${up}`,
  );
  document.getElementById("formLogin")?.classList.toggle(
    tw`${up}`,
  );
}

function switchLoginToRegister() {
  const form = document.getElementById("form");
  if (!form) return;

  if (
    form.classList.contains(tw`lg:${left}`)
  ) {
    form.classList.remove(
      tw`lg:${left}`,
    );
    form.classList.add(
      tw`lg:${right}`,
    );
  }

  document.getElementById("formRegister")?.classList.toggle(
    tw`${up}`,
  );
  document.getElementById("formLogin")?.classList.toggle(
    tw`${up}`,
  );
}

export default function Login() {
  const contents = [{
    text: "Have an account?",
    buttonText: "Log In",
    onClick: () => {
      switchRegisterToLogin();
    },
  }, {
    text: "Don't hava an account?",
    buttonText: "Register",
    onClick: () => {
      switchLoginToRegister();
    },
  }];

  return (
    <div
      id="loginBackground"
      class={tw`z-30 ${close} fixed top-0 w-screen h-screen flex justify-center content-center items-center`}
      style={"background: rgba(50, 50, 50, 0.7)"}
      onClick={(e) => {
        closeLogin(e);
      }}
    >
      <div
        id="login"
        class={tw`z-40 ${close} relative h-3/4 w-3/4 transition-all ease-in-out duration-1000`}
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
          class={tw`absolute top-0 h-full w-full lg:w-1/2 transition-all ease-in-out duration-500 lg:${left}`}
        >
          <RegisterForm></RegisterForm>
          <LoginForm></LoginForm>
        </div>
      </div>
    </div>
  );
}

function LoginForm() {
  const emailId = uuid.v1.generate().toString();
  const passwordId = uuid.v1.generate().toString();

  return (
    <div
      id="formLogin"
      class={tw`${up} absolute h-full w-full bg-white flex flex-col justify-center items-center text-black`}
    >
      <label>LOGIN</label>
      <Input id={emailId} label="E-Mail"></Input>
      <Input id={passwordId} label="Password"></Input>
      <button
        onClick={async () => {
          //@ts-ignore
          const email = document.getElementById(emailId + "input")?.value;
          //@ts-ignore
          const password = document.getElementById(passwordId + "input")?.value;

          const json = {
            email: email,
            password: password,
          };

          const res = http(
            `https://ticket4youdhbw.onrender.com/api/user/login`,
            "PATCH",
            json,
          ).then((response) => {
            return response;
          });

          if ((await res).Error) {
            return;
            // TODO Display error message
          }

          closeLogin();

          createCookie("userID", (await res).user_id, 30);
          createCookie("firstName", (await res).first_name, 30);
          createCookie("lastName", (await res).last_name, 30);
          createCookie("email", (await res).email, 30);
          createCookie("bday", (await res).birthdate, 30);
          window.location.href = "/";
        }}
        class="border"
      >
        Log in
      </button>
      <button
        class="mt-5 lg:hidden"
        onClick={() => {
          switchLoginToRegister();
        }}
      >
        Don't have an account?
      </button>
    </div>
  );
}

function RegisterForm() {
  const emailId = uuid.v1.generate().toString();
  const passwordId = uuid.v1.generate().toString();
  const confirmPasswordId = uuid.v1.generate().toString();
  const firstNameId = uuid.v1.generate().toString();
  const lastNameId = uuid.v1.generate().toString();
  const bdId = uuid.v1.generate().toString();

  return (
    <div
      id="formRegister"
      class={tw`absolute h-full w-full bg-white flex flex-col justify-center items-center text-black overflow-y-hidden`}
    >
      <label>REGISTER</label>
      <Input id={firstNameId} label="First Name"></Input>
      <Input id={lastNameId} label="Last Name"></Input>
      <Input id={emailId} label="E-Mail"></Input>
      <Input id={bdId} label="Birthday" type="date"></Input>
      <Input id={passwordId} label="Password"></Input>
      <Input id={confirmPasswordId} label="Confirm Password"></Input>
      <button
        onClick={async () => {
          const firstName = document.getElementById(firstNameId + "input")
            //@ts-ignore
            ?.value;
          //@ts-ignore
          const lastName = document.getElementById(lastNameId + "input")?.value;
          //@ts-ignore
          const email = document.getElementById(emailId + "input")?.value;
          //@ts-ignore
          const bday = document.getElementById(bdId + "input")?.value;
          const password1 = document.getElementById(passwordId + "input")
            //@ts-ignore
            ?.value;
          const password2 = document.getElementById(confirmPasswordId + "input")
            //@ts-ignore
            ?.value;

          if (password1 != password2) console.log("Password mismatch");

          const json = {
            email: email,
            password: password1,
            first_name: firstName,
            last_name: lastName,
            birthdate: bday,
          };

          const res = http(
            `https://ticket4youdhbw.onrender.com/api/user/register`,
            "POST",
            json,
          ).then((response) => {
            return response;
          });

          closeLogin();

          createCookie("userID", (await res).user_id, 30);
          createCookie("firstName", (await res).first_name, 30);
          createCookie("lastName", (await res).last_name, 30);
          createCookie("email", (await res).email, 30);
          createCookie("bday", (await res).birthdate, 30);
          window.location.href = "/";
        }}
        class="border"
      >
        Register
      </button>
      <button
        class="mt-5 lg:hidden"
        onClick={() => {
          switchRegisterToLogin();
        }}
      >
        Already have an account?
      </button>
    </div>
  );
}

export function openLogin() {
  document.getElementById("loginBackground")?.classList.remove(
    tw`${close}`,
  );
  document.getElementById("loginBackground")?.classList.add(
    tw`${open}`,
  );

  document.getElementById("login")?.classList.remove(
    tw`${close}`,
  );
  document.getElementById("login")?.classList.add(
    tw`${open}`,
  );
}

function closeLogin(e?: any) {
  if (e && e.target.id != "loginBackground") return;
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
    tw`lg:${right}`,
    tw`lg:${left}`,
  );
  document.getElementById("form")?.classList.add(
    tw`lg:${left}`,
  );

  // document.getElementById("form")?.classList.remove(
  //   tw`${top}`,
  //   tw`${down}`,
  // );
  // document.getElementById("form")?.classList.add(
  //   tw`${top}`,
  // );

  document.getElementById("formRegister")?.classList.remove(
    tw`${up}`,
  );
  document.getElementById("formLogin")?.classList.remove(
    tw`${up}`,
  );
  document.getElementById("formLogin")?.classList.add(
    tw`${up}`,
  );
}
