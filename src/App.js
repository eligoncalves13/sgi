import './App.css';
// External Libraries
import {ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import { Routes, Route } from 'react-router-dom';
// Pages
import Logon from './pages/Logon';
import Map from './pages/Map';
import CompanyRegister from './pages/CompanyRegister';
import CompanyList from './pages/CompanyList';
import ProductRegister from './pages/ProductRegister';
import ProductList from './pages/ProductList';

function App() {
  return (
    <>
    <ToastContainer/>
    <Routes>
      <Route exact path="/" element={<Logon />} />
      <Route path="/map" element={<Map />}/>
      <Route path="/company_register" element={<CompanyRegister />} />
      <Route path="/company_list" element={<CompanyList/>} />
      <Route path="/product_register" element={<ProductRegister />}/>
      <Route path="/product_list" element={<ProductList />}/>
    </Routes>
    </>
  );
}

export default App;
