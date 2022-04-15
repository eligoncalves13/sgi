import React from 'react';
//Images
import Logo from "../../assets/logo1.png";
//Icons 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

// import SubMenu from '../SubMenu';

//Styles
import { 
  ContainerMenu,
  MenuList, 
  MenuListItem, 
  StyledLink
} from './styles';

// export const SidebarData = [
//   {
//     title: 'Empresas',
//     path: '/company_list',
//     activeClassName: "active",
//     icon: <FontAwesomeIcon icon={faBuilding} pull="left" size="lg"/>,

//     subNav: [
//       {
//         title: 'Cadastrar Empresa',
//         path: '/company_register',
//         activeClassName: "active",
//       },
//     ]
//   },
//   {
//     title: 'Produtos',
//     path: '/product_list',
//     activeClassName: "active",
//     icon: <FontAwesomeIcon icon={faShoppingBasket} pull="left" size="lg"/>,
    
//     subNav: [
//       {
//         title: 'Cadastrar Produto',
//         path: '/product_register',
//         activeClassName: "active",
//       },
//     ]
//   },
//   {
//     title: 'Mapa',
//     path: '/map',
//     activeClassName: "active",
//     icon: <FontAwesomeIcon icon={faMapMarkedAlt} pull="left" size="lg"/>
//   },
// ];


const Menu = ({open}) => {
  // const [sidebar, setSidebar] = useState(false);

  // const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
    <ContainerMenu open={open}>
      <img src={Logo} alt="Logo"></img>
    {/* {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })} */}
      
      <MenuList>
          <MenuListItem>
            <StyledLink activeClassName="active"  to="/company_list"><FontAwesomeIcon icon={faBuilding} pull="left" size="lg"/>Empresas</StyledLink>
          </MenuListItem>
          <MenuListItem>
            <StyledLink activeClassName="active"  to="/product_list"><FontAwesomeIcon icon={faShoppingBasket} pull="left" size="lg"/>Produtos</StyledLink>
          </MenuListItem>
          <MenuListItem>
            <StyledLink activeClassName="active"  to="/map"><FontAwesomeIcon icon={faMapMarkedAlt} pull="left" size="lg"/>Mapa</StyledLink>
          </MenuListItem>    
      </MenuList>
    </ContainerMenu>
    </>
  )
}
export default Menu;