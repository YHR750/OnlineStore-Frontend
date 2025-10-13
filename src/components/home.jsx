import React from 'react';
import Menu from './menu';
import Hero from './hero';
import Products from './products';
import More from './more';
import Footer from './footer';

function home() {
  return (
    <div className='App'>
        <Menu/>
        <Hero/>
        <Products/>
        <More/>
        <Footer/>
    </div>
  )
}

export default home