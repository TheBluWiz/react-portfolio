import React, { useState } from 'react';
import Header from "./components/Header.js";
import Body from './components/Body.js';

function App() {
  const [currentPage, setCurrentPage] = useState('AboutMe');
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
    <Header currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    <Body currentPage={currentPage} />
    </>
  );
}

export default App;
