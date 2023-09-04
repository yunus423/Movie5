
import React from 'react';


import './Style.css';
import Giriş from './Giriş';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Yns1 from './Yns1';






function App() {
  
  return (  


    <div className="App">


 -
       <BrowserRouter > 
       <Routes >

        
       <Route path="/" element={<Giriş/>}/>
       <Route path="/yns" element={<Yns1/>}/>

        
      
       </Routes> 
       
       
       
       
       
       
       </BrowserRouter>
  
        


 </div>
  

  
  );
}

export default App;
