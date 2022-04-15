import styled from 'styled-components';

export const Container = styled.div`
  font-family: 'Poppins', sans-serif;
  margin: 30px;
`;

export const Header = styled.header`
  border-bottom: 1.5px solid #d9e1ea;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 300px){
    flex-direction: column;
  }
`;

export const DivButton = styled.div`
  display: flex;
  
  @media only screen and (max-width: 200px){
    align-items: center;
    flex-direction: column;
  }
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: bolder;

  @media only screen and (max-width: 200px){
    font-size: 18px;
    text-align: center;
  }
`;

export const Form = styled.form`
  margin: 15px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;