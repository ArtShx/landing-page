import { Period } from "./../Utils";
import { S3 } from '../data/aws';

const FATEC_LOGO = S3.url() + 'fatec.jpg'
const CLARETIANO_LOGO = S3.url() + 'claretiano.jpeg'

interface IEducation {
  school_name: string,
  course_name: string,
  period: Period,
  photo: string
}

const educations: Array<IEducation> = [{
  school_name: "Fatec",
  course_name: "Business Informatics",
  period: new Period(
    new Date(2016, 8),
    new Date(2019,7)
  ),
  photo: FATEC_LOGO
}, {
  school_name: "Claretiano University Center",
  course_name: "Systems Analysis and Development",
  period: new Period(
    new Date(2016, 8),
    new Date(2019,7)
  ),
  photo: CLARETIANO_LOGO
}];

function Course(course: IEducation) {
  return (
      <div key={course.course_name} className="mx-auto max-w-xl mt-4 flex gap-6 border border-black/5 rounded-lg pt-4 pb-7 px-5 md:p-10 bg-gray-100 dark:bg-white/10 dark:hover:bg-white/20">
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
      <h2 className="text-3xl font-medium capitalize mb-8 text-center">My Education</h2>
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
