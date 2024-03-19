import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addAssignment, updateAssignment, setAssignment  } from '../assignmentsReducer';
import { KanbasState } from '../../../store'
function AssignmentEditor() {
  const { assignmentId, courseId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Select the assignment from the Redux store if editing
  const assignments = useSelector((state: KanbasState) => state.assignmentsReducer.assignments);
const assignment = assignments.find((a) => a._id === assignmentId) || {};

  // Local state for the form, defaulted to the assignment being edited or empty for new
  const [formState, setFormState] = useState({
    title: '',
    description: '',
    points: '',
    dueDate: '',
    availableFromDate: '',
    availableUntilDate: '',
  });

  useEffect(() => {
    if (assignmentId && assignment) {
      setFormState(assignment);
    }
  }, [assignmentId, assignment]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };


  const handleSave = () => {
    // Validate form data here if necessary
    if (assignmentId) {
      // Dispatch an action to update the assignment
      dispatch(updateAssignment({ ...formState, _id: assignmentId }));
    } else {
      // Dispatch an action to add a new assignment
      dispatch(addAssignment({ ...formState, _id: new Date().getTime().toString() }));
    }
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  // Fields: name, description, points, dueDate, availableFromDate, availableUntilDate
  return (
    <div className="assignment-editor">
      <h2>{assignmentId ? 'Edit' : 'New'} Assignment</h2>
      <input
        name="title"
        value={formState.title}
        onChange={(e) => setAssignment({
          ...formState, name: e.target.value })}

        className="form-control mb-2"
        placeholder="Assignment Title"
      />
      <textarea
        name="description"
        value={formState.description}
        onChange={(e) => setAssignment({
          ...formState, name: e.target.value })}
        className="form-control mb-2"
        placeholder="Description"
      />
      <input
        name="points"
        type="number"
        value={formState.points}
        onChange={(e) => setAssignment({
          ...formState, name: e.target.value })}
        className="form-control mb-2"
        placeholder="Points"
      />
      <input
        name="dueDate"
        type="date"
        value={formState.dueDate}
        onChange={(e) => setAssignment({
          ...formState, name: e.target.value })}
        className="form-control mb-2"
      />
      <input
        name="availableFromDate"
        type="date"
        value={formState.availableFromDate}
        onChange={(e) => setAssignment({
          ...formState, name: e.target.value })}
        className="form-control mb-2"
      />
      <input
        name="availableUntilDate"
        type="date"
        value={formState.availableUntilDate}
        onChange={(e) => setAssignment({
          ...formState, name: e.target.value })}
        className="form-control mb-2"
      />
      <button onClick={handleSave} className="btn btn-success">Save</button>
      <Link to={`/Kanbas/Courses/${courseId}/Assignments`} className="btn btn-secondary">Cancel</Link>
    </div>
  );
}

export default AssignmentEditor;
