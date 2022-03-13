import React from 'react';
//Styles
import { 
    ContainerButton, 
    ButtonSubmit 
} from './styles';

const STYLES = [
    'btn-round-blue', 
    'btn-blue', 
    'btn-gray',
    'btn-red',
    'btn-green',
    'btn-blue-list',
]

const Button = ({children, style, ...others}) => {
    const checkButtonStyle = STYLES.includes(style) ? style : STYLES[0];
    return (
      <ContainerButton>
        <ButtonSubmit className={`${checkButtonStyle}`} {...others}> 
           {children}
        </ButtonSubmit>
      </ContainerButton>  
  )
}

export default Button;