import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const SUITCASE_LOGO = process.env.PUBLIC_URL + '/suitecase.png'

interface IJobDate {
  start_date: Date,
  end_date?: Date,
  currently_working: boolean
}

interface IJob {
  title: string,
  description: string
  company: string
  period: IJobDate,
}

function parsePeriod(period: IJobDate, is_left: boolean) {
  let monthNumberToString = new Map();
  monthNumberToString.set(1, "January");
  monthNumberToString.set(2, "February");
  monthNumberToString.set(3, "March");
  monthNumberToString.set(4, "April");
  monthNumberToString.set(5, "May");
  monthNumberToString.set(6, "June");
  monthNumberToString.set(7, "July");
  monthNumberToString.set(8, "August");
  monthNumberToString.set(9, "September");
  monthNumberToString.set(10, "October");
  monthNumberToString.set(11, "November");
  monthNumberToString.set(12, "December");

  let start = monthNumberToString.get(period.start_date.getMonth()) + " " + period.start_date.getFullYear();
  let end = period.currently_working ? "Present" : monthNumberToString.get(period.end_date?.getMonth()) + " " + period.end_date?.getFullYear();

  let date_style: React.CSSProperties = {
    width: "100%",
    left: is_left ? "124%" : "auto",
    top: "6px",
    right: is_left ? "auto" : "124%"
  };

  let end_date: Date = period.end_date ? period.end_date : new Date();
  let difference = getDifferenceInYearsAndMonths(period.start_date, end_date);
  return <span className="text-sm static lg:absolute text-gray-500" style={date_style}>{start} - {end} ({difference}) </span>
}

function getDifferenceInYearsAndMonths(startDate: Date, endDate: Date): string {
    let startYear = startDate.getFullYear();
    let startMonth = startDate.getMonth();
    let endYear = endDate.getFullYear();
    let endMonth = endDate.getMonth();

    let yearDiff = endYear - startYear;
    let monthDiff = endMonth - startMonth;

    if (monthDiff < 0) {
        yearDiff--;
        monthDiff += 12;
    }

    if (yearDiff > 0) {
        return `${yearDiff} year${yearDiff > 1 ? 's' : ''} and ${monthDiff} month${monthDiff > 1 ? 's' : ''}`;
    } else {
        return `${monthDiff} month${monthDiff > 1 ? 's' : ''}`;
    }
}

function Job({ job, index }: { job: IJob, index: number }) {
  return (
      <VerticalTimelineElement
        className="vertical-timeline-element--work shadow-none "
        contentArrowStyle={{ borderRight: '7px solid  rgb(200, 200, 200)' }}
        icon=<img src={SUITCASE_LOGO} />
        iconClassName="bg-white"
        position={index % 2 == 0 ? 'left' : 'right' }>

        <div className=" !ml-0 p-8" style={{background: "#f3f4f6", boxShadow: "none", border: "1px solid rgba(0, 0, 0, 0.05)"}}>

          <h5 className="vertical-timeline-element-title font-semibold">{ job.title }</h5>
          <h6 className="vertical-timeline-element-subtitle">{ job.company } &emsp;&emsp;&emsp; { parsePeriod(job.period, index % 2 == 0) }</h6>
                  

          <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">{ job.description }</p>
        </div>
      </VerticalTimelineElement>
  )
}

const jobs: Array<IJob> = [{
  title: "Computer Vision Engineer",
  description: "Did x, y and z. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  company: "Pix Force",
  period: {
    start_date: new Date(2023, 2),
    end_date: new Date(2024, 5),
    currently_working: true
  }
}, {
  title: "Software Engineer",
  description: "Did x, y and z.",
  company: "iSPORTiSTiCS",
  period: {
    start_date: new Date(2019, 2),
    end_date: new Date(2023, 5),
    currently_working: false
  }

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
                  <Job job={job} index={index} />
              )
            })
          }
      </VerticalTimeline>
    </section>
  )

}

export default Experience;
