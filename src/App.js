import React from 'react';
import Navbar from './Components/Navbar.jsx';
import Hero from './Components/Hero.jsx';
import Analytics from './Components/Analytics.jsx';
import Newsletters from './Components/Newsletters.jsx';
import Cards from './Components/Cards.jsx';
import Footer from './Components/Footer.jsx';

 function App () {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Analytics/>
      <Newsletters/>
      <Cards/>
      <Footer/>
    </div>
  );
}

export default App
