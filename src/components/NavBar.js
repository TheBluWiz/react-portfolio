

export default function NavBar({ currentPage, handlePageChange }) {
  return (
    <div className="bg-emerald-700 text-center">
      <div className="grid gap-1 grid-cols-4 mx-0 md:grid-cols-6">
        <a
          href="#aboutme"
          onClick={() => handlePageChange('AboutMe')}
          className={currentPage === 'AboutMe' ? 'text-sky-300 font-semibold' : 'text-green-200'}>
          About Me
        </a>
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'text-sky-300 font-semibold' : 'text-green-200'}>
          Contact
        </a>
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'text-sky-300 font-semibold' : 'text-green-200'}>
          Portfolio
        </a>
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'text-sky-300 font-semibold' : 'text-green-200'}>
          Resume
        </a>
      </div>
    </div >
  )
}