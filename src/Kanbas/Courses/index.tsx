import { courses } from "../../Kanbas/Database";
import { Navigate, Route, Routes,useParams ,useLocation } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";

function Courses() {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  const location = useLocation(); 
  const atHome = location.pathname.endsWith('Home') || location.pathname.endsWith('courseId');
  return (
    <div>
      <h1 style={{ color: 'red' ,fontSize: '25px'}}><HiMiniBars3 />
       Course {course?.name} 
       {atHome && <span style={{ color: 'black' }}> {'>'} Home</span>}
      </h1>
      <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{ left: "320px", top: "50px" }} >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<h1>Home</h1>} />
            <Route path="Modules" element={<h1>Modules</h1>} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Assignments" element={<h1>Assignments</h1>} />
            <Route path="Assignments/:assignmentId" element={<h1>Assignment Editor</h1>} />
            <Route path="Grades" element={<h1>Grades</h1>} />
          </Routes>
        </div>
      </div>

    </div>
  );
}
export default Courses;