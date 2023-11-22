import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { addCartsProduct, removeCartsProduct } from "../store/cartSlice/cartAction"
import {setProductNum } from "../store/productSlice/prouductAction"
import {setCartProductNum } from "../store/cartSlice/cartAction"


import { Button } from 'primereact/button';



export default function DisplayItem() {
    const params = useParams()
    const dispatch = useDispatch();
  //  const item = dispatch(getProductById(params.id))
    const item = useSelector((state) => state.products.productsList[params.id-1]);
    const cartItems = useSelector((state) => state.cart.cartList);

    // console.log("items ",item[4])
    // const item=items.to


  //  console.log(item[19])
const addTocart=()=>{
    var itemId=-1
    

    console.log("cartList ",cartItems)

    cartItems?.forEach(element => {
        if(element.item.id===item.id)
        {itemId=element.cartId
        
    console.log("BB element.cartId ",element.cartId)}

    })
    dispatch(setProductNum(item.id,1))
    if(itemId===-1)
    {
     
      dispatch(addCartsProduct(cartItems?.length,item))
      console.log("item from display",item)
    console.log("cartList end",cartItems)

   }
    else
   { 
    console.log("cartItem from display ",itemId)
    dispatch(setCartProductNum(itemId,1))}
    // item.num++
    
}
    return (
        <div >
            <Card sx={{ maxWidth: 345 }}>
            {/* <Button size="small">x</Button> */}
                <CardMedia component="div"
                    sx={{ height: 140 }}
                    image={item.img}
                    title={item.name}
                />
                <CardContent>
                
                    <Typography gutterBottom variant="h5" component="div">
                        {item.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component="div">
                        {item.description}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        {item.price}$
                    </Typography>
                </CardContent>
                <CardActions>
                <Button label="הוסף לעגלה" className="p-button-raised p-button-secondary"   onClick={addTocart}/>
                </CardActions>
            </Card>
        </div>
    )
};

