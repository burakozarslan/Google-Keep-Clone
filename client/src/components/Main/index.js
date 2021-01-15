import React, { useEffect } from "react";
import Card from "../Card";

import { MainContainer, SectionContainer, Title, Grid } from "./style";

import { useDispatch, useSelector } from "react-redux";
import { fetchNotes } from "../../redux/actions/noteAction";

const Main = () => {
  const dispatch = useDispatch();
  const { notes } = useSelector((state) => state.note);
  const { active } = useSelector((state) => state.tab);

  useEffect(() => {
    dispatch(fetchNotes());
  }, [dispatch]);

  const filterByLabel = (notes) => {
    let filteredNotes = notes;

    if (active !== "Notes") {
      filteredNotes = notes.filter((note) =>
        note.labels.map((label) => label.labelId.title).includes(active)
      );
    }

    return filteredNotes;
  };

  return (
    <MainContainer>
      <SectionContainer>
        <Title>PINNED</Title>
        <Grid>
          {notes &&
            filterByLabel(notes.filter((note) => note.pinned === true)).map(
              (note) => {
                return (
                  <Card
                    key={note._id}
                    id={note._id}
                    title={note.title}
                    content={note.content}
                    image={note.image}
                    labels={note.labels}
                    color={note.color}
                  />
                );
              }
            )}
        </Grid>
      </SectionContainer>
      <SectionContainer>
        <Title>OTHER</Title>
        <Grid>
          {notes &&
            filterByLabel(notes.filter((note) => note.pinned === false)).map(
              (note) => {
                return (
                  <Card
                    key={note._id}
                    id={note._id}
                    title={note.title}
                    content={note.content}
                    image={note.image}
                    labels={note.labels}
                    color={note.color}
                  />
                );
              }
            )}
        </Grid>
      </SectionContainer>
    </MainContainer>
  );
};

export default Main;
