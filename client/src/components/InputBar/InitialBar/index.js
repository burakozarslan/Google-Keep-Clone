import React from "react";
import { FaRegCheckSquare } from "react-icons/fa";

import { NoteBarContainer, Input, IconContainer, Popup } from "./style";

const InitialBar = () => {
  return (
    <NoteBarContainer>
      <Input type="text" placeholder="Take a note..." />
      <IconContainer>
        <FaRegCheckSquare />
        <Popup>New List</Popup>
      </IconContainer>
    </NoteBarContainer>
  );
};

export default InitialBar;
