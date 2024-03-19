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



  // Fields: name, description, points, dueDate, availableFromDate, availableUntilDate
  return (
    <div className="assignment-editor">
      <h2>{assignmentId ? 'Edit' : 'New'} Assignment</h2>
      <input
        
        value={assignment.title}
        onChange={(e) => dispatch(setAssignment({
          ...assignment, title: e.target.value }))}

        className="form-control mb-2"
        placeholder="Assignment Title"
      />
      <textarea
        name="description"
        value={assignment.description}
        onChange={(e) => dispatch(setAssignment({
          ...assignment, description: e.target.value }))}
        className="form-control mb-2"
        placeholder="Description"
      />
      <input
        name="points"
        value={assignment.points}
        onChange={(e) => dispatch(setAssignment({
          ...assignment, points: e.target.value }))}
        className="form-control mb-2"
        placeholder="Points"
      />
      <input
        name="dueDate"
        type="date"
        value={assignment.dueDate}
        onChange={(e) => dispatch(setAssignment({
          ...assignment, dueDate: e.target.value }))}
        className="form-control mb-2"
      />
      <input
        name="availableFromDate"
        type="date"
        value={assignment.availableFromDate}
        onChange={(e) => dispatch(setAssignment({
          ...assignment, availableFromDate: e.target.value }))}
        className="form-control mb-2"
      />
      <input
        name="availableUntilDate"
        type="date"
        value={assignment.availableUntilDate}
        onChange={(e) => dispatch(setAssignment({
          ...assignment, availableUntilDate: e.target.value }))}
        className="form-control mb-2"
      />
      <button onClick={handleSave} className="btn btn-success">Save</button>
      <Link to={`/Kanbas/Courses/${courseId}/Assignments`} className="btn btn-secondary">Cancel</Link>
    </div>
  );
}

export default AssignmentEditor;
