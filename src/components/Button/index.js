import React from 'react';
//Syles
import { 
    ContainerButton, 
    ButtonSubmit 
} from './styles';

const STYLES = [
    'btn-round-blue', 
    'btn-blue', 
    'btn-gray'
]

function Button({children, type, style}) {
    const checkButtonStyle = STYLES.includes(style) ? style : STYLES[0];
    
    return (
      <ContainerButton>
        <ButtonSubmit type={type} className={`${checkButtonStyle}`}> 
           {children}
        </ButtonSubmit>
      </ContainerButton>  
  )
}

export default Button;