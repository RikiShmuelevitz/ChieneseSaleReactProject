import React, { useState,useEffect  } from 'react';
//import { Card } from 'primereact/card';
//import { Button } from 'primereact/button';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import {setProductNum } from "../store/productSlice/prouductAction"
import { addCartsProduct, setCartProductNum ,removeCartsProduct} from "../store/cartSlice/cartAction"

import "../csses/item.css"






function Item(props){
    const nevigate=useNavigate()
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.cartList);

    const  { id,name,img,price,num } = props

        const header = (
            <span className='warp'>
            <p >קוד: {id}</p>
            <img alt="Card" src={img} onError={(e) => e.target.src={img}}   className="image"/>
            </span>
        );
        const footer = (
            <span>
            <p > {price} $</p>
                <Button label="הוסף" icon="pi pi-check" />
                
            </span>
        );
        const add=()=>{
            var itemId=-1
            cartItems?.forEach(element => {
                if(element.item.id===id)
                itemId=element.cartId
            })
            dispatch(setProductNum(id,1))
            if(itemId===-1)
              dispatch(addCartsProduct(cartItems?.length,{ id,name,img,price,num}))
            else
            dispatch(setCartProductNum(itemId,1))
        }
        const less=()=>{
            var itemId=-1
            cartItems?.forEach(element => {
                if(element.item.id===id)
                itemId=element.cartId
            })
            if(num>1)
            dispatch(setProductNum(id,-1))
            console.log("PPPPPPPP ",cartItems[itemId].item.num)
            if(cartItems[itemId].item.num===1)
              {
                dispatch(removeCartsProduct(itemId))
                console.log("PPPPPPPP2")
            }
            else
            dispatch(setCartProductNum(itemId,-1))
          

        }
    return(

        <div >
      
        {/* <Card title={name}  style={{ width: '25em' }} footer={footer} header={header}>
            <p className="des" style={{lineHeight: '1.5'}}>{description}
                </p>
        </Card> */}
         <Card sx={{ maxWidth: 345 }} className="card"  >
        
      <CardMedia onClick={()=>{nevigate("/display/"+id)}}
        sx={{ height: 140 }}
        image={img}
        title={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" >
            {name}
        </Typography>
        <Typography gutterBottom variant="h5" component="div" >
            {price}$
        </Typography>
      </CardContent>
      <CardActions>
          <div className="numCards">
         <button onClick={add}>+</button>
          {num-1}
          <button onClick={less}>-</button>  
          </div>
   

        {/* <Button size="small">Share</Button>
        <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
    </div>


    )
};

export default Item













































// import React, { useState, useEffect, useRef } from 'react';
// import { DataView, DataViewLayoutOptions } from 'primereact/dataview';

// import { Rating } from 'primereact/rating';
// import { Button } from 'primereact/button';

// function Item(){

//     // const [name, setName]=useState[""];
//     // const [price, setPrice]=useState[""];
//     // const [description, setDescription]=useState[""];
//     // const [id, setId]=useState[""];
//     // const [image, setImage]=useState[""];
//     const [data,setData]=useState({name:"רכב", price:15,description:"גדול ויפה",rating:"",inventoryStatus:"",image:'' })
    
//         return (
//             <div id="cardDiv">
//             <div className="col-12">
//                 <div className="product-list-item">
//                     <img src={`images/product/${data.image}`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={data.name} />
//                     <div className="product-list-detail">
//                         <div className="product-name">{data.name}</div>
//                         <div className="product-description">{data.description}</div>
//                         {/* <Rating value={data.rating} readOnly cancel={false}></Rating> */}
//                         {/* <i className="pi pi-tag product-category-icon"></i><span className="product-category">{data.category}</span> */}
//                     </div>
//                     <div className="product-list-action">
//                         <span className="product-price">${data.price}</span>
//                         {/* <Button icon="pi pi-shopping-cart" label="Add to Cart" disabled={data.inventoryStatus === 'OUTOFSTOCK'}></Button> */}
//                         <span className={`product-badge status-${data.inventoryStatus.toLowerCase()}`}>{data.inventoryStatus}</span>
//                     </div>
//                 </div>
//             </div>
//             </div>
//         );
//     }


