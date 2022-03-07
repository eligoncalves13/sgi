import styled from 'styled-components';

export const ContainerTextArea = styled.div`
  font-family: 'Raleway', sans-serif;
  display: flex;
  flex-direction: column;
`;

export const DescriptionTextArea = styled.label`
  font-size: 14px;
  font-weight: bold;
  margin: 10px 0;
`;

export const Description = styled.textarea`
  border: 1px solid #d9e1ea;
  border-radius: 3px;
  box-sizing: border-box;
  color: #53575D;
  cursor: pointer;
  font-family: 'Raleway', sans-serif;
  height: 50px;
  outline: none;
  padding-left: 5px;
  width: 100%;
  &:focus {
    border-color: #0d6ef7; 
  }
`;
