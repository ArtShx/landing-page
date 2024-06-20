import Header from './Header';
import ProjectGroup from './Projects';
import { Skills } from './Skills';
import Experience from './Experience';
import Education from './Education';
import ContactMe from './Contact';

function App() {
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
