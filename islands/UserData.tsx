import { useEffect, useState } from "preact/hooks";
import { readCookie } from "../cookie.ts";

export default function UserData() {
  const [userID, setUserID] = useState("0");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [bday, setBDay] = useState("");

  useEffect(() => {
    setUserID(readCookie("userID") ?? "");
    setFirstName(readCookie("firstName") ?? "");
    setLastName(readCookie("lastName") ?? "");
    setEmail(readCookie("email") ?? "");
    setBDay(readCookie("bday") ?? "");
  });

  return (
    <div class="m-4">
      <div>First Name: {firstName}</div>
      <div>Last Name: {lastName}</div>
      <div>E-Mail: {email}</div>
      <div>Birthday: {bday}</div>
    </div>
  );
}
