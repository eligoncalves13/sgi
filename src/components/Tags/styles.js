import styled from 'styled-components';

export const ContainerTags = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ContainerInputTags = styled.div`
  border: 1px solid #d9e1ea;
  border-radius: 3px;
  box-sizing: border-box;
  color: #53575D;
  cursor: pointer;
  font-family: 'Raleway', sans-serif;
  min-height: 30px;
  padding: 0 5px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  &:focus {
    border-color: #0d6ef7; 
}
`;

export const DescriptionTags = styled.label`
  font-family: 'Raleway', sans-serif;
  font-size: 14px;
  font-weight: bold;
  margin: 10px 0;
`;

export const ListTags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 5px 0 0 0;
`

export const ListTagsItems = styled.li`
  background: #0052cc;
  border-radius: 3px;
  color: #fff;
  font-size: 14px;
  list-style: none;
  margin: 0 5px 5px 0;
  padding: 5px;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SpanTags = styled.span`

`
export const SpanIcon = styled.span`
  background: #fff;
  border-radius: 50%;
  color: #0052cc;
  cursor: pointer;
  font-size: 14px;
  line-height: 16px;
  margin-left: 8px;
  text-align: center;
  width: 16px;
  height: 16px;
  display: block;
`

export const InputTags = styled.input`
  border: none;
  font-family: 'Raleway', sans-serif;
  font-size: 14px;
  outline: none;
  width: 100%;
  flex: 1;
`

