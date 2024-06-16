import React from 'react';
import logo from './logo.svg';
import Header from './Header';
import ProjectGroup from './Projects';

function App() {
  return (
    <div className="App bg-white dark:bg-black font-mono">
      <Header />
      <ProjectGroup />
    </div>
  );
}

export default App;
