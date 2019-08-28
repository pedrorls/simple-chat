import React from "react";
import "./App.css";
import { Sidebar, MessagesList, AddMessage } from "./components";

function App() {
  return (
    <div id="container">
      <Sidebar />
      <section id="main">
        <MessagesList />
        <AddMessage />
      </section>
    </div>
  );
}

export default App;
