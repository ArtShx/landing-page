import React from 'react';
import logo from './logo.svg';
import Header from './Header';
import ProjectGroup from './Projects';
import { Skills } from './Skills';
import Experience from './Experience';

function App() {
  return (
    <div className="App bg-white dark:bg-black font-mono">
      <Header />
      <div className="mx-auto">
        <ProjectGroup />
        <Skills />
        <Experience />
      </div>
    </div>
  );
}

export default App;
