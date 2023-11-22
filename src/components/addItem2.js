// import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import '../csses/addItem.css';
import { useSelector, useDispatch } from "react-redux";
// import Input from "@material-ui/core/Input";
import { Button } from 'primereact/button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { addProduct } from "../store/productSlice/prouductAction"
//import { postItem } from "./service";

import '../csses/cart.css'
export default function AddItem2 () {
  const dispatch = useDispatch();
  const itemsList = useSelector((state) => state.products.productsList);


  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstName: ''
      
    }
  });

  const onSubmit = (data) => {
    console.log("data  ",data.name);
 
    const item={id:itemsList.length+1,name:data.name,price:data.price,color: "brown",img:data.img,num:1}
    //postItem(item)
    dispatch(addProduct(item))
    console.log("adding item ",item);
  }
let num=1
  return (
 <>

    <form onSubmit={handleSubmit(onSubmit)} id="addingForm">
     
      <Controller
        name="name"
        control={control}
         render={({ field }) => <TextField className="filled-basic"  type="text" label="שם" variant="filled"{...field} />}
       // render={({ field }) => <TextField label={'שם'} id="margin-normal" margin="normal" type="text" />}

      />
        <Controller
        name="img"
        control={control}
         render={({ field }) => <TextField className="filled-basic"  type="text" label="כתובת תמונה" variant="filled"{...field} />}
        //render={({ field }) => <TextField label={'כתובת תמונה'} id="margin-normal" margin="normal" type="text" /> }
      />
        <Controller
        name="price"
        control={control}
         render={({ field }) => <TextField className="filled-basic"  type="number" label="מחיר" variant="filled"{...field} />}
        //render={({ field }) => <TextField label={'מחיר'} id="margin-normal" margin="normal" type="text" />}

      />
     
      <input type="submit" label="הוסף" />
    </form>
    </>
  );
};
