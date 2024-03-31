import { assignments, courses } from "../../Kanbas/Database";
import { Navigate, Route, Routes,useParams ,useLocation, Link } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";
import { useState, useEffect } from "react";
import axios from "axios";


function Courses() {
  const { assignmentId } = useParams();
  const assignment = assignments.find(
    (assignment) => assignment._id === assignmentId);
  const { courseId } = useParams();
  //const course = courses.find((course) => course._id === courseId);
  const COURSES_API = "http://localhost:4000/api/courses";
  const [course, setCourse] = useState<any>({ _id: "" });
  const findCourseById = async (courseId?: string) => {
    const response = await axios.get(
      `${COURSES_API}/${courseId}`
    );
    setCourse(response.data);
  };
  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);


  const location = useLocation(); 
  const atHome = location.pathname.endsWith('Home') || location.pathname.endsWith('courseId');
  const atModules = location.pathname.includes("/Modules");
  const atAssignments = location.pathname.includes('/Assignments');
  const atAssignmentEditor = location.pathname.includes('/Assignments/') && assignmentId;
  const atGrades = location.pathname.includes('/Grades');
  return (
    <div>
      <h1 style={{ color: 'red' ,fontSize: '25px'}}><HiMiniBars3 />
       Course {course?.name} 
       {atHome && <span style={{ color: 'black' }}> {'>'} Home</span>}
       {atModules && (
          <>
            <span style={{ color: 'black' }}> {'>'} Modules</span>
          </>
        )}
        {atAssignments && !atAssignmentEditor && (
          <span style={{ color: 'black' }}> {'>'} Assignments</span>
        )}
        {atAssignmentEditor && (
           <span style={{ color: 'black' }}> {'>'} Assignments {'>'} {assignmentId}</span>
           
        )}
        
        {atGrades && <span style={{ color: 'black' }}> {'>'} Grades</span>}
      </h1>
      <hr/>
      <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{ left: "320px", top: "50px" }} >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route path="Assignments/:assignmentId" element={<AssignmentEditor/>}/>
            <Route path="Grades" element={<Grades />} />

          </Routes>
        </div>
      </div>

    </div>
  );
}
export default Courses;