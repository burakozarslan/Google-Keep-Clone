import styled from "styled-components";

export const PopupContainer = styled.div`
  display: flex;
  position: relative;
  /* background-color: ${(props) => props.theme.color.black}; */
  background-color: transparent;
  color: ${(props) => props.theme.color.icon};
  padding: ${(props) => `${props.padding}px`};
  font-size: ${(props) => `${props.fontSize}px`};
  cursor: pointer;
  border-radius: 50%;
  /* z-index: 999; */

  &:hover {
    background-color: ${(props) => props.theme.color.bgHover};
    color: ${(props) => props.theme.color.text};
  }

  &:hover > div {
    display: block;
  }
`;

export const LabelContainer = styled.div`
  position: absolute;
  text-align: center;
  bottom: ${(props) => `-${props.padding * 3}px`};
  font-size: 12px;
  background: ${(props) => props.theme.color.bgHover};
  padding: ${(props) => `${props.padding / 2}px`};
  left: 50%;
  transform: translateX(-50%);
  display: none;
  border-radius: 5px;
  white-space: nowrap;
  z-index: 99999;
`;
