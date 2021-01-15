import React from "react";
import env from "../../env.json";

import BottomIcons from "../shared/BottomIcons";
import {
  CardContainer,
  ImageContainer,
  Image,
  Title,
  Body,
  Text,
  LabelsContainer,
  Label,
} from "./style";

const Card = ({ id, title, content, image, labels, color }) => {
  return (
    <CardContainer color={color}>
      {image && (
        <ImageContainer>
          <Image src={`${env.BASE_URL}/images/${image}`} />
        </ImageContainer>
      )}
      <Body>
        <Title>{title}</Title>
        <Text>{content}</Text>
        <LabelsContainer>
          {labels &&
            labels.slice(0, 2).map((label) => {
              return (
                <Label key={label.labelId._id}>{label.labelId.title}</Label>
              );
            })}
          {labels && labels.length > 2 && <Label>+{labels.length - 2}</Label>}
        </LabelsContainer>
      </Body>
      <BottomIcons width={20} cardId={id} cardLabels={labels} isCard />
    </CardContainer>
  );
};

export default Card;
