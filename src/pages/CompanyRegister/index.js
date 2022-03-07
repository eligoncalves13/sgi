import React, { useState } from 'react';
//Components 
import ContainerPage from '../../components/ContainerPage';
import Menu from '../../components/Menu';
import ContainerForm from '../../components/ContainerForm';
import InputForm from '../../components/InputForm';
import Line from '../../components/Line';

const CompanyRegister = () => {

  const initialInputsState = {
    id: null, 
    companyName: "", 
    fantasyName: "",
    cnpj: null, 
    email: "",
    zipCode: null,
    address: "",
    addressNumber: null,
    district: "",
    city: "",
    addressComplement: "",
    latitude: null,
    longitude: null,
    active: false,
  };

  const [input, setInputs] = useState(initialInputsState);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setInputs({ ...input, [name]: value });
  };

  return (
    <ContainerPage>
      <Menu/>
      <ContainerForm title="Nova empresa">
        <InputForm
          style={{ width: "48%" }} 
          type="text"
          label='Razão social'
          id="company-name"
          value={input.company_name}
          onChange={handleInputChange}
          name='company-name'
          required
        />
        <InputForm
          style={{ width: "48%" }} 
          type="text"
          label='Nome fantasia'
          id="fantasy-name"
          value={input.fantasy_name}
          onChange={handleInputChange}
          name='fantasy-name'
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
          id="zip-code"
          value={input.zip_code}
          onChange={handleInputChange}
          name='zip-code'
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
          id="address-number"
          value={input.address_number}
          onChange={handleInputChange}
          name='address-number'
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
          id="address-complement"
          value={input.address_complement}
          onChange={handleInputChange}
          name='address-complement'
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
    </ContainerPage>
  )
}

export default CompanyRegister;