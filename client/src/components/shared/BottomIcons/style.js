import styled from "styled-components";

export const BottomIconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${(props) => `${props.width}%`};
  background: transparent;
`;

export const Palette = styled.div`
  display: flex;
  position: relative;
  /* background-color: ${(props) => props.theme.color.black}; */
  background-color: transparent;
  color: ${(props) => props.theme.color.icon};
  padding: ${(props) => `${props.padding}px`};
  font-size: ${(props) => `${props.fontSize}px`};
  cursor: pointer;
  border-radius: 50%;

  &:hover {
    background-color: ${(props) => props.theme.color.bgHover};
    color: ${(props) => props.theme.color.text};
  }

  &:hover > div {
    display: grid;
  }
`;

export const ColorsContainer = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 5px;
  padding: 5px;
  width: 130px;
  background-color: rgba(0, 0, 0, 0.4);
  display: none;
  top: -275%;
  left: 8px;
  z-index: 2;
`;

export const ColorContainer = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

export const LabelPopupContainer = styled.div`
  position: absolute;
  top: 1.7rem;
  left: 1.7rem;
  width: 225px;
  height: 200px;
  padding: 1rem;
  background: ${(props) => props.theme.color.modalBg};
  display: none;
  z-index: 999;
`;

export const LabelPopupTitle = styled.h2`
  color: ${(props) => props.theme.color.text};
  font-size: 15px;
`;

export const LabelPopupCheckboxGroup = styled.div`
  margin-top: 1rem;
  pointer-events: auto;
  font-size: 15px;
`;
