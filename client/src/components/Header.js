import profilePic from "../assets/images/theBluWiz-logo.png";
import NavBar from "./NavBar"

export default function Header({ currentPage, setCurrentPage }) {
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <header className="bg-emerald-400">
      <div className="flex justify-end  mr-1">
        <h1 className="text-right text-2xl font-medium text-cyan-800 self-end justify-self-end">Jamey Wicklund</h1>
        <img src={profilePic} alt="Jamey Wicklund" className="max-h-10" />
      </div>
      <div className="h-1 bg-emerald-600"></div>
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />

    </header>
  )
}