//Libraries
import { Routes, Route } from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
//Pages
import Logon from './pages/Logon';
import Map from './pages/Map';
import CompanyRegister from './pages/CompanyRegister';
import CompanyList from './pages/CompanyList';
import CompanyEdit from './pages/CompanyEdit';
import ProductRegister from './pages/ProductRegister';
import ProductList from './pages/ProductList';
import ProductEdit from './pages/ProductEdit';

const App = () => {
  return (
    <>
    <ToastContainer/>
    <Routes>
      <Route exact path="/" element={<Logon/>}/>
      <Route path="/map" element={<Map/>}/>
      <Route path="/company_register" element={<CompanyRegister />}/>
      <Route path="/company_list" element={<CompanyList/>}/>
      <Route path="/company_list/:id" element={<CompanyEdit/>} />
      <Route path="/product_register" element={<ProductRegister/>}/>
      <Route path="/product_list" element={<ProductList/>}/>
      <Route path="/product_list/:id" element={<ProductEdit/>}/>
    </Routes>
    </>
  );
}

export default App;
