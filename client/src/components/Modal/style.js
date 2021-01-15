import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  color: #fff;
  z-index: 999999;
`;

export const ModalContainer = styled.div`
  width: 300px;
  background-color: ${(props) => props.theme.color.modalBg};
  padding: 1rem;
  border-radius: 5px;
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.color.text};
  font-size: 15px;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
`;

export const Input = styled.input`
  background-color: ${(props) => props.theme.color.modalBg};
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.color.border};
  padding-bottom: 3px;
  padding-left: 3px;
  color: ${(props) => props.theme.color.text};
  font-size: 15px;
`;

export const LabelsContainer = styled.div`
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.color.border};
  padding-bottom: 1rem;
`;

export const LabelContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`;

export const LabelInput = styled.input`
  border: none;
  background-color: ${(props) => props.theme.color.modalBg};
  color: ${(props) => props.theme.color.text};
  font-size: 14px;
`;

export const Button = styled.button`
  border: none;
  margin-top: 2rem;
  float: right;
  background-color: ${(props) => props.theme.color.modalBg};
  color: ${(props) => props.theme.color.text};
  padding: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.color.border};
  }
`;
