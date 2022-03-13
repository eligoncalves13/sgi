import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ContainerMenu = styled.nav`
  background-color: #0d6ef7;
  height: 50px;
  display: flex;
  align-items: center;
  
  @media only screen and (max-width: 300px){ 
      overflow-x:auto;
    } 
`;

export const MenuList = styled.ul`
  font-family: 'Poppins', sans-serif;
  list-style: none;
  display: flex;
`;

export const Title = styled.h2`
  color: #ffffff;
  margin: 0 15px 0 30px;
  text-transform: uppercase;

  @media only screen and (max-width: 300px){ 
      margin: 0 10px 0 10px;
    } 
`;

export const MenuListItem = styled.li`
  color: #89bafa;
  cursor: pointer;
  font-size: 14px;
  
  a {
    color: inherit;
    text-decoration: none;
  }
`;

export const StyledLink = styled(NavLink)`
  &.${props => props.activeClassName} {
    color: #FAFAFA; 
  }
  margin: 10px;
`;
