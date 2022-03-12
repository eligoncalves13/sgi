import React, { useEffect, useState } from 'react';
//Json Server
import ProductService from '../../services/ProductService';
import CompanyService from '../../services/CompanyService';
//Libraries
import { toast } from 'react-toastify';
//Components 
import ContainerPage from '../../components/ContainerPage';
import Menu from '../../components/Menu';
import ContainerForm from '../../components/ContainerForm';
import InputForm from '../../components/InputForm';
import Line from '../../components/Line';
import TextArea from '../../components/TextArea';
import Select from '../../components/Select';

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

  useEffect(() => {
    getInput();
  }, []);
 
  const getInput = () => {
      CompanyService.getAll()
      .then((response) => {
        setCompany(response.data)
      })
    }

  const groupList = [
    'Fruta', 
    'Verdura'
  ]

  const handleInputChange = event => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };

    function handleSubmit(event) {
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
          setInput(initialInputsState);
        })}
        catch(e) {
          toast.e(e.response.data)
        };
    }
  }

  function cleanInput(event){
    event.preventDefault();
    setInput(initialInputsState);
  }

  return (
    <ContainerPage>
      <Menu/>
      <ContainerForm save={handleSubmit} cancel={cleanInput} title="Novo produto">
        <InputForm
          style={{ width: "100%" }} 
          type="text"
          label='URL da imagem'
          id="image"
          value={input.url}
          onChange={handleInputChange}
          name='url'
          required
        />
        <InputForm
          style={{ width: "64%" }} 
          type="text"
          label='Nome'
          id="name"
          value={input.name}
          onChange={handleInputChange}
          name='name'
          required
        />    
        <InputForm
          style={{ width: "32%" }} 
          type="number"
          label='Custo unitário'
          id="unitCost"
          value={input.unitCost}
          onChange={handleInputChange}
          name='unitCost'
          required
        />
        <TextArea
          style={{ width: "100%" }} 
          label='Descrição'
          id="description"
          value={input.description}
          onChange={handleInputChange}
          name="description"
          required
        />
        <Line/>
        <Select
          style={{ width: "48%" }} 
          label='Fornecedor'
          value={input.provider}
          onChange={handleInputChange}
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
          onChange={handleInputChange}
          options={groupList.map((input) => {
            return <option value={input}>{input}</option>
          })}
          name="group"
          description="Selecione um grupo"
          required
        />
      </ContainerForm>
    </ContainerPage>
  )
}

export default ProductRegister;