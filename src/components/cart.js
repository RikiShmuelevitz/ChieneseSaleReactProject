import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector} from 'react-redux';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';


import { addCartsProduct, setCartProductNum ,removeCartsProduct} from "../store/cartSlice/cartAction"



// import AlarmIcon from '@mui/icons-material/Alarm';
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import { Button } from 'primereact/button';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  function createData(
    id,
    name,
    price,
    num,
    cartId
    
  ) {
    return { id, name, price, num };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

export default function Cart() {

  const dispatch = useDispatch();
  const nevigate=useNavigate()

  const cartList = useSelector((state) => state.cart.cartList);
  const[sum,setsum]=useState(0)
  useEffect(()=>{
    var sum=0
   cartList?.map(i=>sum+=i.item.price*i.item.num)
   setsum(sum)
  })

  const deleteItem=(event)=>{
    //dispatch(removeCartsProduct(event.tar))
     console.log("event: ",event)
  }
  const paying=()=>{
nevigate('/paying')
  }
    return(
      <div id="containerDiv">
        <TableContainer component={Paper} >
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
            <StyledTableCell align="right">קוד</StyledTableCell>
            <StyledTableCell align="right">שם</StyledTableCell>
            <StyledTableCell align="right">מחיר</StyledTableCell>
            <StyledTableCell align="right">תמונה</StyledTableCell>
              <StyledTableCell align="right">מספר כרטיסים</StyledTableCell>
              <StyledTableCell align="right">  </StyledTableCell>

              
            </TableRow>
          </TableHead>
          <TableBody>
            {cartList?.map((item) => (
              <StyledTableRow key={item.id}>
                <StyledTableCell align="right">{item.item.id}</StyledTableCell>
                <StyledTableCell align="right">{item.item.name}</StyledTableCell>
                <StyledTableCell align="right">{item.item.price}</StyledTableCell>
                <StyledTableCell align="right"><img src= {item.item.img} className="img"></img></StyledTableCell>
                <StyledTableCell align="right">{item.item.num}</StyledTableCell>
                <StyledTableCell align="right" ><IconButton aria-label="delete" id={item.name} onClick={deleteItem}> <DeleteIcon /> </IconButton></StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <p>סכום לתשלום:${sum}</p>
      <Button label="לתשלום" className="p-button-raised p-button-secondary"  onClick={paying} />



   
  
      {/* <IconButton aria-label="delete" disabled color="primary">
        <DeleteIcon />
      </IconButton>
      <IconButton color="secondary" aria-label="add an alarm">
        <AlarmIcon />
      </IconButton>
      <IconButton color="primary" aria-label="add to shopping cart">
        <AddShoppingCartIcon />
      </IconButton> */}


      </div>








    );
}


