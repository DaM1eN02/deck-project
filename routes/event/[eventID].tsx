import { PageProps } from "$fresh/server.ts";
import Header from "../../islands/Header.tsx";
import Footer from "../../islands/Footer.tsx";
import { events } from "../../events.ts";
import { useState } from "preact/hooks";

export default function Event(props: PageProps) {
  const event = events.find((event) => event.id == props.params.eventID);
  if (!event) return null;

  const [element, setElement] = useState(<></>);
  if (event.id == "9") {
    setElement(
      <div>
        <div>25 Jahre Splash!</div>
        <br></br>
        <div>
          Der Termin für das splash! 2023 steht fest: Vom 29. Juni bis zum 01.
          Juli 2023 feiert das splash! sein 25-jähriges Bestehen. Euch erwarten
          viele Überraschungen, kranker Abriss, glühende Moshpits und natürlich
          ein sickes Line-Up mit den gehyptesten nationalen und internationalen
          Acts im Rap-Game!
        </div>
        <br></br>
        <div>
          25 Jahre splash!-Festival heißt 25 Jahre Maßstäbe setzen im Rapgame.
          Gemeinsam feiern wir die Jubiläumsparty des Jahres. Zusammen mit Euch
          und den nationalen und internationalen Rap-Superstars verwandeln wir
          Ferropolis in den größten Moshpit Deutschlands. splash!-Fam, wir sehen
          uns!
        </div>
      </div>,
    );
  }
  if (event.id == "1" || event.id == "8") {
    setElement(
      <div>
        <div>
          Mit <b class="text-blue-400">45 Lift- und Seilbahnanlagen</b> und{" "}
          <b class="text-blue-400">über 239km best präparierten Pisten</b>{" "}
          gilt Ischgl als ein Mekka für Skifahrer und Snowboarder. Die Arena
          verbindet Ischgl mit dem schweizer Zollausschlussgebiet Samnaun.
        </div>
        <br></br>
        <div>
          Das Hauptskigebiet (90%) liegt zwischen{" "}
          <b class="text-blue-400">2.000 m und 2.872 m Höhe</b>{" "}
          und ermöglicht aufgrund der schneesicheren Nordhänge Skivergnügen von
          Ende November bis Anfang Mai.
        </div>
        <br></br>
        <div>Hauptsaison: 01.11.2022 - 01.04.2023</div>
      </div>,
    );
  }
  return (
    <div class="font-mono h-screen overflow-x-hidden select-none">
      <Header></Header>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div class="flex flex-col p-5">
          <iframe
            class="w-3/4 bg-cover mb-5"
            style={`background-image:url(${event.image}); aspect-ratio: 1 / 1`}
          >
          </iframe>
          <div class="font-bold mb-5">
            {event.name} / {event.country}
          </div>
          <div class="mb-5">{event.description}</div>
          {element}
        </div>
        <div class="grid col-span-2 p-5 gap-5">
          <Option
            title="Saisonpass 2022 / 23 - Erwachsene"
            description="Unbegrenzt gültig innerhalb der Hauptsaison an allen Anlagen in Ischgl / Samnaun"
            price="1950,00 €"
          >
          </Option>
          <Option
            title="Saisonpass 2022 / 23 - Kinder"
            description="Ausschließlich für Kinder zwischen 0-17 J.\nUnbegrenzt gültig innerhalb der Hauptsaison an allen Anlagen in Ischgl / Samnaun"
            price="950,00 €"
          >
          </Option>
          <Option
            title="10er Karte 2022 / 23 - Erwachsene"
            description="Hauptsaison\nAn insgasamt 10 verschiedenen Tagen an allen Anlagen in Ischgl / Samnaun gültig"
            price="870,00 €"
          >
          </Option>
          <Option
            title="10er Karte 2022 / 23 - Kinder"
            description="Hauptsaison / Ausschließlich für Kinder zwischen 0-17 J.\nAn insgasamt 10 verschiedenen Tagen an allen Anlagen in Ischgl / Samnaun gültig"
            price="420,00 €"
          >
          </Option>
          <button class="float-right border border-black">Zum Warenkorb</button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

type options = {
  children: never[];
  title: string;
  description: string;
  price: string;
};

function Option({ title, description, price }: options) {
  return (
    <div class="grid grid-rows-2 sm:grid-rows-1 grid-cols-1 sm:grid-cols-3 border leading-relaxed p-5">
      <div class="grid grid-rows-2 col-span-2">
        <div class="text-2xl">{title}</div>
        <div>{description}</div>
      </div>
      <div class="grid grid-cols-2">
        <div class="flex justify-center items-center">
          <div class="text-blue-400">{price}</div>
        </div>
        <button class="border">Kaufen</button>
      </div>
    </div>
  );
}
