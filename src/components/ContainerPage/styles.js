import styled from 'styled-components';

export const Container = styled.div`
height: 100vh;
display: grid; 
grid-template-columns: 200px 1fr; 
grid-template-rows: 70.5px 1fr 50px; 
gap: 0px 0px; 
grid-template-areas: 
  "nav header"
  "nav main"
  "footer footer"; 

@media only screen and (max-width: 800px){
  display: grid; 
  grid-template-columns: 1fr; 
  grid-template-rows: 70.5px 1fr 50px;; 
  gap: 0px 0px; 
  grid-template-areas: 
    "header"
    "main"
    "footer";    
}
`;
