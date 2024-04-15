import { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import * as client from "./client";

export default function LoginScreen(){
    // const nagivate = useNavigate();
    // const [user, setUser]= useState({username:"", password:""});
    // const login = async () => {
    //   try{
    //         const existingUser = await client.loginUser(user);
    //         nagivate("/Kanbas/Account/profile");
    //     }
    //   catch(e){
    //     console.log(e);
    //   }
    // };
    // return(
    //     <div>
    //         <h1> Login</h1>
    //         <input
    //         value = {user.username}
    //         onChange ={(e) => setUser({...user, username:e.target.value})}
    //         className = "form-control"
    //         placeholder="Username"
    //         />
    //         <input
    //         value = {user.password}
    //         onChange ={(e) => setUser({...user, password:e.target.value})}
    //         className = "form-control mt-2"
    //         placeholder="Password"
    //         type={"password"}
    //         />

    //         <button onClick={login} className =  "btn btn-primary mt-2"> 
    //         login
    //         </button>
    //         <Link to="/Kanbas/Account/register" className="btn btn-link mt-2">
    //             Register
    //         </Link>
    //     </div>
    // )
}