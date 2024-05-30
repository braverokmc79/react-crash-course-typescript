import React from "react";

import "./App.css";

import PostsList from "./components/PostsList";
import HeadLog from "./components/HeadLog";

const App: React.FC = () => {
  return (
    <>
     <HeadLog />
     
      <main>
        <PostsList />
      </main>
    </>
  );
};

export default App;
