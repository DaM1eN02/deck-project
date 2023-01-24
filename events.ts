export type EventType = {
  children?: never[];
  id: string;
  name: string;
  country: string;
  description: string;
  image: string | undefined;
};

export const events: EventType[] = [
  {
    id: "1",
    name: "Skipass Ischgl",
    country: "Österreich",
    description: "Adventure is never far away",
    image:
      "https://res.cloudinary.com/j2ski/albums/u44159/20200312/ischgl-im-winter",
  },
  {
    id: "2",
    name: "Skipass Wagrain",
    country: "Österreich",
    description: "Let your dreams come true",
    image:
      "https://th.bing.com/th/id/R.de95e607fcfe957e32c671ae46ce6d7c?rik=c0kgCFsKaamrcg&pid=ImgRaw&r=0",
  },
  {
    id: "3",
    name: "Skipass Zermatt",
    country: "Schweiz",
    description: "A piece of heaven",
    image:
      "https://th.bing.com/th/id/R.69bc4aeb7d73b0888ac9d954a19262e5?rik=cqA0eVZHhp6FMA&riu=http%3a%2f%2fcdn.justluxe.com%2farticles%2fimages%2fnews%2fshutterstock_254090041.jpg&ehk=hdbqYVj3jpk8mYnlbqkLIVt2NDH7VySp4c0cQRtrWeU%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    id: "4",
    name: "Skipass Oberwallis",
    country: "Schweiz",
    description: "A piece of heaven",
    image:
      "https://th.bing.com/th/id/OIP.O3VLujsHNvUO0wEzJKrMRwHaE8?pid=ImgDet&rs=1",
  },
  {
    id: "5",
    name: "Firefly Music Festival",
    country: "Vereinigte Staaten",
    description:
      "A three-day event featuring performances by various musicians and bands",
    image:
      "https://www.jonesaroundtheworld.com/wp-content/uploads/2019/09/Firefly-Music-Festival-Best-US-Music-Festivals-2020.jpg",
  },
  {
    id: "6",
    name: "Food and Wine Expo",
    country: "Frankreich",
    description:
      "A two-day event showcasing the best in food and wine from around the world",
    image:
      "https://www.thecuriouscreature.com/wp-content/uploads/2013/11/DSC_0990.jpg",
  },
  {
    id: "7",
    name: "Art Fair",
    country: "Deutschland",
    description:
      "A five-day event featuring works by artists from around the world",
    image:
      "https://news.artnet.com/app/news-upload/2019/12/artberlinfair_2019_12-1024x683.jpg",
  },
  {
    id: "8",
    name: "Skipass Ischgl / Samnaun",
    country: "Österreich",
    description:
      "Skifahren in einem der größten und beliebtestem Gebiete in Europa",
    image:
      "https://we2pmedia.schneemenschen.de/cockpit/preview/60f810264c9d593f22fcd691/202031_ischgl_skigebiet.jpg",
  },
  {
    id: "9",
    name: "Splash Festival 2023",
    country: "Deutschland",
    description: "Größtes Rap-Festival in Deutschland",
    image:
      "https://www.musikexpress.de/wp-content/uploads/2017/07/10/18/splash-2017-stephan-flad-170708_220719_splash2017_flad_8209.jpg",
  },
  {
    id: "10",
    name: "Frauenfeld Festival 2023",
    country: "Schweiz",
    description:
      "Das grösste Hip-Hop-Festival Europas kehrt vom 6. bis 8. Juli 2023 zurück!",
    image:
      "https://hiphop.de/sites/default/files/styles/article_header_overlay_large/public/news_articles/frauenfeld_live_mood_savas_sido_crowd_festival_pr_memo_filiz_1600_2018.jpg?itok=3XH9CTgE",
  },
  {
    id: "11",
    name: "Hans Zimmer Live World-Tour",
    country: "Worldwide",
    description:
      "Oscar-Preisträger Hans Zimmer präsentiert seine weltbekannten Kompositionen live auf einer großen Arena-Tour!",
    image:
      "https://www.muenchenticket.de/media/image/original/15640_HansZimmer_20220409.jpg",
  },
  {
    id: "12",
    name: "Luvre 47 Deutschland-Tour",
    country: "Deutschland",
    description:
      "Luvre47 ab November live in ausgewählten Städten in Deutschland erleben!",
    image:
      "https://cdnaz.allevents.in/events10/banners/d072fba949b8b0807de174a9e035aba0026b96cc96b3bb65c4bd28e46f1db54d-rimg-w960-h541-gmir.jpg?v=1673479981",
  },
  {
    id: "13",
    name: "FC Bayern Heimspiele Allianz Arena",
    country: "Deutschland",
    description: "Erleben Sie die Stars des FCBs live in der Allianz Arena!",
    image:
      "https://sportlockerdotcom.files.wordpress.com/2012/04/allianz-arena-red-lightning-bayern-munich-colours.jpg?w=490",
  },
  {
    id: "14",
    name: "Heimspiele SV Schefflenz",
    country: "Deutschland",
    description: "Hautnah im berühmten Hexenkessel des SV Schefflenz!",
    image:
      "https://www.europlan-online.de/files/a9a5a5975041349db8a6e89ec8c6de1b.jpg",
  },
  {
    id: "15",
    name: "Freibad FaMos",
    country: "Deutschland",
    description: "die größte Freizeiteinrichtung im Neckar-Odenwald-Kreis",
    image:
      "https://www.rnz.de/cms_media/module_img/862/431310_1_detaillg_image_1fa877f169b8177c.webp",
  },
  {
    id: "16",
    name: "We love MMA 64",
    country: "Deutschland",
    description:
      "Das Mixed Martial Arts Kampfsportspektakel - jetzt Tickets sichern!",
    image: "https://gemmaf.de/wp-content/uploads/2022/10/WLMMA64.jpeg",
  },
  {
    id: "17",
    name: "Stadtlauf Mosbach 2023",
    country: "Deutschland",
    description: "20. Auflage des beliebten Mosbacher Stadtlaufs",
    image:
      "https://www.rnz.de/cms_media/module_img/2284/1142298_1_detail_image_6c4b8306f292eb0.jpg",
  },
];
