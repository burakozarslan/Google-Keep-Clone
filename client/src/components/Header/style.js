import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 1rem;
  height: 64px;
  border-bottom: 1px solid ${(props) => props.theme.color.border};
  background-color: ${(props) => props.theme.color.black};
  z-index: 999999;
  color: white;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  width: 2.45rem;
`;

export const LogoText = styled.h1`
  font-size: 1.45rem;
  margin-left: 0.5rem;
  color: ${(props) => props.theme.color.text};
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoutButton = styled.button`
  border: none;
  border-radius: 8px;
  cursor: pointer;
  padding: 0.5rem;
  background-color: ${(props) => props.theme.color.button};
  color: ${(props) => props.theme.color.text};
  margin-left: 1rem;
`;

export const UserInfo = styled.p`
  font-size: 0.85rem;
  font-weight: bold;
  margin-left: 1rem;
  min-width: 200px;
`;
