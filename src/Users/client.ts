import axios from "axios";
export const BASE_API = process.env.REACT_APP_BASE_API_URL;
export const USERS_API = `${BASE_API}/api/users`;

// below is 4.1 code- from a6 doc
//export const USERS_API = process.env.REACT_APP_API_URL;
// const api = axios.create({
//   withCredentials: true
// });

// old local version can 
// const axiosWithCredentials = axios.create({
//   baseURL: "http://localhost:4000/api",
//   withCredentials: true
// });

const axiosWithCredentials = axios.create({
  baseURL: `${BASE_API}/api`,
  withCredentials: true
});

export interface User { _id: string; username: string; password: string; role: string;
firstName: string, lastName: string };
// export const signin = async (credentials: User) => {
//   const response = await axios.post( `${USERS_API}/signin`, credentials );
//   return response.data;
// };

export const signin = async (credentials: User) => {
  const response = await axiosWithCredentials.post( "/users/signin", credentials );
  return response.data;
};
export const profile = async () => {
  const response = await axiosWithCredentials.post(`/users/profile`);
  return response.data;
};

  export const updateUser = async (user: any) => {
    const response = await axiosWithCredentials.put(`/users/${user._id}`, user);
    return response.data;
  };
  export const findAllUsers = async () => {
    const response = await axiosWithCredentials.get("/users");
    //console.log(response.data);
    return response.data;
  };
  //
  export const createUser = async (user: any) => {
    const response = await axiosWithCredentials.post(`/users/register`, user);
    return response.data;
  };
  export const deleteUser = async (user: any) => {
    const response = await axiosWithCredentials.delete(
      `/users/${user._id}`);
    return response.data;
  };
  export const findUserById = async (id: string) => {
    const response = await axiosWithCredentials.get(`/users/${id}`);
    return response.data;
  };
  export const findUsersByRole = async (role: string) => {
    const response = await
    axiosWithCredentials.get(`/users?role=${role}`);
    return response.data;
  };
  //part4 
  // export const signup = async (user:any) => {
  //   const response = await axios.post(`${USERS_API}/signup`, user);
  //   return response.data;
  // };
  // export const signout = async () => {
  //   const response = await axios.post(`${USERS_API}/signout`);
  //   return response.data;
  // };
  
  export const signup = async (user:any) => {
    const response = await axiosWithCredentials.post(`/users/signup`, user);
    return response.data;
  };
  export const signout = async () => {
    const response = await axiosWithCredentials.post(`/users/signout`);
    return response.data;
  };
  
  
// old version
// const  axiosWithCredentials = axios.create({
//     baseURL: "http://localhost:4000/api",
//     withCredentials: true,
// });

// export const fetchAllUsers = async() => {
//     const response = await axiosWithCredentials.get("/users");
//     return response.data;
// };
// export const registerUser = async(user : any) => {
//     const response = await axiosWithCredentials.post(
//         `/users/register`,user
//     );
//     return response.data;
// };


// export const loginUser = async(user: any) =>{
//     const response = await axiosWithCredentials.post("/users/login", user);
//     return response.data;
// };

// export const logoutUser = async() =>{
//     const response = await axiosWithCredentials.post("/users/logout");
//     return response.data;
// };

