import React, { useEffect, useState } from 'react';
//Json Server
import ProductService from '../../services/ProductService';
//Libraries
import { toast } from 'react-toastify';
//Components
import ContainerPage from '../../components/ContainerPage';
import Menu from '../../components/Menu';

const ProductList = () => {
    const [input, setInput] = useState([]);


  useEffect(() => {
    getInput();
  }, []);

  const getInput = () => {
    ProductService.getAll()
      .then((response) => {
        setInput(response.data); 
      })
      .catch((err) => {
        console.log(err);
      });
  };


  return (
      <ContainerPage>
          <Menu/>
      </ContainerPage>
  )
}

export default ProductList;