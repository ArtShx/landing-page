import ReactGA from 'react-ga';

import Header from './components/Header';
import ProjectGroup from './components/Projects';
import { Skills } from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import ContactMe from './components/Contact';

function App() {
  console.log(process.env)
  ReactGA.initialize(process.env.REACT_APP_GA_ID ?? "", {
    debug: true,
    testMode: true
  });
  ReactGA.pageview(window.location.pathname + window.location.search);

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
