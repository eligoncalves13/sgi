import './App.css';
// External Libraries
import {ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import { Routes, Route } from 'react-router-dom';
// Pages
import Logon from './pages/Logon';
import CompanyRegister from './pages/CompanyRegister';
import ProductRegister from './pages/ProductRegister';

function App() {
  return (
    <>
    <ToastContainer/>
    <Routes>
      <Route exact path="/" element={<Logon />} />
      <Route path="/company_register" element={<CompanyRegister />} />
      <Route path="/product_register" element={<ProductRegister />}/>
    </Routes>
    </>
  );
}

export default App;
