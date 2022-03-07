import React, { useState } from 'react';
//Components 
import ContainerPage from '../../components/ContainerPage';
import Menu from '../../components/Menu';
import ContainerForm from '../../components/ContainerForm';
import InputForm from '../../components/InputForm';
import Line from '../../components/Line';
import TextArea from '../../components/TextArea';
import Select from '../../components/Select';

const ProductRegister = () => {

  return (
    <ContainerPage>
      <Menu/>
      <ContainerForm title="Novo produto">
        <InputForm
          style={{ width: "100%" }} 
          type="text"
          label='URL da imagem'
          id="image"
          name='image'
          required
        />
        <InputForm
          style={{ width: "64%" }} 
          type="text"
          label='Nome'
          id="name"
          name='name'
          required
        />    
        <InputForm
          style={{ width: "32%" }} 
          type="number"
          label='Custo unitário'
          id="unit_cost"
          name='unit_cost"'
          required
        />
        <TextArea
          style={{ width: "100%" }} 
          label='Descrição'
          id="description"
          name="description"
          required
        />
        <Line/>
        <Select
          style={{ width: "48%" }} 
          label='Fornecedor'
          required
        />
        <Select
          style={{ width: "48%" }} 
          label='Grupo'
          required
        />
      </ContainerForm>
    </ContainerPage>
  )
}

export default ProductRegister;