import {Link} from 'react-router-dom';
import Menu from './menuadmin';
import Hero from './hero';
import Product from './products';
import More from './more';
import Footer from './footer';
import '../index.css';

export default function adminpage() {
  return (
    <div className='adminpage'>
        <Menu/>
        <Hero/>
        <Product/>
        <More/>
        <Footer/>
    </div>
  )
}
