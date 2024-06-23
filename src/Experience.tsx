import {Period, monthNumberToString} from './Utils';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {FaSuitcase} from "react-icons/fa";


interface IJob {
  title: string,
  description: string
  company: string
  period: Period,
}

function parsePeriod(period: Period, is_left: boolean) {

  let start = monthNumberToString(period.start_date.getMonth()) + " " + period.start_date.getFullYear();
  let end = period.ongoing ? "Present" : monthNumberToString(period.end_date?.getMonth()) + " " + period.end_date?.getFullYear();

  let date_style: React.CSSProperties = {
    width: "100%",
    left: is_left ? "124%" : "auto",
    top: "6px",
    right: is_left ? "auto" : "124%"
  };

  let difference = period.getDifferenceInYearsAndMonths();
  return <span className="text-sm static lg:absolute text-gray-500" style={date_style}>{start} - {end} ({difference}) </span>
}


function Job({job, index}: {job: IJob, index: number}) {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work shadow-none "
      contentArrowStyle={{borderRight: '7px solid  rgb(200, 200, 200)'}}
      icon=<FaSuitcase />
      iconClassName="bg-white"
      position={index % 2 === 0 ? 'left' : 'right'}>

      <div className=" !ml-0 p-8" style={{background: "#f3f4f6", boxShadow: "none", border: "1px solid rgba(0, 0, 0, 0.05)"}}>

        <h5 className="vertical-timeline-element-title font-semibold">{job.title}</h5>
        <h6 className="vertical-timeline-element-subtitle">{job.company} &emsp;&emsp;&emsp; {parsePeriod(job.period, index % 2 === 0)}</h6>


        <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">{job.description}</p>
      </div>
    </VerticalTimelineElement>
  )
}

const jobs: Array<IJob> = [{
  title: "Computer Vision Engineer",
  description: "Did x, y and z. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  company: "Pix Force",
  period: new Period(
    new Date(2023, 2),
  )
}, {
  title: "Software Engineer",
  description: "Did x, y and z.",
  company: "iSPORTiSTiCS",
  period: new Period(
    new Date(2019, 2),
    new Date(2023, 5),
  )
}];

function Experience() {
  return (
    <section id="experience" className="mt-20 scroll-mt-28 mb-28">
      <h2 className="text-3xl font-medium capitalize mb-8 text-center ">My Experience</h2>
      <VerticalTimeline
        lineColor='#f3f4f6'
        className='!pt-0'>
        {
          jobs.map((job, index) => {
            return (
              <Job job={job} index={index} key={index} />
            )
          })
        }
      </VerticalTimeline>
    </section>
  )

}

export default Experience;
