import {Link} from 'react-router-dom';
import Menu from './menuuser';
import Hero from './hero';
import Product from './products';
import More from './more';
import Footer from './footer';
import '../index.css';

export default function userpage() {
  return (
    <div className='userpage'>
        <Menu/>
        <Hero/>
        <Product/>
        <More/>
        <Footer/>
    </div>
  )
}
