import React from 'react';
//Styles
import { 
  ContainerMenu, 
  MenuList, 
  Title,
  MenuListItem
} from './styles';

function Menu() {
  return (
    <>
    <ContainerMenu>
      <MenuList >
          <Title>Sgi</Title>
          <MenuListItem >Mapa</MenuListItem>
          <MenuListItem >Produtos</MenuListItem>
          <MenuListItem >Empresas</MenuListItem>
      </MenuList>
    </ContainerMenu>
    </>
  )
}
export default Menu;