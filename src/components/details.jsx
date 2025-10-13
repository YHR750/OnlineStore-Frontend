import React from 'react'
import Menu from './menu'
import Footer from './footer'
import { useEffect,useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import '../index.css'

export default function details() {
    const navigate = useNavigate();
    const {id} = useParams();
    const [product, setProducts] =useState([]);
    const [loading, setLoading] =useState(True);
    const [error, setError] =useState(null);
    useEffect(() =>{
      const fetchProduct=async() =>{
        try{
          const response = await fetch (`https://127.0.0.1:3000/getShopDetails/${id}`);
          const data = await response.json();
          console.log(data);
          setProducts(data.values);
        }
        catch(err){
          setError(err.message);
        }
      };
      fetchProduct();
    },[]);

  return (
    <div className='details-page'>
      <Menu/>
      <div className='details-container'>
        {product.map((item) => (
          <div key={item.id_product} className='detail-item'>
            <div className='detail-image'>
              <img src={item.img} alt=''/>
            </div>
            <div className='detail-text'>
              <h4>
                {item.product_name}
              </h4>
              <h5>
                {item.description_product}
              </h5>
              <h4>
                {item.selling_price}
              </h4>
              <form>
                <button type='submit'>Add to Cart</button>
              </form>
            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  )
}
