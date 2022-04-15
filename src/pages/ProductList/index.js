import React, { useEffect, useState } from 'react';
//JSON Server
import ProductService from '../../services/ProductService';
//Libraries
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
//Components
import ContainerPage from '../../components/ContainerPage';
import Table from '../../components/Table';
import Header from '../../components/Header';
import ContainerMain from '../../components/ContainerMain';
import Footer from '../../components/Footer';

const ProductList = () => {
  const [product, setProduct] = useState([]);

  const history = useNavigate();

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = () => {
    ProductService.getAll()
      .then((response) => {
        setProduct(response.data); 
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const column = [
    { heading: 'ID', value: 'id' },
    { heading: 'Nome', value: 'name' },
    { heading: 'Custo unitário', value: 'unitCost' },
    { heading: 'Fornecedor', value: 'provider' },
    { heading: 'Grupo', value: 'group' },
    { heading: ' ', value: 'edit' },
    { heading: ' ', value: 'remove' },
  ]

  const openProductEdit = id => {
    history("/product_list/" + id);
  };

  const deleteProduct = id => {
    ProductService.remove(id) 
      .then((response) => {
        toast.error(`Cadastro removido!`)
        getProduct();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const openProductList = event => {
    event.preventDefault();
    history('/product_register');
  }

  return (
      <ContainerPage>
      <Header
        title="Produtos"/>
        <ContainerMain>
          <Table 
            title="Lista de Produtos" 
            data={product} 
            column={column} 
            edit={openProductEdit} 
            remove={deleteProduct}
            open={openProductList}
            label="Cadastrar Produtos"/>          
        </ContainerMain>
        <Footer/>
      </ContainerPage>
  )
}
export default ProductList;