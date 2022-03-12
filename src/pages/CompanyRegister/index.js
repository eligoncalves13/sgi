import React, { useState } from 'react';
import CompanyService from '../../services/CompanyService';
import { toast } from 'react-toastify';
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
    cnpj: "", 
    email: "",
    zipCode: "",
    address: "",
    addressNumber: "",
    district: "",
    city: "",
    addressComplement: "",
    latitude: "",
    longitude: "",
  };

  const [input, setInputs] = useState(initialInputsState);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setInputs({ ...input, [name]: value });
  };

    function handleSubmit(event) {
      event.preventDefault();
      var data = {
        companyName: input.companyName, 
        latitude: input.latitude,
        longitude: input.longitude,
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
            latitude: response.data.latitude,
            longitude: response.data.longitude,
          })
          toast.success(`Empresa cadastrada com sucesso!`)
          setInputs(initialInputsState);
        })}
        catch(e) {
          toast.e(e.response.data)
        };
    
    }
  }

  function cleanInput(event){
    event.preventDefault();
    setInputs(initialInputsState);
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
    </ContainerPage>
  )
}

export default CompanyRegister;