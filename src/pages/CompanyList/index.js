import React, { useEffect, useState } from 'react';
//JSON Server
import CompanyService from '../../services/CompanyService';
//Libraries
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
//Components
import ContainerPage from '../../components/ContainerPage';
import Table from '../../components/Table';
import Header from '../../components/Header';
import ContainerMain from '../../components/ContainerMain';
import Footer from '../../components/Footer';

const CompanyList = () => {
  const [company, setCompany] = useState([]);

  const history = useNavigate();

  useEffect(() => {
    getCompany();
  }, []);

  const getCompany = () => {
    CompanyService.getAll()
      .then((response) => {
        setCompany(response.data); 
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const column = [
    { heading: 'ID', value: 'id' },
    { heading: 'Razão Social', value: 'companyName' },
    { heading: 'CNPJ', value: 'cnpj' },
    { heading: 'Email', value: 'email' },
    { heading: 'Endereço', value: 'address' },
    { heading: ' ', value: 'edit' },
    { heading: ' ', value: 'remove' },
  ];

  const openCompanyEdit = id => {
    history("/company_list/" + id);
  };

  const deleteCompany = id => {
    CompanyService.remove(id) 
      .then((response) => {
        toast.error(`Cadastro removido!`)
        getCompany();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const openCompanyList = event => {
    event.preventDefault();
    history('/company_register');
  }


  return (
    <ContainerPage>
    <Header
        title="Empresas"/>
      <ContainerMain>
      <Table 
        title="Lista de Empresas" 
        data={company} 
        column={column} 
        edit={openCompanyEdit} 
        remove={deleteCompany}
        open={openCompanyList}
        label="Cadastrar Empresas"/>
      </ContainerMain>
      <Footer/>
    </ContainerPage>
  );
}

export default CompanyList;