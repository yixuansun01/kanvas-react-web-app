import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addAssignment, updateAssignment, setAssignment  } from '../assignmentsReducer';
import { KanbasState } from '../../../store'


function AssignmentEditor() {
  const { assignmentId, courseId } = useParams();

  // Select the assignment from the Redux store if editing
  const assignments = useSelector((state: KanbasState) => 
  state.assignmentsReducer.assignments);
  const assignment = useSelector((state: KanbasState) => 
    state.assignmentsReducer.assignment);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSave = () => {
    // Validate form data here if necessary
    if (assignmentId && assignmentId !== "new") {
      // Dispatch an action to update the assignment
      
      dispatch(updateAssignment({ ...assignment, _id: assignmentId }));
    } else {
      // Dispatch an action to add a new assignment
      
      dispatch(addAssignment({ ...assignment,
         _id: new Date().getTime().toString() ,course : courseId}));
    }
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };


  return (
    <div  className="assignment-editor container">
      <h3> Assignment Name</h3>
      <input
        value={assignment.title}
        onChange={(e) => dispatch(setAssignment({
          ...assignment, title: e.target.value }))}

        className="form-control mb-2"
        placeholder="New Assignment Title"
      />
      <textarea
        name="description"
        value={assignment.description}
        onChange={(e) => dispatch(setAssignment({
          ...assignment, description: e.target.value }))}
        className="form-control mb-2"
        placeholder="Description"
      />
      <div className="row mt-2 mb-2">
          <div className="col-3 d-flex justify-content-end">
            <label>Points</label>
          </div>
          <div className="col-6 d-flex justify-content-start">
                <input
                  name="points"
                  value={assignment.points}
                  onChange={(e) => dispatch(setAssignment({
                    ...assignment, points: e.target.value }))}
                    className="form-control mb-2"
                  placeholder="Points"
                  />
          </div>
      </div> 

      <div className="row mt-2 mb-2">
          <div className="col-3 d-flex justify-content-end">
            <label>Assign</label>
          </div>
          <div className="col-9 d-flex">
            <div className="row mb-2">
              <div className="col-12 d-flex justify-content-start">
              <div className="row mb-2">
                  <label>Due</label>  
                  <input
                    name="dueDate"
                    type="date"
                    value={assignment.dueDate}
                    onChange={(e) => dispatch(setAssignment({
                      ...assignment, dueDate: e.target.value }))}
                    className="form-control mb-2"
                  />
              </div>
            </div>
            <div className="row mb-2"> 
            <div className="col-6 d-flex justify-content-start">
                <div className="row mb-2">
                <label>Available from</label>
                  <input
                  name="availableFromDate"
                  type="date"
                  value={assignment.availableFromDate}
                  onChange={(e) => dispatch(setAssignment({
                  ...assignment, availableFromDate: e.target.value }))}
                  className="form-control mb-2"
                  />
                </div>
            </div> 

            <div className="col-6 d-flex justify-content-start">
                <div className="row mb-2">
                <label>Until</label>
                <input
                    name="availableUntilDate"
                    type="date"
                    value={assignment.availableUntilDate}
                    onChange={(e) => dispatch(setAssignment({
                      ...assignment, availableUntilDate: e.target.value }))}
                    className="form-control mb-2"
                  />
                </div>
            </div> 

            </div>
          </div>
         </div>
      </div>      
     <hr/>     
     <div className="col-9 d-flex justify-content-end">
      <Link to={`/Kanbas/Courses/${courseId}/Assignments`} className="btn "
       style={{ border: '1px solid black', marginRight: '10px' }} >
        Cancel</Link>
      <button onClick={handleSave} className="btn" 
      style={{ backgroundColor: 'red', color: 'white' }}>
        Save</button>
      </div>                   
    </div>
  );
}

export default AssignmentEditor;
