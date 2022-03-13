import styled from 'styled-components';

export const Container = styled.div`
  @media only screen and (max-width: 600px){ 
      overflow-x:auto
    } 
`

export const Title = styled.h2`
  color: #374557;
  font-family: 'Poppins', sans-serif;
  font-size: larger;
  font-weight: bolder;
  margin: 30px 30px;

  @media only screen and (max-width: 600px){
    margin: 30px 5px;
  }
`;

export const ContainerTable= styled.table`
  background: #FFF;
  font-family: 'Raleway', sans-serif;
  padding: 10px;
  margin: 30px 30px;
  max-width: 80%;

  @media only screen and (max-width: 600px){
    margin: 5px;
    font-size: 10px;
  } 
`;

export const THeader = styled.thead`
  background: #E8E8E8;
  color: #25282B;
  
  th {
    font-size: 14px;
    font-weight: bolder;
    padding: 12px;
    text-align: left;
    vertical-align: middle;
  }
`;

export const TBody = styled.tbody`
  font-size: 14px;
`;

export const Row = styled.tr`
`;

export const RowItem = styled.td`
  border-bottom: 1px solid #E8E8E8;
  color: #53575D;
  padding: 12px;
`;