import data from './../data/skills.json'
import { S3 } from '../data/aws';


export let my_skills = new Map<string, ISkill>();
data.map((skill) => {
  my_skills.set(skill.key, {
    name: skill.name,
    logo: S3.url() + skill.logo
  });
});


export interface ISkill {
  name: string,
  logo?: string
};

export function Skills() {
  return (
    <section id="skills" className="mb-28 max-w-[58rem] scroll-mt-28 text-center sm:mb-40 mx-auto">
      <h2 className="text-3xl font-medium capitalize mb-8">My Skills</h2>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
      {
        Array.from(my_skills.entries()).map(([key, value]) => {
          return (
            <li key={key} className="flex flex-col items-center px-4 py-3 dark:text-white/80">
              <img src={value.logo} alt={value.name} className="h-24 text-5xl md:text-7xl iconify iconify--logos hover:scale-125" />
              <span className="mt-2">{value.name}</span>
            </li>
          )
        })
      }
      </ul>
    </section>
  )
}


