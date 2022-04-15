import styled from 'styled-components';
//Libraries
import { NavLink } from 'react-router-dom';

export const ContainerMenu = styled.nav`
  background-color: #FAFAFA;
  font-family: 'Poppins', sans-serif;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  
  grid-area: nav; 

  img {
    height: 120px;
    width: 120px;  
  }

  @media only screen and (max-width: 800px){
    flex-direction: column;
    height: 100vh;
    padding-top: 3.5rem;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    transition: transform 0.3s ease-in-out; 
    width: 200px;

    position: fixed;
    top: 0;
    left: 0;
  }
`;

export const MenuList = styled.ul`
  font-family: 'Poppins', sans-serif;
  list-style: none;
  display: flex;
  flex-direction: column;
  width: 200px;
`;

export const MenuListItem = styled.li`
  color: #1C90C7;
  cursor: pointer;
  font-size: 12px;
  
  a {
    color: inherit;
    margin: 5px 30px;
    padding: 15px; 
    text-decoration: none;
    
    display: flex;
    align-items: center;
  }
`;

export const StyledLink = styled(NavLink)`
  &.${props => props.activeClassName} {
    background-color:#1C90C7;
    border-radius: 15px;
    box-shadow: 0px 20px 50px rgba(55, 69, 87, 0.1);     
    color: #FAFAFA; 
  }
`;
