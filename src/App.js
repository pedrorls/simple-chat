import React from "react";
import "./App.css";
import {
  AddMessageContainer,
  SidebarContainer,
  MessagesListContainer
} from "./containers";

function App() {
  return (
    <div id="container">
      <SidebarContainer />
      <section id="main">
        <MessagesListContainer />
        <AddMessageContainer />
      </section>
    </div>
  );
}

export default App;
