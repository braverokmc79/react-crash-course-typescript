import { Outlet } from "react-router-dom";
import React, { useState } from "react";
import MainHeader from "../components/MainHeader";
import PostsList from "../components/PostsList";

const RootLayout = () => {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function showModalHandler() {
    setModalIsVisible(true);
  }

  function showModalHandler() {
    setModalIsVisible(true);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>     
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
