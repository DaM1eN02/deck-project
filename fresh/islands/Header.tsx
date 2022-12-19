import DropDown from "../components/DropDown.tsx";
import SearchBar from "../components/SearchBar.tsx";
import CalendarIcon from "../components/CalendarIcon.tsx";
import ProfileIcon from "../components/ProfileIcon.tsx";

export default function Header() {
  return (
    <div class="flex flex-row justify-around items-center w-full h-16">
      <h1>Ticket4You</h1>
      <DropDown title="Events" menu={[{ title: "Test", href: "/" }]}></DropDown>
      <DropDown title="Locations" menu={[{ title: "a", href: "/" }]}></DropDown>
      <SearchBar></SearchBar>
      <CalendarIcon></CalendarIcon>
      <ProfileIcon name="User"></ProfileIcon>
    </div>
  );
}
