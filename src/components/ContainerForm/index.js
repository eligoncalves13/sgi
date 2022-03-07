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

function ContainerForm({children, title}) {
  return (
    <Container>
        <Header>
            <Title>{title}</Title>
            <DivButton>
                <Button style='btn-gray'>Cancelar</Button>
                <Button style='btn-blue'>Salvar</Button>
            </DivButton>
        </Header>
        <Form>{children}</Form>      
    </Container>
  );
}

export default ContainerForm;