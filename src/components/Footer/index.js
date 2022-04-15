import React from 'react';
//Styles
import { 
  ContainerFooter
} from './styles';

const Footer = () => {
  const getYear = () => {
    return new Date().getFullYear();
  }
  
  return (
      <ContainerFooter>    
        <span>&copy; Copyright {getYear()}, Élida Beatriz Gonçalves</span>
      </ContainerFooter>
  );
}
export default Footer;