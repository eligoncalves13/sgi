import React from 'react';
//Styles
import {
  ContainerSelect,
  DescriptionSelect,
  List
} from './styles';

function Select({ style, label, options, description, ...otherProps }) {
  
  return (
    <ContainerSelect style={style}>
      <DescriptionSelect>{label}</DescriptionSelect>
      <List {...otherProps} selected="">
        <option disabled value="">{description}</option>
        {options}
      </List>
    </ContainerSelect>
  );
}
export default Select;