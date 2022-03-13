import React, { useState } from 'react';
//Styles
import { 
    ContainerTags, 
    ListTags, 
    ListTagsItems, 
    SpanTags, 
    SpanIcon, 
    InputTags, 
    DescriptionTags, 
    ContainerInputTags 
} from './styles';

const Tags = ({label, style, selectedTags, ...otherProps}) => {
    const [tags, setTags] = useState([])

    const addTags = (event) => {
        if (event.key === "Enter" && event.target.value !== "") {
            setTags([...tags, event.target.value]);
            selectedTags([...tags, event.target.value]);
            event.target.value = "";
        }
    }

    const removeTags = (index) => {
        setTags([...tags.filter(tag => tags.indexOf(tag) !== index)]);
    }

    return (
        <ContainerTags>
        <DescriptionTags>{label}</DescriptionTags>
        <ContainerInputTags style={style}>
            <ListTags>
                {tags.map((tag, index) => (
                <ListTagsItems key={index}>
                    <SpanTags>
                        {tag}
                    </SpanTags>
                    <SpanIcon onClick={() => removeTags(index)}>x</SpanIcon>
                </ListTagsItems>
                ))}
            </ListTags>
            <InputTags onKeyUp={event => addTags(event)} type="text" placeholder='Pressione enter para adicionar'>
            </InputTags>
        </ContainerInputTags>
        </ContainerTags>
    )
}

export default Tags;