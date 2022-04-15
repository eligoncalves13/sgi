import React, { useEffect, useState } from 'react';
//JSON Server
import ProductService from '../../services/ProductService';
import CompanyService from '../../services/CompanyService';
//Libraries
import { toast } from 'react-toastify';
//Components 
import ContainerPage from '../../components/ContainerPage';
import ContainerMain from '../../components/ContainerMain';
import Header from '../../components/Header';
import ContainerForm from '../../components/ContainerForm';
import InputForm from '../../components/InputForm';
import Line from '../../components/Line';
import TextArea from '../../components/TextArea';
import Select from '../../components/Select';
import ImageUrl from '../../components/ImageUrl';
import Footer from '../../components/Footer';

const ProductRegister = () => {
  const initialInputsState = {
    id: null, 
    url: "", 
    name: "",
    unitCost: "", 
    description: "",
    provider: "", 
    group: ""
  };

  const [input, setInput] = useState(initialInputsState);
  const [company, setCompany] = useState([]);
  const [group, setGroup] = useState([]);

  useEffect(() => {
    getInput();
  }, []);
 
  const getInput = () => {
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

  const handleSubmit = event => {
    event.preventDefault();
    var data = {
        url: input.url, 
        name: input.name,
        unitCost: input.unitCost,
        description: input.description,
        provider: input.provider, 
        group: input.group
    }

    if(!input.url || !input.name || !input.unitCost || !input.description || !input.provider || !input.group) {
      toast.error(`Campos obrigatórios!`);
    } else {
      try {
        ProductService.create(data)
        .then(response => {
          setInput({
            id: response.data.id,
            url: response.data.url, 
            name: response.data.name,
            unitCost: response.data.unitCost,
            description: response.data.description,
            provider: response.data.provider,
            group: response.data.group
          })
          toast.success(`Produto cadastrado com sucesso!`)
          cleanInput(event)
        })}
      catch(e) {
         toast.e(e.response.data)
      };
    }
  }

  const cleanInput = event => {
    event.preventDefault();
    setInput(initialInputsState);
  }

  return (
    <ContainerPage>
    {/* <Menu/> */}
      <Header
        title="Produtos"/>
      <ContainerMain>
      <ContainerForm save={handleSubmit} cancel={cleanInput} title="Novo produto">
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
  )
}

export default ProductRegister;