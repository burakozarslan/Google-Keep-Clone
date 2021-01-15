import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const FormContainer = styled.div`
  text-align: center;
  width: 500px;
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: ${(props) => props.theme.color.text};
`;

export const Form = styled.form`
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  height: 3rem;
  border: none;
  border-radius: 10px;
  padding: 5px;
  font-size: 1.7rem;
  color: ${(props) => props.theme.color.black};
  box-shadow: 2px 2px 2px 2px ${(props) => props.theme.color.button};
`;

export const Button = styled.button`
  width: 100%;
  height: 3rem;
  margin-top: 1rem;
  cursor: pointer;
  background: ${(props) => props.theme.color.button};
  border: none;
  font-weight: bold;
  font-size: 1.67rem;
  color: ${(props) => props.theme.color.text};
`;

export const Message = styled.p`
  color: ${(props) => props.theme.color.text};
  margin-top: 16px;
`;

export const Error = styled.p`
  color: red;
  margin-top: 4px;
`;
