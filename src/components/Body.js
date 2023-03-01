import AboutMe from "../pages/AboutMe"
import Contact from "../pages/Contact"
import Portfolio from "../pages/Portfolio"

export default function Body({ currentPage }) {

  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    return <AboutMe />;
  };

  return (
    <main>
      <div className="h-1 bg-green-600"></div>
      {renderPage()}
    </main>

  )
}