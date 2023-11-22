import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Formik,Form,Field,ErrorMessage} from 'formik';
import * as Yup from 'yup'
import '../csses/addItem.css';
export default function AddItem(){
  const addingSchema=Yup.object().shape(
    {
      name:Yup.string().required('שדה חייב במלוי'),
      img:Yup.string().required('שדה חייב במלוי'),
      price:Yup.string().required('שדה חייב במלוי')


    }
  )

  const addItem=(values)=>{
    console.log("adding item",values)
  }
    return(
      
<Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <div className="input">
          <Formik
          initialValues={{name:'',img:'',price:''}}
          onSubmit={addItem}
         
          >
       <Form >
      <TextField id="filled-basic"  type="text" label="שם" variant="filled" name="name" />
      {/* <TextField id="filled-basic" type="text" label="כותרת" variant="filled" />
      <TextField id="filled-basic" type="text" label="תאור" variant="filled" /> */}
      <TextField id="filled-basic" type="text" label="כתובת תמונה" variant="filled" name="img"/>
      <TextField id="filled-basic"  type="number"label="מחיר" variant="filled" name="price"/>
      <button type='submit'>הוסף</button>
      {/* <input type='submit'/> */}
      </Form>
          </Formik>

        </div>
    </Box>

    )
}