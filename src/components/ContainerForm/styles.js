import styled from 'styled-components';

export const Container = styled.div`
  border: 1.5px solid #d9e1ea;
  border-radius: 4px;
  font-family: 'Poppins', sans-serif;
  margin: 20px;
`;

export const Header = styled.header`
  background-color: #F7F7f7;
  border-bottom: 1.5px solid #d9e1ea;
  padding: 0 10px;
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
  font-size: 22px;
  font-weight: bolder;

  @media only screen and (max-width: 200px){
    font-size: 18px;
    text-align: center;
  }
`;

export const Form = styled.form`
  margin: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;