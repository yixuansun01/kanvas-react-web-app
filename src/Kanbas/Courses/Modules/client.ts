import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE;

// const COURSES_API = "https://kanbas-node-server-app-noe0.onrender.com/api/courses";
// const MODULES_API = "https://kanbas-node-server-app-noe0.onrender.com/api/modules";
const COURSES_API = `${API_BASE}/api/courses`;
const MODULES_API = `${API_BASE}/api/modules`;

//deploy 
const axiosWithCredentials = axios.create({
  baseURL: `${API_BASE}/api`,
  withCredentials: true
});

// local
// const axiosWithCredentials = axios.create({
//   baseURL: "http://localhost:4000/api",
//   withCredentials: true
// });

export interface Module { 
    id:string;
    name:string;
    description:string;
    course: string
};
// export const updateModule = async (module:any) => {
//     const response = await axios.
//       put(`${MODULES_API}/${module._id}`, module);
//     return response.data;
//   };
export const updateModule = async (module:any) => {
  const response = await axiosWithCredentials.
    put(`/modules/${module._id}`, module);
  return response.data;
};
// export const deleteModule = async (moduleId:any) => {
//   const response = await axios
//     .delete(`${MODULES_API}/${moduleId}`);
//   return response.data;
// };
export const deleteModule = async (moduleId:any) => {
const response = await axiosWithCredentials
  .delete(`/modules/${moduleId}`);
return response.data;
};
// export const createModule = async (courseId:any, module:any) => {
//     const response = await axios.post(
//       `${COURSES_API}/${courseId}/modules`,
//       module
//     );
//     return response.data;
//   };

export const createModule = async (courseId:any, module:any) => {
  //console.log(module);
  const response = await axiosWithCredentials.post(
    `/courses/${courseId}/modules`,
    module
  );
  return response.data;
};
// export const findModulesForCourse = async (courseId: any) => {
//   const response = await axios
//     .get(`${COURSES_API}/${courseId}/modules`);
//   return response.data;
// };
export const findModulesForCourse = async (courseId: any) => {
const response = await axiosWithCredentials
  .get(`/courses/${courseId}/modules`);
return response.data;
};


// export const updateModule = async (module:any) => {
//     const response = await axios.
//       put(`${MODULES_API}/${module._id}`, module);
//     return response.data;
//   };
  
// export const deleteModule = async (moduleId:any) => {
//   const response = await axios
//     .delete(`${MODULES_API}/${moduleId}`);
//   return response.data;
// };

// export const createModule = async (courseId:any, module:any) => {
//     const response = await axios.post(
//       `${COURSES_API}/${courseId}/modules`,
//       module
//     );
//     return response.data;
//   };
  
// export const findModulesForCourse = async (courseId: any) => {
//   const response = await axios
//     .get(`${COURSES_API}/${courseId}/modules`);
//   return response.data;
// };
