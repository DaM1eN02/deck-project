import * as React from "preact";

export default function Footer() {
  return (
    <div
      class="w-full h-32 p-2 grid grid-cols-3 items-center text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl-text-2xl"
      style={"background-image: linear-gradient(90deg, #8fc0c8, #caecee)"}
    >
      <div>
        Ticket4You
      </div>
      <div class="flex justify-around">
        <div>
          <div>Unternehmen</div>
          <div>Geschichte</div>
          <div>Gründer</div>
        </div>
        <div>
          <div>B2B</div>
          <a href="/b2b">B2B-Portal</a>
          <div>Informationen</div>
        </div>
        <div>
          <div>Profil</div>
          <a href="/login">Anmelden</a>
          <div>Registrieren</div>
        </div>
        <div>
          <div>Hilfe</div>
          <div>FAQ</div>
          <div>Support</div>
        </div>
      </div>
    </div>
  );
}
