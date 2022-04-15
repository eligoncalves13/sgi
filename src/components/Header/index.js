import React from 'react';
//Styles
import { 
  ContainerHeader 
} from './styles';

const Header = ({title}) => {
  return (
      <ContainerHeader>    
        <h2>{title}</h2>
      </ContainerHeader>
  );
}
export default Header;