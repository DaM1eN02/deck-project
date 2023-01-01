type TicketType = {
  children?: never[];
  id: string;
  name: string;
  event: string;
  image: string;
};

const tickets: TicketType[] = [{
  id: "1",
  name: "Test1",
  event: "Ischgl",
  image:
    "https://res.cloudinary.com/j2ski/albums/u44159/20200312/ischgl-im-winter",
}, {
  id: "2",
  name: "Test2",
  event: "Wagrain",
  image:
    "https://th.bing.com/th/id/R.de95e607fcfe957e32c671ae46ce6d7c?rik=c0kgCFsKaamrcg&pid=ImgRaw&r=0",
}, {
  id: "3",
  name: "Test3",
  event: "Zermatt",
  image:
    "https://th.bing.com/th/id/R.69bc4aeb7d73b0888ac9d954a19262e5?rik=cqA0eVZHhp6FMA&riu=http%3a%2f%2fcdn.justluxe.com%2farticles%2fimages%2fnews%2fshutterstock_254090041.jpg&ehk=hdbqYVj3jpk8mYnlbqkLIVt2NDH7VySp4c0cQRtrWeU%3d&risl=&pid=ImgRaw&r=0",
}, {
  id: "4",
  name: "Test4",
  event: "Oberwallis",
  image:
    "https://th.bing.com/th/id/OIP.O3VLujsHNvUO0wEzJKrMRwHaE8?pid=ImgDet&rs=1",
}];

export default function TicketGrid() {
  return (
    <div class="w-9/12 m-auto grid grid-cols-3 justify-items-center gap-8">
      {tickets.map((ticket) => {
        return (
          <Ticket
            id={ticket.id}
            name={ticket.name}
            event={ticket.event}
            image={ticket.image}
          >
          </Ticket>
        );
      })}
    </div>
  );
}

function Ticket({ id, name, event, image }: TicketType) {
  return (
    <div
      class="w-full bg-center bg-cover"
      style={"background-image:url(" + image + "); aspect-ratio: 1 / 1"}
    >
      <div>{name}</div>
      <div>{event}</div>
    </div>
  );
}
