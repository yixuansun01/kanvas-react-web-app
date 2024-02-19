import { assignments, enrollments, grades, users } from "../../Database";
import { useParams } from "react-router-dom";
import { FaCog, FaSearch, FaFileImport, FaFileExport, FaFilter ,FaCaretDown } from 'react-icons/fa';

function Grades() {
  const { courseId } = useParams();
  const as = assignments.filter((assignment) => assignment.course === courseId);
  const es = enrollments.filter((enrollment) => enrollment.course === courseId);
  return (
    
      <div>
              <div className="container">
                  <div className="row">
                      <div className="col-4 justify-content-start">
                        <h4 className="me-auto" style={{ color: 'red' }}> {/* Inline style for red color */}
                            Gradebook <FaCaretDown />
                        </h4>
                      </div>
                      <div className="col d-flex justify-content-end">
                          <button style={{ marginRight: '10px' }} >
                                <FaFileImport style={{ marginRight: '5px' }} />
                                <span>Import</span>
                          </button>
                          <button style={{ marginRight: '10px' }}>
                                <FaFileExport style={{ marginRight: '5px' }} />
                                <span>Export</span>
                          </button>
                          <button type="button" className="btn btn-outline-dark btn-sm">
                              <FaCog />
                          </button>
                      </div>
                  </div>

                  <div className="row">
                      <div className="col-6 d-flex justify-content-start">
                          <label htmlFor="student-search">Student Names</label>
                      </div>
                      <div className="col-6 d-flex justify-content-start">
                          <label htmlFor="assignment-name">Assignment Names</label>
                      </div>
                  </div>

                  <div className="row">
                      <div className="col-6 d-flex justify-content-start">
                          <FaSearch />
                          <select className="form-select" aria-label="Search Students">
                              <option value="default" selected>Search Students</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                          </select>
                      </div>
                      <div className="col-6 d-flex justify-content-start">
                          <FaSearch />
                          <select className="form-select" aria-label="Search Assignment">
                              <option value="default" selected>Search Assignment</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                          </select>
                      </div>
                  </div>

                  <div className="row" style={{ marginTop: '20px' ,marginBottom: '20px'}}>
                      <div className="col-2 justify-content-start">
                          <button style={{ width: '200%', padding: '10px' }}>
                              <FaFilter />
                              Apply Filters
                          </button>
                      </div>
                  </div>
              </div>


              <div className="table-responsive ">
                  <table className="table table-striped" style={{ border: '0.5px solid gray' }}>
                      <thead>
                          <th>Student Name</th>
                          {as.map((assignment) => (<th>{assignment.title}</th>))}
                      </thead>
                      <tbody>
                          {es.map((enrollment) => {
                              const user = users.find((user) => user._id === enrollment.user);
                              return (
                                  <tr>
                                      <td>{user?.firstName} {user?.lastName}</td>
                                      {as.map((assignment) => {
                                          const grade = grades.find(
                                              (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                                          return (<td>{grade?.grade || ""}</td>);
                                      })}
                                  </tr>);
                          })}
                      </tbody></table>
              </div>
          </div>);
}
export default Grades;

