import { Routes, Route } from "react-router-dom";
import Navbar from "../components/common/navbar";
import Home from "../pages/home";
function App() {
  return (
    <>
      <Navbar/>
       
      <Routes>

         <Route
             path="/" 
             element = {<Home/>}
         
         />


      </Routes>
    
    
    </>

  
  );
}

export default App;
