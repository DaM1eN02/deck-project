export type EventType = {
  children?: never[];
  id: string;
  name: string;
  country: string;
  description: string;
  image: string | undefined;
};

export const events: EventType[] = [{
  id: "1",
  name: "Skipass Ischgl",
  country: "Austria",
  description: "Adventure is never far away",
  image:
    "https://res.cloudinary.com/j2ski/albums/u44159/20200312/ischgl-im-winter",
}, {
  id: "2",
  name: "Skipass Wagrain",
  country: "Austria",
  description: "Let your dreams come true",
  image:
    "https://th.bing.com/th/id/R.de95e607fcfe957e32c671ae46ce6d7c?rik=c0kgCFsKaamrcg&pid=ImgRaw&r=0",
}, {
  id: "3",
  name: "Skipass Zermatt",
  country: "Switzerland",
  description: "A piece of heaven",
  image:
    "https://th.bing.com/th/id/R.69bc4aeb7d73b0888ac9d954a19262e5?rik=cqA0eVZHhp6FMA&riu=http%3a%2f%2fcdn.justluxe.com%2farticles%2fimages%2fnews%2fshutterstock_254090041.jpg&ehk=hdbqYVj3jpk8mYnlbqkLIVt2NDH7VySp4c0cQRtrWeU%3d&risl=&pid=ImgRaw&r=0",
}, {
  id: "4",
  name: "Skipass Oberwallis",
  country: "Switzerland",
  description: "A piece of heaven",
  image:
    "https://th.bing.com/th/id/OIP.O3VLujsHNvUO0wEzJKrMRwHaE8?pid=ImgDet&rs=1",
}];
