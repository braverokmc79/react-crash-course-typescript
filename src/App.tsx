import React, { useState } from "react";

import "./App.css";

import PostsList from "./components/PostsList";
import HeadLog from "./components/HeadLog";
import MainHeader from "./components/MainHeader";

const App: React.FC = () => {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function showModalHandler() {
    setModalIsVisible(true);
  }

  function hideModalHandler() {
    setModalIsVisible(false);
  }

  return (
    <>
    <MainHeader  onCreatePost={showModalHandler} />

     {/* <HeadLog /> */}
      <main>
        <PostsList  
          isPosting={modalIsVisible}
          onStopPosting={hideModalHandler}   />
      </main>
    </>
  );
};

export default App;
