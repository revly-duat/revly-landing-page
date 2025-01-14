import { useRouter } from "next/router";
import { courses } from "components/data/courseData";
import Button from "components/ui/Button/index";
import { CalendarDays, Clock } from "lucide-react";

export const CoursesList = () => {
  const router = useRouter();

  const handleCourseClick = (link: string) => {
    router.push(link);
  };

  return (
    <section className="py-32 px-6 sm:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-20 text-primary">
          Explore Our Courses
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="relative bg-white shadow-md rounded-2xl overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg flex flex-col"
            >
              <div className="flex justify-center items-center h-48 p-4">
                <img
                  src={course.image}
                  alt={course.title}
                  className="object-contain max-h-32 max-w-full"
                />
              </div>

              <div className="flex-grow p-6 flex flex-col">
                <h3 className="text-2xl font-semibold text-primary mb-3">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-md mb-6">
                  {course.description}
                </p>

                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <CalendarDays className="h-4 w-4 mr-2 text-cta" />
                  <strong>Start Date:</strong>&nbsp; {course.startDate}
                </div>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Clock className="h-4 w-4 mr-2 text-cta" />
                  <strong>Duration:</strong>&nbsp; {course.duration}
                </div>

                <div className="mt-auto">
                  <Button
                    label="Learn More"
                    styleType="primary"
                    additionalClasses="w-full py-2 text-center"
                    onClick={() => handleCourseClick(course.link)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
