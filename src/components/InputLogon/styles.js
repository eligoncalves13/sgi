import styled from 'styled-components';

export const ContainerInput = styled.div`
  background-color: #FFFF;
  border: 1px solid ${(props) => props.errorMessage ? '#dc3545' : '#d9e1ea'};
  border-radius: 5px;
  color: #4164f5;
  font-family: 'Roboto Slab', serif;
  margin: 10px 0;
  padding-left: 5px;
  width: 350px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    border-color: #4164f5;
  }
  &:focus {
    border-color: #4164f5;
  }

  @media only screen and (max-width: 400px){
    width: 100%; 
  }
`;

export const InputText = styled.input`
  background-color: #FFFF;
  border: none;
  border-radius: 5px;
  box-sizing: border-box;
  cursor: pointer;
  font-family: 'Roboto Slab', serif;
  font-size: 11px ;
  height: 35px;
  margin-left: 10px;
  outline: none;
  padding-left: 5px;
  width: 100%;
`;

export const ErrorMessage = styled.div`
  color: #dc3545;
  font-size: 11px;
  margin-top: 2px;
`;