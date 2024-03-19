import React, { useState } from "react";
import "./index.css";

import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./reducer";
import { KanbasState } from "../../store";

function ModuleList() {
  const { courseId } = useParams();
  const moduleList = useSelector((state: KanbasState) => 
    state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) => 
    state.modulesReducer.module);
  const dispatch = useDispatch();


  return (
    <>
      {/* <!-- Add buttons here --> */}
       <div className="d-flex justify-content-end">
        <button style={{ marginRight: '10px' }}>Collapse All</button>
        <button style={{ marginRight: '10px' }}>View Progress</button>
        <select style={{ marginRight: '10px' }}>
          <option>Publish All</option>
          <option>Unpublish All</option>
        </select>
        <FaEllipsisV className="ms-2" />
      </div >
      <br />
      <hr />
          
      <ul className="list-group wd-modules">
      <li className="list-group-item" style={{ backgroundColor: 'white' , borderLeft: '2px solid black'}} >
       
        <input value={module.name}
          onChange={(e) =>  dispatch(setModule({ ...module, name: e.target.value }))}
            style={{ border: '1px solid black', marginLeft: '10px', width: '400px', height: '40px' }}    
        />
        
        <button id="greenbutton"
         onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
          Add</button>
         
         <button id="bluebutton" 
         onClick={() => dispatch(updateModule(module))} >
                Update
        </button>
        
        <div id="customBorderDiv" >
        <textarea value={module.description}
          onChange={(e) =>
            dispatch(setModule({ ...module, description: e.target.value }))
          }
            style={{ border: '1px solid black' , width: '400px', height: '80px'}}
        />
        </div>
         
      </li>
    
        {moduleList
         .filter((module) => module.course === courseId)
        .map((module, index) => (
          <li key={index} className="list-group-item">
            <div>
              <FaEllipsisV className="me-2" />
              {module.name}
              <span className="float-end">
              <button
               onClick={() => dispatch(deleteModule(module._id))}
               id="redbutton">
               Delete
              </button >

              <button
              onClick={() => dispatch(setModule(module))}
              id="greenbutton">
              Edit
            </button>
                {/* <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" /> */}
              </span>
            </div>
            
              <ul className="list-group">
                {module.lessons?.map((lesson:any) => (
                  <li className="list-group-item">
                    <FaEllipsisV className="me-2" />
                    {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </li>
                ))}
              </ul>
            
          </li>
        ))}
      </ul>
    </>
  );
}
export default ModuleList;