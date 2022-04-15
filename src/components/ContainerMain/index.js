import React from 'react';
//Styles
import { 
  Container 
} from './styles';

const ContainerMain = ({children}) =>  {
  return (
    <Container>
       {children}
    </Container>
  );
}
export default ContainerMain;