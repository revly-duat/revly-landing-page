import { useRouter } from "next/router";
import { courses } from "components/data/courseData";
import Button from "components/ui/Button/index";

export const CoursesList = () => {
  const router = useRouter();

  return (
    <section
      id="coursesList"
      className=" scroll-mt-[calc(20vh-96px)] py-20 px-6 sm:px-12 lg:px-24 bg-gray-100"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">
          Explore Our Courses
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <div className="flex justify-center">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold text-primary mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-md mb-4">
                  {course.description}
                </p>
                <p className="text-sm text-gray-500 mb-2">
                  <strong>Start Date:</strong> {course.startDate}
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  <strong>Duration:</strong> {course.duration}
                </p>

                <div className="flex-grow"></div>

                <div className="flex justify-center mt-auto">
                  <Button
                    label={"Learn More"}
                    styleType={"primary"}
                    additionalClasses=""
                    onClick={() => router.push(course.link)}
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
