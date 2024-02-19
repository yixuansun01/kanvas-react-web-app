import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { FaCheckCircle, FaEllipsisV } from 'react-icons/fa';
import { assignments } from "../../../Database";
function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = assignments.find(
    (assignment) => assignment._id === assignmentId);
  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <><div className="col d-flex justify-content-end"  style={{ marginTop: '20px' }}>
          <FaCheckCircle style={{ color: 'green' }} />

          <span style={{ color: 'green', marginRight: '20px' }}>
              Published
          </span>
          <FaEllipsisV />
         
      </div>
      <hr/>
      <div>
              <h2>Assignment Name</h2>
              <input value={assignment?.title}
                  className="form-control mb-2" />
            <hr/>
            
              <button onClick={handleSave} className="btn btn-danger ms-2 float-end">
                  Save
              </button>
              <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                  className="btn  float-end">
                  Cancel
              </Link>  
              <div style={{ clear: 'both' }}></div>
        </div>
        
          <hr/>
         </>
  );
}
export default AssignmentEditor;

