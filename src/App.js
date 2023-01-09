import React from 'react'
import Header from './Components/Header';
import Contact from './Pages/Contact';
import Home from './Components/Home'
import About from './Components/About';
import Shop from './Pages/Shop';
import {Route,Routes} from "react-router-dom"
import img from "../src/v.png"

export const App = () => {
  return (
 <>
    <Header/>
  <div style={{ backgroundImage: `url(${img}) `  }}  className="bg-cover bg-no-repeat">
    
   < Routes>
    <Route exact path='/' element={< Home />}></Route>
    <Route exact path='/about' element={<About />}></Route>
    <Route exact path='/contact' element={<Contact/>}></Route>
    <Route exact path='/SHOP' element={< Shop />}></Route>
    

    </ Routes>
    </div>


  

 </>
  )
}
export default App;
