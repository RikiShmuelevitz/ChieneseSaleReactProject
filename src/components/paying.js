import React from 'react'
import '../csses/paying.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';
import swal from 'sweetalert';

export default function Paying(){
  const nevigate=useNavigate()

  const finish=()=>{
    swal("הפרטים נשמרו בהצלחה", "לחץ כדי לחזור לאתר", "success");
    nevigate('/Items')

  }
  
    return(
<div>
<Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
  <h3>  פרטים אישיים</h3>
  <TextField id="outlined-basic" label="שם פרטי" variant="outlined" />
  <TextField id="outlined-basic" label="שם משפחה" variant="outlined" />
  <TextField id="outlined-basic" label="טלפון סלולרי" variant="outlined" />
  <TextField id="outlined-basic" label="אימייל" variant="outlined" />
  <TextField id="outlined-basic" label="עיר" variant="outlined" />
  <h3>פרטי אשראי</h3>
  <TextField id="outlined-basic" label=" פרטי אשראי" variant="outlined" />
  <TextField id="outlined-basic" label="    ספרות בגב הכרטיס 3" variant="outlined" />
  <TextField id="outlined-basic" label="תוקף " variant="outlined" />
  <TextField id="outlined-basic" label="תעודת זהות" variant="outlined" />

  <h3>כתובת למשלוח מתנה</h3>
  <TextField id="outlined-basic" label="רחוב" variant="outlined" />
  <TextField id="outlined-basic" label="מספר בית" variant="outlined" />
  <Button label="לסיום" className="p-button-raised p-button-secondary"  onClick={finish} />


  </Box>

</div>

    )
};
