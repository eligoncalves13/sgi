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
  .btn-red {
      background-color: #D82D56;
      border: 1px solid #D82D56;
      border-radius: 4px;
      padding: 6px 10px;
  }
  .btn-green {
      background-color: #8DB51B;
      border: 1px solid #8DB51B;
      border-radius: 5px;
      padding: 6px 10px;
  }
  .btn-blue-list {
      background-color: #0d6ef7; 
      border: 1px solid #0d6ef7;
      border-radius: 4px;
      margin: 10px 20px ;
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

