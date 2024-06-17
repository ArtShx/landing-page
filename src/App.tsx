import React from 'react';
import logo from './logo.svg';
import Header from './Header';
import ProjectGroup from './Projects';
import { Skills } from './Skills';

function App() {
  return (
    <div className="App bg-white dark:bg-black font-mono">
      <Header />
      <div className="w-[1000px] mx-auto">
        <ProjectGroup />
        <Skills />
      </div>
    </div>
  );
}

export default App;
