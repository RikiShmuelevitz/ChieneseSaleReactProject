import React, { useState,useEffect  } from 'react';
import Item from './Item';
import { useDispatch,useSelector} from 'react-redux';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';

function Items(){
   
    const nevigate=useNavigate()
    const itemsList = useSelector((state) => state.products.productsList);
// const loginButton=()=>{
//  return(<Button color="inherit">Login</Button>) 
// }
    return(
        <div id="divList">
        
          {/* <Box sx={{ flexGrow: 1 }} id="navbar">
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
            מכירה סינית
          </Typography>
         
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box> */}
         <Box sx={{ flexGrow: 1 }} id="items">
              <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {itemsList?.map((v, index) => (
                  <Grid item xs={2} sm={4} md={4} key={index}>
             <Item  name={v.name} price={v.price} description={v.description} subHeader={v.subHeader} num={v.num} img={v.img} id={v.id}  onClick={()=>{nevigate("/display/"+v.id)}}/>
             {/* <p  onClick={()=>{nevigate("/display/")}}>ppp</p> */}
       
                  </Grid>
                ))}
              </Grid>
            </Box>
        </div>
    )
}
export default Items