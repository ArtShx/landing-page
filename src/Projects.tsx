import { ISkill, my_skills } from './Skills'

const YT_LOGO = process.env.PUBLIC_URL + '/yt.png'
const GH_LOGO = process.env.PUBLIC_URL + '/gh.png'


interface IProject {
  title: string,
  description: string,
  tools: Array<ISkill>,
  photo: string,
  video?: string,
  github?: string
};


function Tools({ tools }: { tools: ISkill[]}) {
  // Inline tools used for each project
  return (
    <ul className="flex flex-wrap gap-2 mb-3 sm:mt-auto">
      <span className="font-bold text-gray-500 dark:text-white/70 mt-2">Made with: </span>
      {
        tools.map((tool) => {
          if (tool.logo === undefined) { return }
          return (
            <li key={tool.name} className="flex flex-wrap gap-2 mb-3 sm:mt-auto">
              <img src={tool.logo} alt={tool.name} className="h-10 mr-3 text-2xl iconify iconify--logos"></img>
            </li>
          )
        })
      }
    </ul>
  )
}

function Project({ project }: { project: IProject }) {
  return (
    <div className="group mb-3 sm:mb-8 last:mb-0">
      <div className="bg-gray-100 max-w-[58rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative lg:min-h-[21rem] hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20 mx-auto ">
        <div className="pt-4 pb-7 px-5 md:pl-10 md:pr-2 md:pt-10 lg:max-w-[50%] flex flex-col ">

          <h4 className="text-2xl font-semibold mb-4">{project.title}</h4>
          <Tools tools={project.tools}/>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70 mb-3 text-justify">{project.description}</p>
          <div className="m-2 flex">
            {
              project.video ? 
                <a href={project.video} target="_blank" rel="noopener noreferrer" className="flex items-center bg-[#111827] text-white py-2 px-4 mr-2 rounded-full hover:scale-105"><img src={YT_LOGO} className="w-5" />Demo</a> : <></>
            }
            {
              project.github ? 
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center bg-transparent text-gray py-2 px-4 mr-2 rounded-full border-2 border-black hover:scale-105"><img src={GH_LOGO} className="w-5" />Demo</a> : <></>
            }
          </div>
        </div>
        <img className="absolute hidden lg:block top-[60px] -right-10 w-[28.25rem] rounded-t-lg shadow-2xl scale-[1.0] transition  lg:scale-[1.1] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2" src={project.photo} />
      </div>
  </div>
  )
}

const ProjectGroup = () => {
  let skill_failed: ISkill = {
    name: "Unknown error"
  };

  const projects: IProject[] = [{
    title: "Pix360 - Annotation Tool",
    description: "Wire annotation tool for 3d scene. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    photo: process.env.PUBLIC_URL + "/project-360-2.png",
    tools: [
      my_skills.get("js") ?? skill_failed,
      my_skills.get("three.js") ?? skill_failed
    ],
    video: "www.google.com"
  }, {
    title: "Pix360 - Segmentation",
    description: "Scene segmentation on RGB image",
    photo: process.env.PUBLIC_URL + "/project-360-1.png",
    tools: [my_skills.get("py") ?? skill_failed],
    video: "www.google.com",
    github: "www.github.com"
  }];

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
