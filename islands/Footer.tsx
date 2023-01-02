export default function Footer() {
  return (
    <div
      class="w-full h-32 p-2 grid grid-cols-6 items-center text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl-text-2xl"
      style={"background-image: linear-gradient(90deg, #8fc0c8, #caecee)"}
    >
      <div>
        Ticket4You
      </div>
      <div class="col-span-5 md:col-span-4 grid grid-cols-2 sm:grid-cols-4 gap-3 justify-items-center text-center">
        <div>
          <div class="font-bold">Unternehmen</div>
          <div>Geschichte</div>
          <div>Gründer</div>
        </div>
        <div>
          <div class="font-bold">B2B</div>
          <a href="/b2b">B2B-Portal</a>
          <div>Informationen</div>
        </div>
        <div>
          <div class="font-bold">Profil</div>
          <a href="/login">Anmelden</a>
          <div>Registrieren</div>
        </div>
        <div>
          <div class="font-bold">Hilfe</div>
          <div>FAQ</div>
          <div>Support</div>
        </div>
      </div>
    </div>
  );
}
