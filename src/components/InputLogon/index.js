import React from 'react';
//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//Styles
import { 
    ContainerInput, 
    InputText,
    ErrorMessage
} from './styles';

const InputLogon = ({element, icon, errorMessage, ...otherProps}) => {
  return (
    <>
    <ContainerInput
      errorMessage={errorMessage}>
      <FontAwesomeIcon 
        icon={icon} 
        pull="right"
      />
      <InputText 
        {...otherProps} 
      /> 
    </ContainerInput>
    <ErrorMessage>{errorMessage}</ErrorMessage> 
    </>
  );
}
export default InputLogon;