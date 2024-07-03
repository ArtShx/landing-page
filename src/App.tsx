import ReactGA from 'react-ga4';

import Header from './components/Header';
import ProjectGroup from './components/Projects';
import { Skills } from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import ContactMe from './components/Contact';

function App() {
  ReactGA.initialize(process.env.REACT_APP_GA_ID ?? "", {
    testMode: false
  });
  ReactGA.send({ hitType: "pageview", page: "/", title: "Home" });

  return (
    <div className="App bg-gray-50 text-gray-950 relative dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90">
      <Header />
      <div className="mx-auto">
        <ProjectGroup />
        <Skills />
        <Experience />
        <Education />
        <ContactMe />
      </div>
    </div>
  );
}

export default App;
