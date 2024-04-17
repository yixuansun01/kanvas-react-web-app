import axios from "axios";
export const BASE_API = process.env.REACT_APP_BASE_API_URL;
export const COURSES_API = `${BASE_API}/api/courses`;

// deploy
const axiosWithCredentials = axios.create({
  baseURL: `${BASE_API}/api`,
  withCredentials: true
});

// local
// const axiosWithCredentials = axios.create({
//   baseURL: "http://localhost:4000/api",
//   withCredentials: true
// });

export interface Course { 
    id:string;
    name:string;
    number:string;
    startDate:string;
    endDate:string;
    department:string;
    credits:number;
    description:string;
    author:string
 };
export const findAllCourses = async () => {
  const response = await axiosWithCredentials.get("/courses");
  return response.data;
};

export const updateCourse = async (course: any) => {
    const response = await axiosWithCredentials.put(`/courses/${course.id}`, course);
    return response.data;
};
export const createCourse = async (course: any) => {
    const response = await axiosWithCredentials.post("/courses", course);
    return response.data;
  };
  export const findCourseById = async (courseId?:string) => {
    const response = await axiosWithCredentials.get(`/courses/${courseId}`);
    return response.data;
  };

  export const deleteCourse = async (courseId: any) => {
    const response = await axiosWithCredentials.delete(
      `/courses/${courseId}`);
    return response.data;
  };

  // export const findAllCourses = async () => {
//   const response = await axiosWithCredentials.get(COURSES_API);
//   return response.data;
// };
// export const updateCourse = async (course: any) => {
//   const response = await axios.put(`${COURSES_API}/${course.id}`, course);
//   return response.data;
// };
// export const createCourse = async (course: any) => {
//   const response = await axios.post(`${COURSES_API}`, course);
//   return response.data;
// };
// export const findCourseById = async (courseId?:string) => {
//   const response = await axios.get(`${COURSES_API}/${courseId}`);
//   return response.data;
// };

// export const deleteCourse = async (course: any) => {
//   const response = await axios.delete(
//     `${COURSES_API}/${course.id}`);
//   return response.data;
// };
  
  
  

