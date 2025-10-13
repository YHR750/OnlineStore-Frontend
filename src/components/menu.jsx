import React from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";

export default function menu() {
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
                <Link to= "/signin">
                    <Button variant='contained' size='small'>
                        Sign Up
                    </Button>
                </Link>
                <Link to = "/login">
                    <Button variant='contained' size='small'>
                        Log In
                    </Button>
                </Link>
            </Box>
        </div>
    </nav>
  )
}
