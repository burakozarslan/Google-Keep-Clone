import styled from "styled-components";

export const CardContainer = styled.div`
  width: 238px;
  border-radius: 8px;
  border: 1px solid
    ${(props) =>
      `${props.color !== "#202124" ? props.color : props.theme.color.border}`};

  background-color: ${(props) =>
    `${props.color !== "#202124" ? props.color : props.theme.color.black}`};

  transition: background-color 500ms ease;
`;

export const ImageContainer = styled.div`
  width: 100%;
  max-height: 158px;
  overflow: hidden;
  border-radius: 8px;
`;

export const Image = styled.img`
  max-width: 100%;
  object-fit: cover;
  object-position: center;
`;

export const Body = styled.div`
  width: 100%;
  padding: 1rem;
`;

export const Title = styled.h1`
  font-size: 15px;
  color: ${(props) => props.theme.color.text};
`;

export const Text = styled.p`
  color: ${(props) => props.theme.color.text};
  font-size: 14px;
`;

export const LabelsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 1rem;
`;

export const Label = styled.span`
  padding: 4px 5px;
  color: ${(props) => props.theme.color.text};
  border: 1px solid ${(props) => props.theme.color.border};
  font-size: 11px;
  border-radius: 8px;

  &:not(:first-child) {
    margin-left: 5px;
  }
`;
