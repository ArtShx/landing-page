import { Period } from "./Utils";
import { monthNumberToString } from "./Utils";

const FATEC_LOGO = process.env.PUBLIC_URL + '/fatec.png'

interface IEducation {
  school_name: string,
  course_name: string,
  period: Period,
  photo: string
}

const educations: Array<IEducation> = [{
  school_name: "Fatec",
  course_name: "Informatics for business",
  period: new Period(
    new Date(2016, 8),
    new Date(2019,7)
  ),
  photo: FATEC_LOGO
}, {
  school_name: "Claretiano",
  course_name: "ADS",
  period: new Period(
    new Date(2016, 8),
    new Date(2019,7)
  ),
  photo: ""
}];


function parsePeriod(period: Period, is_left: boolean) {

  let start = monthNumberToString(period.start_date.getMonth()) + " " + period.start_date.getFullYear();
  let end = period.ongoing ? "Present" : monthNumberToString(period.end_date?.getMonth()) + " " + period.end_date?.getFullYear();
  console.log(end);

  let date_style: React.CSSProperties = {
    width: "100%",
    left: is_left ? "124%" : "auto",
    top: "6px",
    right: is_left ? "auto" : "124%"
  };

  return <span className="" >{start} - {end} </span>
}

function Course(course: IEducation) {
  return (
      <div className="mx-auto max-w-xl mt-4 flex gap-6 border border-black/5 rounded-lg pt-4 pb-7 px-5 md:p-10 bg-gray-100 dark:bg-white/10 dark:hover:bg-white/20">
        <div>
          <img src={ course.photo } className="" width="150" height="150" />
        </div>
        <div className="">
          <h5 className="text-lg font-medium">{ course.course_name }</h5>
          <h6>{ course.school_name }</h6>
          <p>Graduated in { course.period.end_date?.getFullYear() }</p>
        </div>
      </div>
  )
}

function Education() {
  return (
    <section id="education" className="mt-20 scroll-mt-28 mb-28">
      <h2 className="text-3xl font-medium capitalize mb-8 text-center">My Experience</h2>
      <div className="">
        {
          educations.map((course) => {
            return Course(course);
          })
        }
      </div>

    </section>
  )
}

export default Education;
