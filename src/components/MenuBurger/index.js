import React, { useState } from 'react';
import Menu from '../Menu';
//Styles
import { ContainerMenuHamburger } from './styles';

function MenuBurger() {
    const [open, setOpen] = useState(false);
  return (
    <>
    <ContainerMenuHamburger open={open} onClick={() => setOpen(!open)}>
        <div/> 
        <div/> 
        <div/> 
    </ContainerMenuHamburger>
    <Menu open={open}/>
    </>
  );
}
export default MenuBurger;