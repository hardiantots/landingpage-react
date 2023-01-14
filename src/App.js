import React from 'react'
import Footer from './components/Footer';
import HeaderNav from "./components/HeaderNav";
import HeadlineCard from './components/HeadlineCard';
import Hero from './components/Hero';
import ListFood from './components/ListFood';

function App() {
  return (
    <div className='font-Inter'>
      <HeaderNav/>
      <Hero/>
      <HeadlineCard/>
      <ListFood/>
      <Footer/>
    </div>
  );
}

export default App;
