import React from 'react';
//Components
import Button from '../Button';
//Styles
import {
    Container,
    Title, 
    ContainerTable, 
    THeader, 
    TBody, 
    Row, 
    RowItem, 
  } from './styles';

  const Table = ({title, column, data, edit, remove}) => {
    const THeadItem = ({item}) => <th>{item.heading}</th>
    const TBodyItem = ({item, column, edit, remove}) => (
      <Row>
          {column.map((columnItem) => {
              if(columnItem.value.includes('edit')) {
                return  <RowItem><Button style='btn-green' onClick={edit}>Editar</Button></RowItem>
              }
              if(columnItem.value.includes('remove')) {
                  return  <RowItem><Button style='btn-red' onClick={remove}>Remover</Button></RowItem>
              }
              return <RowItem>{item[`${columnItem.value}`]}</RowItem>
          })}
      </Row>
    )

  return (
      <Container>
          <Title>
              {title}
          </Title>
          <ContainerTable>
              <THeader>
                  <Row>
                    {column.map((item) => <THeadItem item={item}/>)}
                  </Row>
              </THeader>
              <TBody>
                {data.map((item) => <TBodyItem item={item} column={column} edit={() => edit(item.id)} remove={() => remove(item.id)}/>)}
              </TBody>
          </ContainerTable>
      </Container>
  );
}

export default Table;