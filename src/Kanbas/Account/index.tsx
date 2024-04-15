import Signin from "../../Users/Signin";
import UserTable from "../../Users/Table";

import { Routes, Route, Navigate } from "react-router-dom";
import Profile from "../../Users/Profile";
import Signup from "../../Users/Signup";

export default function Account() {
  return (
    <div className="container-fluid">
      <Routes>
        <Route path="/" element={<Navigate to="/Kanbas/Account/Signin" />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Admin/Users" element={<UserTable />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </div>
  );
}


// import { Navigate, Route, Routes } from "react-router";
// import RegisterScreen from "../../Users/register";
// import Profile from "../../Users/profile";
// import LoginScreen from "../../Users/login";

// export default function Account(){
//     return (
//         <div className="container-fluid">
//         <h1>Account</h1>
//         <Routes>
//             <Route path = "/" element ={<Navigate to ="login"/>}/>
//             <Route path = "/register" element ={<RegisterScreen/>}/>
//             <Route path = "/profile" element ={<Profile/>}/>
//             <Route path = "/login" element ={<LoginScreen/>}/>
//         </Routes>
//         </div>
//     );
// }