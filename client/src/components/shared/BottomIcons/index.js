import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { BiPalette } from "react-icons/bi";
import { BsFillImageFill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { GiTrashCan } from "react-icons/gi";

import {
  BottomIconsContainer,
  Palette,
  ColorsContainer,
  ColorContainer,
  LabelPopupContainer,
  LabelPopupTitle,
  LabelPopupCheckboxGroup,
} from "./style";
import Popup from "../Popup";

import { updateNote, deleteNote } from "../../../redux/actions/noteAction";

import colors from "../../../constants";

const BottomIcons = ({
  width,
  setFormColor,
  setFormFile,
  formLabels,
  setFormLabels,
  cardId,
  isCard,
  cardLabels,
}) => {
  const fileRef = useRef();
  const dispatch = useDispatch();
  const { labels } = useSelector((state) => state.label);

  const handleColorChange = (colorCode) => {
    if (typeof setFormColor === "function") setFormColor(colorCode);
    else dispatch(updateNote({ color: colorCode }, cardId));
  };

  const handleFileUpload = (file) => {
    if (typeof setFormFile === "function") setFormFile(file);
    else dispatch(updateNote({ image: file }, cardId));
  };

  const handleDelete = () => {
    dispatch(deleteNote(cardId));
  };

  const handleCheckBoxChange = (e) => {
    if (typeof setFormLabels === "function") {
      let formLabelsToUpdate = [...formLabels];

      if (e.target.checked) {
        formLabelsToUpdate.push(e.target.id);
        setFormLabels(formLabelsToUpdate);
      } else {
        const index = formLabelsToUpdate.indexOf(e.target.id);
        formLabelsToUpdate.splice(index, 1);
      }
    } else {
      let currentLabels = cardLabels.map((cardLabel) => cardLabel.labelId._id);

      if (e.target.checked) {
        currentLabels.push(e.target.id);
      } else {
        const index = currentLabels.indexOf(e.target.id);
        currentLabels.splice(index, 1);
      }

      dispatch(updateNote({ labelsTemp: currentLabels }, cardId));
    }
  };

  return (
    <BottomIconsContainer width={width}>
      <input
        ref={fileRef}
        onChange={(e) => handleFileUpload(e.target.files[0])}
        type="file"
        name="file"
        style={{ display: "none" }}
      />
      <Popup padding={8} fontSize={18} labelText="Add Image">
        <BsFillImageFill onClick={() => fileRef.current.click()} />
      </Popup>
      <Palette padding={8} fontSize={18} labelText="Change Color">
        <BiPalette />
        <ColorsContainer>
          {colors.map((color, index) => {
            return (
              <ColorContainer
                key={index}
                color={color.code}
                onClick={() => handleColorChange(color.code)}
              />
            );
          })}
        </ColorsContainer>
      </Palette>
      <Popup padding={8} fontSize={18} labelText="Change Labels">
        <LabelPopupContainer>
          <LabelPopupTitle>Change Labels</LabelPopupTitle>
          <LabelPopupCheckboxGroup>
            {labels &&
              labels.map((label, index) => {
                return (
                  <div key={index}>
                    <input
                      key={label._id}
                      type="checkbox"
                      id={label._id}
                      name={label.title}
                      value={label.title}
                      onChange={(e) => handleCheckBoxChange(e)}
                      checked={
                        cardLabels &&
                        cardLabels
                          .map((cardLabel) => cardLabel.labelId._id)
                          .includes(label._id)
                      }
                    />
                    <label htmlFor={label.title}> {label.title}</label>
                  </div>
                );
              })}
          </LabelPopupCheckboxGroup>
        </LabelPopupContainer>
        <AiOutlinePlus />
      </Popup>
      {isCard && (
        <Popup padding={8} fontSize={18} labelText="Delete Note">
          <GiTrashCan onClick={() => handleDelete()} />
        </Popup>
      )}
    </BottomIconsContainer>
  );
};

export default BottomIcons;
