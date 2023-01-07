import Header from "../islands/Header.tsx";
import Calendar from "../islands/Calendar.tsx";
import Footer from "../islands/Footer.tsx";

export default function CalendarView() {
  return (
    <div class="select-none">
      <Header></Header>
      <Calendar></Calendar>
      <Footer></Footer>
    </div>
  );
}
