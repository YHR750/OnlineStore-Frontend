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
    const Token = localStorage.getItem('role');

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
  return (
    <div>stockDetails</div>
  )
}
