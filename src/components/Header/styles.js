import styled from 'styled-components';

export const ContainerHeader = styled.header`
    background-color: #FAFAFA;
    box-sizing: border-box;
    color: #000000;
    font-family: 'Poppins', sans-serif; 
    font-size: 26px; 
    font-weight: 700;
    padding-left: 30px;
    width: 100%;

    grid-area: header;

    display: flex;
    align-items: center;
    
    @media only screen and (max-width: 800px){
        padding-left: 70px;
    }
`;
