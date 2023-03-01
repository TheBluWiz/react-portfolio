import profilePic from "../assets/images/profilePic.jpeg";
import NavBar from "./NavBar"

export default function Header() {
  return (
    <header>
      <img src={profilePic} alt="Jamey Wicklund" className="max-h-80 rounded-full pl-6 mt-3"/>
      <h1 className="text-right mr-5 text-2xl font-medium text-teal-500">Jamey Wicklund</h1>
      <NavBar />
    </header>
  )
}