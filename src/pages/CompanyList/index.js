import React, { useEffect, useState } from 'react';
//JSON Server
import CompanyService from '../../services/CompanyService';
//Libraries
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
//Components
import ContainerPage from '../../components/ContainerPage';
import Menu from '../../components/Menu';
import Table from '../../components/Table';

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

  return (
    <ContainerPage>
      <Menu/>
      <Table 
        title="Lista de Empresas" 
        data={company} 
        column={column} 
        edit={openCompanyEdit} 
        remove={deleteCompany}/>
      </ContainerPage>
  );
}

export default CompanyList;