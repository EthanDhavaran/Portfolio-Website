import React from 'react';
import Navbar from './Components/NavBar/NavBar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import MyWork from './Components/MyWork/MyWork';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <section>
      <Toaster/>
      <Navbar/>
      <Hero/>
      <About/>
      <MyWork/>
      <Contact/>
      <Footer/>
    </section>
  )
}

export default App