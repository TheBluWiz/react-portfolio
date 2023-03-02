import profilePic from "../assets/images/theBluWiz-logo.png";
import NavBar from "./NavBar"

export default function Header({ currentPage, setCurrentPage }) {
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <header className="bg-green-200">
      <div className="flex justify-end  mr-1">
        <h1 className="text-right text-2xl font-medium text-cyan-700 self-end justify-self-end">Jamey Wicklund</h1>
        <img src={profilePic} alt="Jamey Wicklund" className="max-h-10" />
      </div>
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
    </header>
  )
}