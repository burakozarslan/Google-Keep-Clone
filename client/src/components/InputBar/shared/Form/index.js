import React from "react";

import { GiPin } from "react-icons/gi";
import Popup from "../../../../components/shared/Popup";
import BottomIcons from "../../../shared/BottomIcons";
import {
  FormContainer,
  TopContainer,
  TitleInput,
  MidContainer,
  TextArea,
  BottomContainer,
  ButtonsContainer,
  Button,
} from "./style";

const Form = () => {
  return (
    <FormContainer>
      <TopContainer>
        <TitleInput placeholder="Title" type="text" />
        <Popup padding={8} fontSize={20} labelText="Pin">
          <GiPin />
        </Popup>
      </TopContainer>
      <MidContainer>
        <TextArea rows="1" placeholder="Take a note..." type="text" />
      </MidContainer>
      <BottomContainer>
        <BottomIcons width={25} />
        <ButtonsContainer>
          <Button>Save</Button>
          <Button>Close</Button>
        </ButtonsContainer>
      </BottomContainer>
    </FormContainer>
  );
};

export default Form;
