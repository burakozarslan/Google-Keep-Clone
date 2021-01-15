import React from "react";

import { PopupContainer, LabelContainer } from "./style";

const Popup = ({ children, padding, fontSize, labelText }) => {
  return (
    <PopupContainer padding={padding} fontSize={fontSize}>
      {children}
      <LabelContainer padding={padding}>{labelText}</LabelContainer>
    </PopupContainer>
  );
};

export default Popup;
