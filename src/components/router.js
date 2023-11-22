import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './login';
import Paying from './paying';
import DisplayItem from './displayItem';
import Items from './Items';
import AddItem from './addItem';
import AddItem2 from './addItem2';

import Cart from './cart';




export default function Router(){
    return(
        <Routes>
              <Route path="/" element={<Items/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/paying" element={<Paying/>}/>
              <Route path="/display/:id" element={<DisplayItem/>}/>
              {/* <Route path="/display/" element={<DisplayItem/>}/> */}
              <Route path="/cart/" element={<Cart/>}/>

              <Route path="/Items" element={<Items/>}/>
              <Route path="/addItem" element={<AddItem />} />
              <Route path="/addItem2" element={<AddItem2 />} />

              <Route path="*" element={<Items />} />

              
        </Routes>
      
    )
}