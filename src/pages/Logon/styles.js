import styled from 'styled-components';

export const Container = styled.div`
  font-family: 'Roboto Slab', sans-serif;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h2`
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 20px;
`

export const ContainerLogin = styled.form`
  transition: 0.8s;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (max-width: 400px){
    margin: 10px; 
    width: 100%;  
  }
`;

