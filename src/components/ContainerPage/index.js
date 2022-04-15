import React from 'react';
import MenuBurger from '../MenuBurger';
//Styles
import { 
  Container 
} from './styles';

const ContainerPage = ({children}) => {
  return (
      <Container>
        <MenuBurger/>
          {children} 
      </Container>
  );
}
export default ContainerPage;