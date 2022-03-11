import React from 'react';
//Components
import Button from '../Button';
//Styles
import { 
    Container, 
    DivButton, 
    Form, 
    Header, 
    Title 
} from './styles';

function ContainerForm({children, title, save, cancel }) {
  return (
    <>
    <Container>
        <Header>
            <Title>{title}</Title>
            <DivButton>
                <Button onClick={cancel} style='btn-gray'>Cancelar</Button>
                <Button onClick={save} style='btn-blue'>Salvar</Button>
            </DivButton>
        </Header>
        <Form>{children}</Form>      
    </Container>
    </>
    
  );
}

export default ContainerForm;