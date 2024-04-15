import * as client from "./client";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Profile() {
  const [profile, setProfile] = useState({ username: "", password: "", 
    firstName: "", lastName: "", dob: "", email: "", role: "USER" });
  const navigate = useNavigate();
  const fetchProfile = async () => {
    const account = await client.profile();
    setProfile(account);
  };
  const save = async () => {
    await client.updateUser(profile);
  };
  const signout = async () => {
    await client.signout();
    navigate("/Kanbas/Account/Signin");
  };

  useEffect(() => {
    fetchProfile();
  }, []);
  return (
    <div>
      <h1>Profile</h1>
      {profile && (
        <div>
          <input value={profile.username} onChange={(e) =>
            setProfile({ ...profile, username: e.target.value })}/>
            <br/>
          <input value={profile.password} onChange={(e) =>
            setProfile({ ...profile, password: e.target.value })}/>
            <br/>
          <input value={profile.firstName} onChange={(e) =>
            setProfile({ ...profile, firstName: e.target.value })}/>
          <br/>
          <input value={profile.lastName} onChange={(e) =>
            setProfile({ ...profile, lastName: e.target.value })}/>
          <br/>
          <input value={profile.dob} type="date" onChange={(e) =>
            setProfile({ ...profile, dob: e.target.value })}/>
          <br/>
          <input value={profile.email} onChange={(e) =>
            setProfile({ ...profile, email: e.target.value })}/>
          <br/>
          <select onChange={(e) =>
              setProfile({ ...profile, role: e.target.value })}>
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
          <br/>
          <button onClick={save}>
            Save
          </button>
          <Link to="/Kanbas/Account/Admin/Users"
            className="btn btn-warning w-100">
            Users
          </Link>
          <br/>
          <button onClick={signout} className="btn btn-danger">
            Signout
          </button> 
        </div>
      )}
    </div>
  );
}

// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router";
// import * as client from "./client";

// export default function Profile(){
//     const [profile, setProfile] = useState({username:"", password:""});
//     const navigate = useNavigate();
//     const fetchProfile = async () => {
//        try{
//         const profile = await client.profile();
//         setProfile(profile);
//         console.log(profile);
//        } catch(e){
//         console.log(e);
//         navigate("/Kanbas/Account/login");
//        }
//     };
//     const logout =  async () => {
//         await client.logoutUser();
//         navigate("/Kanbas/Account/login");
//     };

//     useEffect(() =>{
//         fetchProfile();
//     },[]);
//     return(
//         <div>
//         <h1>Profile</h1>
//         <pre>
//             <code>{JSON.stringify(profile, null, 2)}</code>
//         </pre>
//         <button onClick={logout} className=" btn btn-danger">Logout</button>
//         </div>
//     );
// }