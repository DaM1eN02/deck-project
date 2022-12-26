import * as React from "preact";
export default function Footer() {
  return (
    <div
      class="w-full h-32 p-2 grid grid-cols-3 items-center"
      style={"background-image: linear-gradient(90deg, rgb(6 182 212), rgb(59 130 246))"}
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
          <div>B2B-Portal</div>
          <div>Informationen</div>
        </div>
        <div>
          <div>Profil</div>
          <div>Anmelden</div>
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
