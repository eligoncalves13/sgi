import React from 'react';
//Styles
import {
  ContainerSelect,
  DescriptionSelect,
  List,
  Option
} from './styles';

const Select = ({style, label, description, options, ...otherProps}) => {
  
  return (
    <ContainerSelect style={style}>
      <DescriptionSelect>{label}</DescriptionSelect>
      <List {...otherProps} selected="">
        <Option disabled value="">{description}</Option>
        {options}
      </List>
    </ContainerSelect>
  );
}
export default Select;