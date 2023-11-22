import React from 'react'
import '../csses/navbar.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, Route, Routes } from 'react-router-dom';



export default function Navbar(){
    return(
        <>
   
        <nav>
        {/* <Link>כניסה כמנהל</Link>
        <Link>מוצרים</Link>
        <Link>סל</Link>
        <Link>תשלום</Link>
        <Link>מכירה סינית</Link>
 */}


 
<Box sx={{ flexGrow: 1 }} id="navbar">
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link className="buttons" to="/Items">מכירה סינית </Link>
      
            
          </Typography>
          
         
          <Button color="inherit"><Link className="buttons" to="/login">הוסף פריט</Link></Button>
          <Button color="inherit"><Link className="buttons" to="/Items">מוצרים</Link></Button>
          <Button color="inherit"><Link className="buttons" to="/cart">סל</Link></Button>
          {/* <Button color="inherit"><Link className="buttons" to="/paying">תשלום</Link></Button> */}
         

        </Toolbar>
      </AppBar>
    </Box>


      </nav>
      </>
    )
}





