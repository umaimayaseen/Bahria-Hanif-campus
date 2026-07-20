import React, { useEffect, useState } from "react";

import Header from "./components/Header";
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Profile from './components/Profile';
function App() {

  const [page, setPage] = useState('home');

  const renderPage = () => {
    switch (page) {
      case 'home': return <Home />;
      case 'about': return <About />
      case 'profile': return <Profile />
      default: return <Home />
    }
  };
  return (
    <>
      <Header setPage={setPage} />
      <main style={{minHeight:'70vh'}}>
        {renderPage()}
      </main>

      <Footer />
    </>
  )
};
export default App;






