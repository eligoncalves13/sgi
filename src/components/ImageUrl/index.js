import React from 'react';
//Styles
import { 
  ContainerImageUrl, 
  Image } 
from './styles';

const ImageUrl = ({url, title}) => {
  return (
      <ContainerImageUrl>
          <Image 
            src={url}
            alt={title}/>
      </ContainerImageUrl>
  );
}

export default ImageUrl;