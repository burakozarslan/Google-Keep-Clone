import styled from "styled-components";

export const AppContainer = styled.div`
  width: 100%;
  min-height: 110vh;
  scrollbar-color: ${(props) => props.theme.color.border} #111;
`;

export const BottomContainer = styled.div`
  height: 100vh;
  width: 100%;
  padding-top: 64px;
  padding-left: 280px;
`;

export const ContentContainer = styled.div`
  height: 100%;
  padding: 2rem 4rem;
`;
