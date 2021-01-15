import styled from "styled-components";

export const NoteBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 44px;
  width: 100%;
  padding-right: 2rem;
  padding-left: 1rem;
`;

export const Input = styled.input`
  background-color: ${(props) => props.theme.color.black};
  color: ${(props) => props.theme.color.text};
  height: 100%;
  flex: 1;
  border: none;
  font-size: 15px;
`;

export const IconContainer = styled.div`
  position: relative;
  display: flex;
  color: ${(props) => props.theme.color.icon};
  font-size: 1.25rem;
  cursor: pointer;
  border-radius: 50%;
  padding: 12px;

  &:hover {
    background-color: ${(props) => props.theme.color.iconHover};
  }

  &:hover > div {
    opacity: 1;
  }
`;

export const Popup = styled.div`
  position: absolute;
  background-color: ${(props) => props.theme.color.iconHover};
  font-size: 12px;
  color: ${(props) => props.theme.color.text};
  font-family: "Roboto", sans-serif;
  top: 100%;
  white-space: nowrap;
  left: -8px;
  padding: 8px;
  border-radius: 8px;
  opacity: 0;
`;
