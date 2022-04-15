import styled from 'styled-components';

export const Container = styled.div`
  font-family: 'Roboto Slab', sans-serif;
  height: 100vh;
  width: 100%;
  display: flex;
  position: relative;
`;

export const Title = styled.h2`
  font-size: 16px;
  margin-bottom: 30px;
`

export const ContainerImage = styled.div`
    height: 100vh;
    width: 50%;

    position: relative;
    
    img {
        height: 100%;
        object-fit: cover;
        opacity: 0.8;
        transition: 0.8s;
        width: 100%;

        position: absolute;
        top: 0;
        left: 0;        
    }

    @media only screen and (max-width: 800px) {
        height: 100%;
        opacity: 0.4;
        transition: 0.8s;
        width: 100%;

        position: absolute;
        top: 0;
        left: 0;
    }
`;

export const ContainerLogin = styled.form`
  transition: 0.8s;
  height: 100%;
  width: 50%;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  img {
    height: 209px;
    width: 209px;
  }

  @media only screen and (max-width: 800px) {  
      height: 100%;
      transition: 0.8s;
      width: 100%;
      z-index: 1;

      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
    } 
`;

