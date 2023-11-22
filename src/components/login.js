import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";       
import '../csses/login.css';
import React, { useState,useEffect  } from 'react';
import { Password } from 'primereact/password';
import { Divider } from 'primereact/divider';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "../store/userSlice/userAction";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { getAdminebyId } from "../store/adminSlice/adminAction"

import { useNavigate } from 'react-router-dom';

function Login(){
    const userList = useSelector((state) => state.users.usersList);
    const adminList = useSelector((state) => state.admins.adminList)
    const [userName, setUserName] = useState('');
    const [pass, setPass] = useState('');
    // const dispatch = useDispatch();

    // const [password, setPassword] = useState('');
    // const login=()=>{
    //     console.log("end!")

    //     const user={
    //        name:name,
    //        email:email,
    //        password:password
    //     }
    //     console.log(user)
    //     console.log("end!")
    //    dispatch(addUser(user)) 
    //   dispatch({type:'addUser',payload:user});
    // console.log(userList)

    // console.log("end!")
    const nevigate=useNavigate()
    const dispatch = useDispatch();
    const validation=()=>{
       var admin=0
        adminList.forEach(e=> {
        
            if(e.userName===userName&&e.password===pass)
            {console.log("e-",e)
            admin=1}
        })
    
        console.log("admin ",admin)
        if(admin===0)
        alert("האימות נכשל")
        else
        nevigate("/addItem2")
    

}

    
    return(
      <div>
      <h4>נדרשת הזדהות מנהל לביצוע פעולה זו:  </h4>
      {/* {userList}  */}
        {/* <form>
            <h1>Login</h1>
                    <div className="field col-12 md:col-4">
                    <span className="p-float-label">
                            <InputText id="inputtext" value={name} onChange={(e) => setName(e.target.value)}/>
                            <label htmlFor="inputtext">Name</label>
                        </span>
                        <span className="p-float-label">
                            <InputText id="inputtext" value={email} onChange={(e) => setEmail(e.target.value)}  />
                            <label htmlFor="inputtext">Email</label>
                        </span>
                    </div>
                <Password  id="password"value={password} onChange={(e) => setPassword(e.target.value)} toggleMask /><br/>
                <Button label="Secondary" className="p-button-raised p-button-secondary"  />
                <button onClick={login}>click!</button>
        </form> */}
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off">
    
        <TextField id="outlined-basic" label="שם מנהל" variant="outlined" onChange={(e) => setUserName(e.target.value)}/>
        <TextField id="outlined-basic" label="קוד מנהל" variant="outlined" onChange={(e) => setPass(e.target.value)}/>
        <Button label="אמת" className="p-button-raised p-button-secondary"   onClick={validation}/>
        </Box>
        </div>
    )
}
export default Login;