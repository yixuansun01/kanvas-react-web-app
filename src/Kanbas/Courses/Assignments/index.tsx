import React, { useEffect, useState } from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { FaRegEdit } from 'react-icons/fa';
import { Link} from "react-router-dom";
//import { assignments } from "../../Database";
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  addAssignment, 
  deleteAssignment,
  setAssignment,
  setAssignments,
} from './assignmentsReducer'; 
import { KanbasState } from '../../store';
import "./index.css";
import * as client from "./service";

function Assignments() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // new a5 modify-read
  useEffect(() => {
    client.findAssignmentsForCourse(courseId)
      .then((assignments) =>
        dispatch(setAssignments(assignments))
    );
  }, [courseId]);

  // Using KanbasState to get the correct state shape
  const assignments = useSelector((state: KanbasState) => 
    state.assignmentsReducer.assignments.filter(
    (assignment) => assignment.course === courseId
  ));


  const handleAddAssignment = () => {
    // Navigate to the AssignmentEditor to create a new assignment
    navigate(`/Kanbas/Courses/${courseId}/Assignments/new`);
  };

  const handleEditAssignment = (assignment: any ) => {
    // Navigate to the AssignmentEditor for editing an existing assignment
    dispatch(setAssignment(assignment));
    navigate(`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`);
  };

  const handleDeleteAssignment = (assignmentId: string) => {
    // Confirmation dialog before deleting an assignment
    if (window.confirm('Are you sure you want to delete this assignment?')) {
      client.deleteAssignment(assignmentId).then((status) => {
        dispatch(deleteAssignment(assignmentId));
      });
      // dispatch(deleteAssignment(assignmentId));
    }
  };

  return (
    <>
      {/* {  Add buttons and other fields here } */}
      <div className="container-fluid" style={{marginTop: "10px"}}>
        <div className="row">
          <div className="col-md-auto">
            <form>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Search for Assignment" />
              </div>
            </form>
          </div>
          <div className="col-md">
            <div className="float-end">
                <button>+ Group </button>
                <button style={{backgroundColor: "red", color: "white"}}
                onClick={handleAddAssignment}>
                  + Assignment</button>
                <FaEllipsisV className="ms-2" />
            </div>
          </div>
        </div>
      </div>
      <hr />
      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <div>
            <FaEllipsisV className="me-2" /> ASSIGNMENTS
            <span className="float-end">
            <button style={{ borderRadius: "20px", marginRight: "10px", width: "150px"}}>40% of Total</button>
              <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
            </span>
          </div>
          <ul className="list-group">
            {assignments.map((assignment) => (
              <li className="list-group-item">
                <div  key={assignment._id}>
                <FaEllipsisV className="me-2" />
                <FaRegEdit className="icon-class" style={{ color: 'green', marginRight: '1em' }} />
                 <button onClick={() => handleEditAssignment(assignment)}
                  style={{ border: 'none', backgroundColor: 'white'}}>
                    {assignment.title}
                  </button>
                 <span className="float-end" style={{ marginBottom: '0.5em' }}>
                 <button onClick={() => handleEditAssignment(assignment)}
                 id="bluebutton">Edit Update</button>
                <button onClick={() => handleDeleteAssignment(assignment._id)}
                id="redbutton">Delete</button>
                  <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" />
                  </span>
                    <div className="text-muted" style={{ marginTop: '0.5em' }}>
                        <span className="text-danger" style={{ marginLeft: '2.5em' }}>Multiple Modules</span> |
                        Due {assignment.dueDate} | {assignment.points}
                    </div>
                    
                </div>
                
                
              </li>))}
          </ul>
        </li>
      </ul>
    </>
);}
export default Assignments;

