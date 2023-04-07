import React, { useState } from 'react';
import Header from "./components/Header.js";
import Body from './components/Body.js';
import Footer from './components/Footer.js'

function App() {
  const [currentPage, setCurrentPage] = useState('AboutMe');


  return (
    <div className='bg-slate-200 min-h-screen max-w max-w-6xl mx-auto'>
    <Header currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    <Body currentPage={currentPage} />
    <Footer />
    </div>
  );
}

export default App;
