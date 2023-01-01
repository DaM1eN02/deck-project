const month = [[{
  weekday: "MON",
  date: "01",
}, {
  weekday: "TUE",
  date: "02",
}, {
  weekday: "WED",
  date: "03",
}, {
  weekday: "THU",
  date: "04",
}, {
  weekday: "FRI",
  date: "05",
}, {
  weekday: "SAT",
  date: "06",
}, {
  weekday: "SUN",
  date: "07",
}]];

export default function CalendarTest() {
  return (
    <div class="table">
      <div class="table-caption">Month</div>
      {month.map((week) => {
        return (
          <div class="table-row inline-flex">
            {week.map((day) => {
              return (
                <div class="table-cell w-16 aspect-square border p-2">
                  <div>{day.weekday}</div>
                  <div>{day.date}</div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
