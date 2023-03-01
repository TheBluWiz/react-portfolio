import profilePic from "../assets/images/profilePic.jpeg";
import NavBar from "./NavBar"

export default function Header() {
  return (
    <header>
      <img src={profilePic} alt="Jamey Wicklund" />
      <NavBar />
    </header>
  )
}