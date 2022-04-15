import React, { useState, useEffect } from 'react';
//Libraries
import { useParams } from 'react-router-dom';
import {toast} from 'react-toastify';
//JSON Server
import ProductService from '../../services/ProductService';
import CompanyService from '../../services/CompanyService';
//Components 
import ContainerPage from '../../components/ContainerPage';
import ContainerForm from '../../components/ContainerForm';
import InputForm from '../../components/InputForm';
import Line from '../../components/Line';
import TextArea from '../../components/TextArea';
import Select from '../../components/Select';
import ImageUrl from '../../components/ImageUrl';
import Header from '../../components/Header';
import ContainerMain from '../../components/ContainerMain';
import Footer from '../../components/Footer';

const ProductEdit = () => {
    const initialInputState = {
        id: null, 
        url: "", 
        name: "",
        unitCost: "", 
        description: "",
        provider: "", 
        group: ""
    };

    const [input, setInput] = useState(initialInputState);
    const [company, setCompany] = useState([]);
    const [group, setGroup] = useState([]);

    const {id} = useParams();

    useEffect(() => {
        getInput();
        getInputAll();
    }, []);

    const getInput = () => {
        ProductService.get(id)
        .then((response) => setInput(response.data))
    }

    const getInputAll = () => {
        CompanyService.getAll()
        .then((response) => {
          setCompany(response.data)
          setGroup(response.data)
        })
      }

    const handleChange = event => {
        const { name, value } = event.target;
        setInput({ ...input, [name]: value });
    };

    const updateInput = event => {
        event.preventDefault();
        ProductService.update(id, input)
        .then(response => {
            toast.success(`Cadastro editado!`)
            setInput(initialInputState);
        })
        .catch(err => {
            console.log(err);
        })
    }

    const cleanInput = event => {
        event.preventDefault();
        setInput(initialInputState);
    };

    return (
      <ContainerPage>
      <Header
        title="Produtos"/>
      <ContainerMain>
      <ContainerForm save={updateInput} cancel={cleanInput} title="Edite produto">
        {input.url && (
        <ImageUrl
          url={input.url}
          title="Imagem da URL"/>
        )}
        <InputForm
          style={{ width: "100%" }} 
          type="text"
          label='URL da imagem'
          id="image"
          value={input.url}
          onChange={handleChange}
          name='url'
          required
        />
        <InputForm
          style={{ width: "64%" }} 
          type="text"
          label='Nome'
          id="name"
          value={input.name}
          onChange={handleChange}
          name='name'
          required
        />    
        <InputForm
          style={{ width: "32%" }} 
          type="number"
          label='Custo unitário'
          id="unitCost"
          value={input.unitCost}
          onChange={handleChange}
          name='unitCost'
          required
        />
        <TextArea
          style={{ width: "100%" }} 
          label='Descrição'
          id="description"
          value={input.description}
          onChange={handleChange}
          name="description"
          required
        />
        <Line/>
        <Select
          style={{ width: "48%" }} 
          label='Fornecedor'
          value={input.provider}
          onChange={handleChange}
          options={company.map((input) => {
            return <option value={input.companyName}>{input.companyName}</option>
          })}
          description="Selecione um fornecedor"
          name="provider"
          required
        />
        <Select
          style={{ width: "48%" }} 
          label='Grupo'
          value={input.group}
          onChange={handleChange}
          options={group.map((input) => {
            return <option value={input.group}>{input.group}</option>
          })}
          name="group"
          description="Selecione um grupo"
          required
        />
      </ContainerForm>
      </ContainerMain>
      <Footer/>
    </ContainerPage>
    );
}

export default ProductEdit;