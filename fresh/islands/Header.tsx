import DropDown from "../components/DropDown.tsx";
import SearchBar from "../components/SearchBar.tsx";
import CalendarIcon from "../components/CalendarIcon.tsx";
import ProfileIcon from "../components/ProfileIcon.tsx";

export default function Header() {
  return (
    <div class="flex flex-row justify-between w-full">
      <h1>Ticket4You</h1>
      <DropDown title="Events"></DropDown>
      <DropDown title="Locations"></DropDown>
      <SearchBar></SearchBar>
      <CalendarIcon></CalendarIcon>
      <ProfileIcon></ProfileIcon>
    </div>
  );
}
