import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import './App.css'
import Form from './Components/Form';
import Navbar from './Components/Navbar';
import UpdateForm from "./Components/UpdateForm";
import Brands from "./Components/Brands.jsx";

function App() {

  return (
    <>

    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/brands" element={<Brands />} />
      </Routes>
    </Router>
  

    
    </>
  )
}

export default App
