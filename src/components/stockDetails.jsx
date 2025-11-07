import React from 'react';
import Menu from './menuadmin';
import Footer from './footer';
import { useEffect,useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import '../index.css';

export default function stockDetails() {
    const [Visible, setVisible]  = useState(false);
    const navigate = useNavigate();
    const {id} = useParams();
    const token = localStorage.getItem('role');

    const handleLogout=()=>{
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        navigate('/');
    }

    if(token != 'admin'||token != 'user'){
        handleLogout;
    }

    const [product, setProduct] = useState([]);
    const [error, setError] = useState(null);
    const [purchasePrice, setpurchasePrice] = useState();
    const [sellingPrice, setsellingPrice] = useState();

    useEffect(() =>{
      const fecthProduct = async() =>{
        try{
          const response = await fetch(`http://127.0.0.1:3000/getStockDetails/${id}`);
          const data = await response.json();
          console.log(data);
          setProduct(data.values);
        }catch(err){
          setError(err.message);
          console.log(err);
        }
      };
      fecthProduct();
    },[]);

    const handleStock=async(e,close)=>{
      e.preventDefault();
      const {product_name,description_product, stock = 0} = product[0];
      try{
        const response = await fetch(`http://127.0.0.1:3000/editStock/${id}`,{
          method:'PUT',
          headers:{'Content-Type':'application/json'},
          body: JSON.stringify({product_name, description_product,stock})
        });
      }catch(error)
      {
        console.log(error);
      };
      close();
    }

    const updateProduct = (index,field,value) =>{
      setProduct((prevProduct) =>
        prevProduct.map((product,i) =>
          i === index ? { ...product, [field]: value} : product
        )
      );
    }

    const handlePrice = async(e,close) =>{
      e.preventDefault();
      const{selling_price,purcase_price,id_product} = product[0]
      try{
        const response = await fetch(`http://127.0.0.1:3000/editPrice/${id}`,{
          method:'PUT',
          headers:{'Content-Type':'application/json'},
          body: JSON.stringify({selling_price,purcase_price,id_product})
        });
      }catch(error){
        console.log(error);
      };
      close();
    }



  return (
    <div className='details-page'>
      <Menu/>
      <div className='details-container'>
        {product.map((item,index)=>(
          <div key={item.id_product} className='detail-item'>
            <div className='detail-image'>
              <img src={item.image} alt=''/>
            </div>
            <div className='detail-text'>
              <h4>{item.product_name}</h4>
              <h5>{item.description_product}</h5>
              <h4>{item.selling_price}</h4>
              <h5>Stock:{item.stock}</h5>
              <form>
                {/*<button type='sumbit' onClick={() => setVisible(true)}>Edit</button>*/}
              </form>
              <Popup trigger={<button className='form-button'>Edit</button>} modal nested>
                {close =>(
                  <div className='modal'>
                    <div className='popup-header'> Edit Stock </div>
                    <form
                      onSubmit={(e) => handlePrice(e,close)}
                    >
                      <div className='popup-alignment'>
                        <h4>Product Name:</h4>
                        <input type='text' value={item.product_name} onChange={(e) => updateProduct(index, 'product_name', e.target.value)}/>
                      </div>
                      <div className='popup-alignment'>
                        <h4>Description:</h4>
                        <input type="text" value={item.description_product} onChange={(e) => updateProduct(index, 'description_product',e.target.value)}/>
                      </div>
                      <div className='popup-alignment'>
                        <h4>Stock:</h4>
                        <input type="text" value={item.stock} onChange={(e) => updateProduct(index, 'stock',e.target.value)}/>
                      </div>
                      <button className='modal-button' type='submit'>Save</button>
                    </form>
                  </div>
                )}
              </Popup>
              <Popup trigger={<button className='form-button'>Edit Price</button>} modal nested className='popup-content' >
              {close => (
                <div className='modal'>
                  <div className='popup-header'>Edit Price</div>
                  <form 
                    onSubmit={(e) => handlePrice(e,close)}
                  >
                    <div className='popup-alignment'>
                      <h4>Purchase Price : </h4>
                      <input type="text" value={item.purcase_price} onChange={(e) => updateProduct(index, 'purcase_price',e.target.value)}/>
                    </div>
                    <div className='popup-alignment'>
                      <h4>Selling Price : </h4>
                      <input type="text" value={item.selling_price} onChange={(e) => updateProduct(index, 'selling_price',e.target.value)}/>
                    </div>
                    <button className='button-save' type='submit' >Save</button>
                  </form>
                </div>
              )}
                

              </Popup>
            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  )
}
