import React, { useState } from 'react';
import Header from "./components/Header.js";
import Body from './components/Body.js';

function App() {
  const [currentPage, setCurrentPage] = useState('AboutMe');


  return (
    <div className='bg-slate-200 h-screen'>
    <Header currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    <Body currentPage={currentPage} />
    </div>
  );
}

export default App;
