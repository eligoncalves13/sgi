import React from 'react';
//Styles
import { 
    ContainerTextArea, 
    DescriptionTextArea,
    Description
  } from './styles';

function TextArea({label, style, ...otherProps}) {
  return (
        <ContainerTextArea style={style}>
            <DescriptionTextArea>{label}</DescriptionTextArea>
            <Description {...otherProps}/>
        </ContainerTextArea>
  );
}

export default TextArea;
