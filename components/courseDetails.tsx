import {
  ChevronDown,
  CalendarDays,
  Clock,
  BookOpen,
  Globe,
  Laptop2,
} from "lucide-react";

interface CourseDetailsProps {
  courseName: string;
  courseSubtitle: string;
  courseSummary: string;
  objectives: string[];
  studyPace: string;
  courseLength: string;
  startDate: string;
  format: string;
  language: string;
  prerequisites: string[];
}

export const CourseDetails: React.FC<CourseDetailsProps> = ({
  courseName,
  courseSubtitle,
  courseSummary,
  objectives,
  studyPace,
  courseLength,
  startDate,
  format,
  language,
  prerequisites,
}) => {
  return (
    <section className="max-w-screen mx-auto pt-40 pb-6 text-primary">
      <div className="mb-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
          {courseName}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white mb-16 max-w-3xl mx-auto">
          {courseSubtitle}
        </p>
      </div>

      <div className="max-w-screen-2xl mx-auto bg-white/80 shadow-md space-y-6 rounded-xl grid grid-cols-1 lg:space-y-0 lg:grid-cols-3 p-8 lg:p-0">
        {/* Left Section: Summary and Objectives */}
        <div className="col-span-2 space-y-6 lg:p-8">
          <div>
            <h2 className="text-2xl font-bold pb-4">Course Summary</h2>
            <p className="text-md leading-relaxed">{courseSummary}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold pb-4">Course Objectives</h2>
            <ul className="text-md list-disc pl-6">
              {objectives.map((objective, index) => (
                <li key={index}>{objective}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Section: Course Details and Prerequisites */}
        <div className="lg:p-8 lg:border-l border-gray-400 space-y-6">
          <div>
            <h2 className="text-2xl font-bold pb-4">Course Details</h2>
            <ul className="text-md space-y-4">
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-cta mt-1" />
                <p>
                  <strong>Study Pace:</strong> {studyPace}
                </p>
              </li>
              <li className="flex items-start gap-3">
                <BookOpen className="h-5 w-5 text-cta mt-1" />
                <p>
                  <strong>Course Length:</strong> {courseLength}
                </p>
              </li>
              <li className="flex items-start gap-3">
                <CalendarDays className="h-5 w-5 text-cta mt-1" />
                <p>
                  <strong>Start Date:</strong> {startDate}
                </p>
              </li>
              <li className="flex items-start gap-3">
                <Laptop2 className="h-5 w-5 text-cta mt-1" />
                <p>
                  <strong>Format:</strong> {format}
                </p>
              </li>
              <li className="flex items-start gap-3">
                <Globe className="h-5 w-5 text-cta mt-1" />
                <p>
                  <strong>Language:</strong> {language}
                </p>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold pb-4">Prerequisites</h2>
            <ul className="text-md space-y-2 list-disc pl-6">
              {prerequisites.map((item, index) => (
                <li key={index} className="">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Chevron Animation */}
      <div className="hidden 2xl:flex w-full justify-center mt-12">
        <div className="animate-bounce">
          <ChevronDown className="h-16 w-16 text-white" />
        </div>
      </div>
    </section>
  );
};
