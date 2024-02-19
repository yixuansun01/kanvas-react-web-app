import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { FaRegEdit } from 'react-icons/fa';
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";

function Assignments() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId);
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
                <button style={{backgroundColor: "red", color: "white"}}>+ Assignment</button>
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
            {assignmentList.map((assignment) => (
              <li className="list-group-item">
                <div>
                <FaEllipsisV className="me-2" />
                <FaRegEdit className="icon-class" style={{ color: 'green', marginRight: '1em' }} />
                 <Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>{assignment.title}</Link>
                 <span className="float-end" style={{ marginBottom: '0.5em' }}>
                  <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
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

