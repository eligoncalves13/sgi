import React from 'react';
//Styles
import { 
  Container 
} from './styles';

function ContainerPage({children}) {
  return (
      <Container>
          {children} 
      </Container>
  );
}
export default ContainerPage;