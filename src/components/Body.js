import AboutMe from "../pages/AboutMe"
import Contact from "../pages/Contact"
import Portfolio from "../pages/Portfolio"
import Resume from "../pages/Resume"

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
    if (currentPage === 'Resume') {
      return <Resume />
    }
    return <AboutMe />;
  };

  return (
    <main>
        {renderPage()}
    </main>

  )
}