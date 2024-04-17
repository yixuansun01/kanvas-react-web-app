import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
// import * as db from "./Database";
import { useState, useEffect  } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";
import Account from "./Account";
import * as client from "./Courses/client"

const API_BASE = process.env.REACT_APP_API_BASE;
function Kanbas() {
  const [courses, setCourses] = useState<any[]>([]);
  // const COURSES_API = "http://localhost:4000/api/courses";
  //const COURSES_API = "https://kanbas-node-server-app-noe0.onrender.com/api/courses";
  const COURSES_API = `${API_BASE}/api/courses`;
  const findAllCourses = async () => {
    // const response = await axios.get(COURSES_API);
    // setCourses(response.data);
    const courses = await client.findAllCourses();
    setCourses(courses);
  };
  useEffect(() => {
    findAllCourses();
  }, []);

  const [course, setCourse] = useState({
    id: "1234", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    image: "react_logo.png",
  });

  
  // const addNewCourse = async () => {
  //   const response = await axios.post(COURSES_API, course);
  //   setCourses([ ...courses, response.data ]);
  // };
  const addNewCourse = async () => {
    const newCourse = await client.createCourse(course);
    setCourses([ ...courses, newCourse]);
  };

 
  // const deleteCourse = async (courseId: string) => {
  //   const response = await axios.delete(
  //     `${COURSES_API}/${courseId}`
  //   );
  //   setCourses(courses.filter(
  //     (c) => c._id !== courseId));
  // };
   
  const deleteCourse = async (courseId: string) => {
   await client.deleteCourse(courseId);
    setCourses(courses.filter(
      (c) => c.id !== courseId));
  };


  // const updateCourse = async () => {
  //   const response = await axios.put(
  //     `${COURSES_API}/${course.id}`,
  //     course
  //   );
  //   setCourses(
  //     courses.map((c) => {
  //       if (c._id === course.id) {
  //         return course;
  //       }
  //       return c;
  //     })
  //   );
  // };
  const updateCourse = async () => {
    const response = await client.updateCourse(course)
    setCourses(
      courses.map((c) => {
        if (c.id === course.id) {
          return course;
        }
        return c;
      })
    );
  };

  return (
    <Provider store={store}>

    <div className="d-flex">
        <KanbasNavigation />
     
      <div style={{ flexGrow: 1 }}>
      <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account/*" element={<Account/>} />
          <Route path="Dashboard" element={
             <Dashboard
             courses={courses}
             course={course}
             setCourse={setCourse}
             addNewCourse={addNewCourse}
             deleteCourse={deleteCourse}
             updateCourse={updateCourse}/>

         } />
          <Route path="Courses/:courseId/*" element={<
            Courses />} />

        </Routes>

      </div>
    </div>
    </Provider>

);
}
export default Kanbas;

