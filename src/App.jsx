import React from "react";
import "./App.css";
import Content from "./layout/Content";
import Header from "./layout/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Content />
      </div>
    </div>
  );
}

export default App;
