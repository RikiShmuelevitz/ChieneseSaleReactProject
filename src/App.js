import './App.css';
import { useEffect } from 'react';
import Router from './components/router';
import Navbar from './components/navbar';
import axios from "axios";
import { useDispatch} from 'react-redux';
import { initProducts } from './store/productSlice/prouductAction';




function App() {

  const dispatch=useDispatch();
  useEffect(()=>{
  // axios.get('http://localhost:4000/user/getAllUsers')
  // .then(res=>{dispatch(getAllUsers(res.data))
  //   // console.log("dataaa", res.data)
  // })
  axios.get('./data.json')
  .then(res=>{
   dispatch(initProducts(res.data))

  })
 },[])

    
  
  return (
    <div className="App">
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>
<Navbar/>
<Router />
       {/* <Login/> */}
       {/* <DisplayItem/> */}
{/* <Paying/> */}
      {/* <Items/>   */}
      {/* <UseRef></UseRef> */}
      {/* <DonationForm></DonationForm> */}
    </div>
  );
}

export default App;
