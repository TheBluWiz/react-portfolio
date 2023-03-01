

export default function NavBar({currentPage, handlePageChange}) {
  return (
    <div className="bg-emerald-700 text-center">
      <div className="grid gap-1 grid-cols-4 mx-0">
        <a href="#aboutme" onClick={() => handlePageChange('AboutMe')} className="text-green-200">About Me</a>
        <a href="#contact" onClick={() => handlePageChange('Contact')} className="text-green-200">Contact</a>
        <a href="#portfolio" onClick={() => handlePageChange('Portfolio')} className="text-green-200">Portfolio</a>
        <a href="../assets/Resume-JameyWicklund.pdf" className="text-green-200" download>Resume</a>
      </div>
    </div >
  )
}