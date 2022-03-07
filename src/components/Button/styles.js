import styled from 'styled-components';

export const ContainerButton = styled.div`
  display: flex;  
  
  .btn-round-blue {
      background-color: #4164f5; 
      border: 1px solid #4164f5;
      border-radius: 20px;
      margin: 10px 10px 10px 0;
      padding: 10px 20px;
  }
  .btn-blue {
      background-color: #0d6ef7; 
      border: 1px solid #0d6ef7;
      border-radius: 4px;
      margin: 10px 0 10px 10px;
      padding: 6px 10px;
  }
  .btn-gray {
      background-color: #6c757d; 
      border: 1px solid #6c757d;
      border-radius: 4px;
      margin: 10px 0 10px 10px;
      padding: 6px 10px;
  }
`;

export const ButtonSubmit = styled.button`
  box-shadow: 0px 20px 50px rgba(55, 69, 87, 0.1);
  font-family: 'Roboto Slab', serif;
  font-size: 12px;
  color: #FAFAFA;
  cursor: pointer;
  outline: none;
  &:hover {
    border-color: #000000;
  }
`;

