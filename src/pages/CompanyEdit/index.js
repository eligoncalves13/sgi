
import React, { useState, useEffect } from 'react';
//Libraries
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
//JSON Server
import CompanyService from '../../services/CompanyService';
//Components 
import ContainerPage from '../../components/ContainerPage';
import ContainerMain from '../../components/ContainerMain';
import ContainerForm from '../../components/ContainerForm';
import InputForm from '../../components/InputForm';
import Line from '../../components/Line';
import Tag from '../../components/Tag';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const CompanyEdit = () => {
    const initialInputState = {
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
    
    const [input, setInput] = useState(initialInputState);
    const [group, setGroup] = useState([]);

    const {id} = useParams();

    useEffect(() => {
        getInput();
    }, []);

    const getInput = () => {
        CompanyService.get(id)
        .then((response) => setInput(response.data))
        console.log(id)
    }
  
    const handleInputChange = event => {
        const { name, value } = event.target;
        setInput({ ...input, [name]: value });
    };
  
    const selectedTags = tags => {
        setGroup(tags)
    }

    const updateInput = event => {
        event.preventDefault();
        CompanyService.update(id, input)
        .then(response => {
            console.log(response.data);
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
        setGroup([])
    }

    return (
    <ContainerPage>
    <Header
        title="Empresas"/>
      <ContainerMain>
      <ContainerForm save={updateInput} cancel={cleanInput} title="Editar empresa">
        <InputForm
          style={{ width: "48%" }} 
          type="text"
          label='Raz??o social'
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
        <Tag
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
          label='Endere??o'
          id="address"
          value={input.address}
          onChange={handleInputChange}
          name='address'
          required
        />
        <InputForm
          style={{ width: "32%" }} 
          type="number"
          label='N??mero'
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
      </ContainerMain>
      <Footer/>
    </ContainerPage>
    );
}

export default CompanyEdit;