
import {ISkill, my_skills} from './Skills'
import {FaGithub, FaYoutube} from "react-icons/fa";

import data from './../data/projects.json'
import { S3 } from '../data/aws';

interface IProject {
  title: string,
  description: string,
  tools: string[],
  photo: string,
  video?: string,
  github?: string
};


function Tools({tools}: {tools: string[]}) {
  // Inline tools used for each project
  return (
    <ul className="flex flex-wrap gap-2 mb-3 sm:mt-auto">
      <span className="font-bold text-gray-500 dark:text-white/70 mt-2">Made with: </span>
      {
        tools.map((tool) => {
          const skill = my_skills.get(tool); 
          if (skill === undefined) {return }
          const key = skill?.name ?? "notfound";
          return (
            <li key={key} className="flex flex-wrap gap-2 mb-3 sm:mt-auto">
              <img src={skill?.logo} alt={skill?.name} className="h-8 mr-3 text-2xl iconify iconify--logos"></img>
            </li>
          ) })
      }
    </ul>
  )
}

function Project({project}: {project: IProject}) {
  return (
    <div className="mb-3 sm:mb-8 last:mb-0">
      <div className="bg-gray-100 max-w-[58rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative lg:min-h-[21rem] hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20 mx-auto ">
        <div className="group">
          <div className="pt-4 pb-7 px-5 md:pl-10 md:pr-2 md:pt-10 lg:max-w-[50%] flex flex-col ">

            <h4 className="text-2xl font-semibold mb-4">{project.title}</h4>
            <Tools tools={project.tools} />
            <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70 mb-3 text-justify">{project.description}</p>
            <div className="m-2 flex">
              {
                project.video ?
                  <a href={project.video} target="_blank" rel="noopener noreferrer" className="flex items-center bg-[#111827] text-white py-2 px-4 mr-2 rounded-full hover:scale-105"><FaYoutube className='mr-1' />Demo</a> : <></>
              }
              {
                project.github ?
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center bg-transparent text-gray py-2 px-4 mr-2 rounded-full border-2 border-black hover:scale-105"><FaGithub className='mr-1' /> Demo</a> : <></>
              }
            </div>
          </div>
          <img className="absolute hidden lg:block top-[60px] -right-10 w-[28.25rem] rounded-t-lg shadow-2xl scale-[1.0] transition  lg:scale-[1.1] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2" src={S3.url() + project.photo} alt={project.title} />

        </div>
      </div>
    </div>
  )
}

const ProjectGroup = () => {
  let skill_failed: ISkill = {
    name: "Unknown error"
  };

  const projects: IProject[] = data;
  return (
    <section id="projects" className="mt-20 scroll-mt-28 mb-28">
      <h2 className="text-3xl font-medium capitalize mb-8 text-center">My Projects</h2>
      {
        projects.map((proj) => {
          return <Project key={proj.title} project={proj} />
        })
      }
    </section>
  );
};

export default ProjectGroup;

