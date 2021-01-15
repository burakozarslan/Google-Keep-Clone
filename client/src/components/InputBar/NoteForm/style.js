import styled from "styled-components";

export const FormContainer = styled.div`
  width: 100%;
  padding: 0.5rem 1rem;
  background-color: ${(props) => props.color || props.theme.color.black};
  border-radius: 8px;
  transition: background-color 500ms ease;
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const TitleInput = styled.input`
  flex: 1;
  font-size: 15px;
  letter-spacing: 0.5px;
  color: ${(props) => props.theme.color.text};
  height: 100%;
  border: none;
  background-color: ${(props) => props.color || props.theme.color.black};
  transition: background-color 500ms ease;
`;

export const MidContainer = styled.div`
  width: 100%;
`;

export const TextArea = styled.textarea`
  color: ${(props) => props.theme.color.text};
  background-color: ${(props) => props.color || props.theme.color.black};
  width: 100%;
  resize: none;
  border: none;
  font-size: 14px;
  margin-top: 1rem;
  transition: background-color 500ms ease;

  &:focus {
    border: none;
  }
`;

export const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  background-color: ${(props) => props.color || props.theme.color.black};
  color: ${(props) => props.theme.color.text};
  font-size: 14px;
  border-radius: 5px;
  margin-right: 5px;

  &:hover {
    background-color: ${(props) => props.theme.color.bgHover};
    cursor: pointer;
  }
`;
