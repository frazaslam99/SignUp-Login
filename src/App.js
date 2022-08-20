import React from 'react'
import Navbar from './Components/NavBar/navbar';
import { BrowserRouter, Routes, Route,} from 'react-router-dom';
import Signup from './Components/Signup/Signup';
import Signupupdate from './Components/Signup/updatesignup';

import Login from './Components/Login/Login';
import Resultdash from './Components/Dashboard/resultdash';
import ProductListing from "./Components/Products/Productlisting"
import ProductDetail from "./Components/Products/Productdetail"

function App() {
  return (
    <>

 
    <BrowserRouter>
    <Navbar/>
    <Routes>
  
     <Route exact path='/Signup' element={< Signup />}></Route>
     <Route exact path='/Signup/:id' element={< Signupupdate />}></Route>

     <Route exact path='/Login' element={< Login />}></Route>

     <Route exact path='/dashboard' element={< Resultdash />}></Route>
     <Route exact path='/products' element={< ProductListing />}></Route>
     <Route exact path='/products/:productId' element={< ProductDetail />}></Route>




     
    </Routes>
    </BrowserRouter>


    </>
  );
}

export default App;
