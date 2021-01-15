import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";

import { GiPin } from "react-icons/gi";
import Popup from "../../../components/shared/Popup";
import BottomIcons from "../../shared/BottomIcons";
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

import { addNote } from "../../../redux/actions/noteAction";

import colors from "../../../constants";

const NoteForm = () => {
  const [pinned, setPinned] = useState(false);
  const [formColor, setFormColor] = useState(colors[0].code);
  const [file, setFile] = useState(null);
  const [labels, setLabels] = useState([]);
  const dispatch = useDispatch();

  const titleRef = useRef();
  const contentRef = useRef();

  const resetForm = () => {
    setPinned(false);
    setFormColor(colors[0].code);
    setFile(null);
    titleRef.current.value = "";
    contentRef.current.value = "";
  };

  const handleDispatch = () => {
    const data = {
      title: titleRef.current.value,
      content: contentRef.current.value,
      pinned,
      color: formColor,
      image: file,
      labelsTemp: labels,
    };

    dispatch(addNote(data));

    resetForm();
  };

  return (
    <FormContainer color={formColor}>
      <TopContainer>
        <TitleInput
          color={formColor}
          ref={titleRef}
          placeholder="Title"
          type="text"
        />
        <Popup padding={8} fontSize={20} labelText="Pin">
          <GiPin
            onClick={() => setPinned(!pinned)}
            style={{ color: `${pinned ? `red` : ""}` }}
          />
        </Popup>
      </TopContainer>
      <MidContainer>
        <TextArea
          color={formColor}
          ref={contentRef}
          rows="1"
          placeholder="Take a note..."
          type="text"
        />
      </MidContainer>
      <BottomContainer>
        <BottomIcons
          width={25}
          setFormColor={setFormColor}
          setFormFile={setFile}
          formLabels={labels}
          setFormLabels={setLabels}
        />
        <ButtonsContainer>
          <Button color={formColor} onClick={() => handleDispatch()}>
            Save
          </Button>
          <Button color={formColor} onClick={() => resetForm()}>
            Clear
          </Button>
        </ButtonsContainer>
      </BottomContainer>
    </FormContainer>
  );
};

export default NoteForm;
