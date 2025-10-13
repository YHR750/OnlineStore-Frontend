import React from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Link, useNavigate } from "react-router-dom";
import '../index.css';

export default function menuadmin() {
    const navigate = useNavigate();
    const handleLogout = () =>{
        localStorage.removeItem('item');
        localStorage.removeItem('role');
        navigate('/');
    }
    const token = localStorage.getItem('role');
    if (token != 'admin'){
        handleLogout();
    }
    
  return (
    <nav>
        <div className='navigation-home'>
            <Link to = "/">FashionStore.com</Link>
        </div>
        <div className='navigation-menu'>
            <Link to='/'>Contact Us</Link>
            <a href="">Settings</a>
            <a href="">Page</a>
            <Box sx={{'& button':{mr:1,mt:-1}}}>
                <Button onClick={handleLogout} variant="contained" size="small">
                    Log Out

                </Button>
            </Box>
        </div>
    </nav>
  )
}
