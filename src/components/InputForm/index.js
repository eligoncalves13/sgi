import React from 'react';
//Styles
import { 
  ContainerInput, 
  DescriptionInput,
  InputText
} from './styles';

const InputForm = ({label, style, ...otherProps}) => {
  return (
    <ContainerInput style={style}>
        <DescriptionInput>{label}</DescriptionInput>
        <InputText {...otherProps}/>
    </ContainerInput>
  );
}
export default InputForm;