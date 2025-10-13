import React from "react";
import Box from "@mui/material/Box";
import { useEffect,useState } from "react";
import { Link,BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

export default function more() {
    const[products, setProducts]=useState([]);
    const[error, setError]=useState([]);
    useEffect(() =>{
        const fetchData=async() =>{
            try{
                const response = await fetch ('http://127.0.0.1:3000/getMoreProduct');
                const data = await response.json();
                console.log(data);
                setProducts(data.values);
            }catch(err){
                setError(err.message);
            }
        };
        fetchData();
        console.log(products);
    },[]);
  return (
    <div className='more'>
        <h3>More Product!</h3>
        <div className='product-container'>
            {products.map((item) =>(
                <div key={item.id_product} className='product-item'>
                    <img src={item.image} alt=''/>
                        <h4>
                            {item.product_name}
                        </h4>    
                    <h5>{item.description_product}</h5>
                    <div className='sellingPrice'><h5>{item.selling_price}</h5></div>
                </div>
            ))}
        </div>
    </div>
  )
}