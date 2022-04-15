import styled from 'styled-components';

export const ContainerButton = styled.div`
  display: flex;  
  
  .btn-login-blue {
      background-color: #1C90C7; 
      border: 1px solid #1C90C7;
      border-radius: 10px;
      font-size: 16px;
      height: 45px;
      margin: 5px;
      width: 300px;
  }
  .btn-blue {
      background-color: #1C90C7;
      border: 1px solid #1C90C7;
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
      background-color: #1C90C7; 
      border: 1px solid #1C90C7;
      border-radius: 4px;
      font-size: 14px;
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

