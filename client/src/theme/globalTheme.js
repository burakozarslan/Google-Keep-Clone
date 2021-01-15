import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  color: {
    black: "#202124",
    bgHover: "#28292c",
    text: "#e8eaed",
    border: "#5f6368",
    icon: "#9aa0a6",
    iconHover: "#303235",
    active: "#41331c",
    modalBg: "#313235",
    button: "#5b2245",
  },
};

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
