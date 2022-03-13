import React from 'react';
//Styles
import { 
    ContainerTextArea, 
    DescriptionTextArea,
    Description
  } from './styles';

const TextArea = ({label, style, ...otherProps}) => {
    return (
      <ContainerTextArea style={style}>
        <DescriptionTextArea>{label}</DescriptionTextArea>
        <Description {...otherProps}/>
      </ContainerTextArea>
    );
}

export default TextArea;
