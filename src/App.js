import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Brand from './components/Brand';
import WhatGPT3 from './pages/WhatGPT3';
import FeaturesBottom from './pages/FeaturesBottom';
import Possibility from './pages/Possibility';
import CTA from './pages/CTA';
import Blog from './pages/Blog';
import Footer from './components/Footer';
import "./App.css";
import "./index.css"




const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
        <Brand />
        <WhatGPT3 />
        <FeaturesBottom />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />

    </div>
  )
}

export default App