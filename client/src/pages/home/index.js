import React, { useState } from "react";
import { useSelector } from "react-redux";
import Banner from "react-js-banner";

import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import InputBar from "../../components/InputBar";
import Main from "../../components/Main";
import Modal from "../../components/Modal";

import { AppContainer, BottomContainer, ContentContainer } from "./style";

const Home = () => {
  const [modal, setModal] = useState(false);
  const labelState = useSelector((state) => state.label);
  const noteState = useSelector((state) => state.note);

  return (
    <AppContainer>
      {modal && <Modal labels={labelState.labels} setModal={setModal} />}
      {labelState.error && <Banner title={labelState.error} />}
      {noteState.error && <Banner title={noteState.error} />}
      <Header />
      <BottomContainer>
        <Sidebar setModal={setModal} />
        <ContentContainer>
          <InputBar />
          <Main />
        </ContentContainer>
      </BottomContainer>
    </AppContainer>
  );
};

export default Home;
