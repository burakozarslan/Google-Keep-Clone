import styled from "styled-components";

export const SidebarContainer = styled.div`
  position: fixed;
  top: 64px;
  left: 0;
  bottom: 0;
  width: 280px;
  height: calc(100vh - 64px);
  overflow-y: auto;
`;

export const Menu = styled.ul`
  list-style: none;
  margin-top: 10px;
`;

export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 700;
  padding: 0.65rem 1.5rem;
  border-bottom-right-radius: 25px;
  border-top-right-radius: 25px;
  background-color: ${(props) =>
    props.active ? props.theme.color.active : ``};
  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      props.active ? props.theme.color.active : props.theme.color.bgHover};
  }
`;

export const Icon = styled.div`
  font-size: 1.55rem;
  color: ${(props) => (props.active ? `#fff` : props.theme.color.icon)};
`;

export const Label = styled.span`
  font-size: 0.875rem;
  color: ${(props) => props.theme.color.text};
  margin-left: 2rem;
  font-weight: 500;
  letter-spacing: 0.5px;
`;

export const ModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: black;
  z-index: 999999;
`;

export const ModalContainer = styled.div``;
