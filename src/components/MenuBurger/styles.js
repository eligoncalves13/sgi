import styled from 'styled-components';

export const ContainerMenuHamburger = styled.div`
  cursor: pointer;
  height: 2rem;
  width: 2rem;
  
  display: none;

  position: ${({ open }) => open ? 'fixed' : 'absolute'};
  top: 19px;
  left: 20px;
  z-index: 20;

@media only screen and (max-width: 800px) {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
}
  div {
    background-color: ${({ open }) => open ? '#ccc' : '#333'};
    border-radius: 10px;
    height: 0.25rem;
    transform-origin: 1px;
    transition: all 0.3s linear;
    width: 2rem;

    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;
