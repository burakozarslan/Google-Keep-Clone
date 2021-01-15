import styled from "styled-components";

export const MainContainer = styled.main`
  width: 100%;
`;

export const SectionContainer = styled.section`
  width: 100%;
  margin-top: 4rem;
  padding-bottom: 4rem;
`;

export const Title = styled.h2`
  font-size: 10px;
  color: ${(props) => props.theme.color.icon};
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 240px);
  grid-gap: 10px;
  align-items: start;
`;
