import React, { useState } from 'react';
//Libraries
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
//JSON Server 
import CompanyService from '../../services/CompanyService';
//Components 
import ContainerPage from '../../components/ContainerPage';
import Menu from '../../components/Menu';
import ContainerForm from '../../components/ContainerForm';
import InputForm from '../../components/InputForm';
import Line from '../../components/Line';
import Tags from '../../components/Tags';
import Button from '../../components/Button';

const CompanyRegister = () => {
  const initialInputsState = {
    id: null, 
    companyName: "", 
    fantasyName: "",
    cnpj: "", 
    email: "",
    zipCode: "",
    address: "",
    addressNumber: "",
    district: "",
    city: "",
    addressComplement: "",
    latitude: "",
    longitude: ""
  };

  const [input, setInputs] = useState(initialInputsState);
  const [group, setGroup] = useState([]);

  const history = useNavigate();

  const handleInputChange = event => {
    const { name, value } = event.target;
    setInputs({ ...input, [name]: value });
  };

  const selectedTags = tags => {
    setGroup(tags)
  };

  const handleSubmit = event => {
    event.preventDefault();
    var data = {
      companyName: input.companyName, 
      fantasyName: input.fantasyName,
      cnpj: input.cnpj, 
      email: input.email,
      zipCode: input.zipCode,
      address: input.address,
      addressNumber: input.addressNumber,
      district: input.district,
      city: input.city,
      addressComplement: input.addressComplement,
      latitude: parseFloat(input.latitude),
      longitude: parseFloat(input.longitude),
      group: group
    }

    if(!input.companyName || !input.fantasyName || !input.cnpj || !input.email || !input.zipCode || !input.address || !input.addressNumber || !input.district || !input.city || !input.latitude || !input.longitude) {
      toast.error(`Campos obrigatórios!`);
    } else {
      try {
        CompanyService.create(data)
        .then(response => {
          setInputs({
            id: response.data.id,
            companyName: response.data.companyName, 
            fantasyName: response.data.fantasyName,
            cnpj: response.data.cnpj, 
            email: response.data.email,
            zipCode: response.data.zipCode,
            address: response.data.address,
            addressNumber: response.data.addressNumber,
            district: response.data.district,
            city: response.data.city,
            addressComplement: response.data.addressComplement,
            latitude: response.data.latitude,
            longitude: response.data.longitude,
            group: response.data.group
          })
          toast.success(`Empresa cadastrada com sucesso!`)
          cleanInput(event);
        })}
        catch(e) {
          toast.e(e.response.data)
        };
    }
  }

  const cleanInput = event => {
    event.preventDefault();
    setInputs(initialInputsState);
    setGroup([]);
  }

  const openCompanyList = event => {
    event.preventDefault();
    history('/company_list');
  }

  return (
    <ContainerPage>
      <Menu/>
      <ContainerForm save={handleSubmit} cancel={cleanInput} title="Nova empresa">
        <InputForm
          style={{ width: "48%" }} 
          type="text"
          label='Razão social'
          id="companyName"
          value={input.companyName}
          onChange={handleInputChange}
          name='companyName'
          required
        />
        <InputForm
          style={{ width: "48%" }} 
          type="text"
          label='Nome fantasia'
          id="fantasyName"
          value={input.fantasyName}
          onChange={handleInputChange}
          name='fantasyName'
          required
        />  
        <Tags 
          style={{ width: "100%" }} 
          label='Grupo'
          id="group"
          value={group}
          name='group'
          selectedTags={selectedTags}
          required
        />  
        <InputForm
          style={{ width: "48%" }} 
          type="number"
          label='CNPJ'
          id="cnpj"
          value={input.cnpj}
          onChange={handleInputChange}
          name='cnpj'
          required
        />
        <InputForm
          style={{ width: "48%" }} 
          type="email"
          label='Email'
          id="email"
          value={input.email}
          onChange={handleInputChange}
          name='email'
          required
        />
        <Line/>
        <InputForm
          style={{ width: "32%" }} 
          type="number"
          label='CEP'
          id="zipCode"
          value={input.zipCode}
          onChange={handleInputChange}
          name='zipCode'
          required
        />
        <InputForm
          style={{ width: "64%" }} 
          type="text"
          label='Endereço'
          id="address"
          value={input.address}
          onChange={handleInputChange}
          name='address'
          required
        />
        <InputForm
          style={{ width: "32%" }} 
          type="number"
          label='Número'
          id="addressNumber"
          value={input.addressNumber}
          onChange={handleInputChange}
          name='addressNumber'
          required
        />
        <InputForm
          style={{ width: "30%" }}
          type="text"
          label='Bairro'
          id="district"
          value={input.district}
          onChange={handleInputChange}
          name='district'
          required
        />
        <InputForm
          style={{ width: "30%" }}
          type="text"
          label='Cidade'
          id="city"
          value={input.city}
          onChange={handleInputChange}
          name='city'
          required
        />
        <InputForm
          style={{ width: "100%" }}
          type="text"
          label='Complemento'
          id="addressComplement"
          value={input.addressComplement}
          onChange={handleInputChange}
          name='addressComplement'
        />
        <Line/>
        <InputForm
          style={{ width: "48%" }}
          type="number"
          label='Latitude'
          id="latitude"
          value={input.latitude}
          onChange={handleInputChange}
          name='latitude'
        />
        <InputForm
          style={{ width: "48%" }}
          type="number"
          label='Longitude'
          id="longitude"
          value={input.longitude}
          onChange={handleInputChange}
          name='longitude'
        />
      </ContainerForm>
      <Button onClick={openCompanyList} style='btn-blue-list'>Lista de Empresas</Button>  
    </ContainerPage>
  )
}

export default CompanyRegister;