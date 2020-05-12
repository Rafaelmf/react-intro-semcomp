import React from 'react';
import './App.css';
import Content from './layout/Content';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>React Bloco de Notas</h1>
      </header>
      <div className="content">
        <Content />
      </div>
    </div>
  );
}

export default App;
