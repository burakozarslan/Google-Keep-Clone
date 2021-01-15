import React, { useState, useEffect, createRef } from "react";

import { ImCross } from "react-icons/im";
import { BsCheck } from "react-icons/bs";
import { GiTrashCan } from "react-icons/gi";

import Popup from "../shared/Popup";

import {
  ModalWrapper,
  ModalContainer,
  Title,
  InputContainer,
  Input,
  LabelsContainer,
  LabelContainer,
  LabelInput,
  Button,
} from "./style";

import { useDispatch } from "react-redux";
import { updateLabel } from "../../redux/actions/labelAction";
import { addLabel } from "../../redux/actions/labelAction";
import { deleteLabel } from "../../redux/actions/labelAction";

const Modal = ({ labels, setModal }) => {
  const [refs, setRefs] = useState([]);
  const dispatch = useDispatch();
  const newLabelRef = createRef();

  const handleLabelUpdate = (value, id) => {
    dispatch(updateLabel(value, id));
  };

  const handleAddLabel = (value) => {
    dispatch(addLabel(value));
    newLabelRef.current.value = "";
  };

  useEffect(() => {
    setRefs((refs) =>
      Array(labels.length)
        .fill()
        .map((_, i) => refs[i] || createRef())
    );
  }, [labels]);

  return (
    <ModalWrapper>
      <ModalContainer>
        <Title>Edit Labels</Title>
        <InputContainer>
          <Popup labelText="Clear" padding={5} fontSize={14}>
            <ImCross
              onClick={() => {
                newLabelRef.current.value = "";
              }}
            />
          </Popup>
          <Input
            ref={newLabelRef}
            type="text"
            placeholder="Create new label"
            onKeyDown={function (e) {
              if (e.key === "Enter") {
                handleAddLabel(e.target.value);
              }
            }}
          />
          <Popup labelText="Add" padding={5} fontSize={20}>
            <BsCheck
              onClick={() => handleAddLabel(newLabelRef.current.value)}
            />
          </Popup>
        </InputContainer>
        <LabelsContainer>
          {labels &&
            labels.map((label, index) => {
              return (
                <LabelContainer key={label._id}>
                  <Popup labelText="Delete" padding={5} fontSize={17}>
                    <GiTrashCan
                      onClick={() => dispatch(deleteLabel(label._id))}
                    />
                  </Popup>
                  <LabelInput
                    type="text"
                    placeholder={label.title}
                    ref={refs[index]}
                    // id={index}
                    onKeyDown={function (e) {
                      if (e.key === "Enter") {
                        handleLabelUpdate(e.target.value, label._id);
                      }
                    }}
                  />
                  <Popup labelText="Save" padding={5} fontSize={14}>
                    <BsCheck
                      onClick={(e) => {
                        handleLabelUpdate(refs[index].current.value, label._id);
                        console.log(refs[index].current.value);
                      }}
                    />
                  </Popup>
                </LabelContainer>
              );
            })}
        </LabelsContainer>
        <Button onClick={() => setModal(false)}>Done</Button>
      </ModalContainer>
    </ModalWrapper>
  );
};

export default Modal;
