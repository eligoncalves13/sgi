import React from 'react';
//Styles
import { 
  ContainerMenu, 
  MenuList, 
  Title,
  MenuListItem, 
  StyledLink
} from './styles';

function Menu() {
  return (
    <>
    <ContainerMenu>
      <MenuList >
          <Title>Sgi</Title>
          <MenuListItem><StyledLink activeClassName="active"  to="/map">Mapa</StyledLink></MenuListItem>
          <MenuListItem><StyledLink activeClassName="active"  to="/product_register">Produtos</StyledLink></MenuListItem>
          <MenuListItem><StyledLink activeClassName="active"  to="/company_register">Empresas</StyledLink></MenuListItem>
      </MenuList>
    </ContainerMenu>
    </>
  )
}
export default Menu;