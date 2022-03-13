import React from 'react';
//Styles
import { 
  Container 
} from './styles';

const ContainerPage = ({children}) => {
  return (
      <Container>
          {children} 
      </Container>
  );
}
export default ContainerPage;