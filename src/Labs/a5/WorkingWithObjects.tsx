import React, { useEffect, useState } from "react";
import axios from "axios";
function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10", completed: false, score: 0,
  });
  const ASSIGNMENT_URL = "http://localhost:4000/a5/assignment"

  const [module, setModule] = useState({
    id: "mod1",
    name: "Introduction to Programming",
    description: "Learn the basics of programming.",
    course: "Computer Science 101"
  });

  const MODULE_URL = "http://localhost:4000/a5/module";
  const fetchAssignment = async () => {
    const response = await axios.get(`${ASSIGNMENT_URL}`);
    setAssignment(response.data);
  };
  const updateTitle = async () => {
    const response = await axios
      .get(`${ASSIGNMENT_URL}/title/${assignment.title}`);
    setAssignment(response.data);
  };
  useEffect(() => {
    fetchAssignment();
  }, []);

  return (
    <div>
      <h3>Working With Objects</h3>
      <h3>Modifying Properties</h3>
      <input onChange={(e) => setAssignment({
            ...assignment, title: e.target.value })}
        value={assignment.title} type="text" />
      <br/>
      <button onClick={updateTitle} >
        Update Title to: {assignment.title}
      </button>
      <button onClick={fetchAssignment} >
        Fetch Assignment
      </button>

      <h4>Retrieving Objects</h4>
      <a href="http://localhost:4000/a5/assignment">
        Get Assignment
      </a>
      <h4>Retrieving Properties</h4>
      <a href="http://localhost:4000/a5/assignment/title">
        Get Title
      </a>

      <h4>Modifying Properties</h4>
      <a href={`${ASSIGNMENT_URL}/title/${assignment.title}`}>
        Update Title
      </a>
      <input type="text" 
        onChange={(e) => setAssignment({ ...assignment,
            title: e.target.value })}
        value={assignment.title}/>

      <h4>3.2.4 modules</h4>
      <a href="http://localhost:4000/a5/module">
        Get Module
      </a>
      <br/>
      <a href="http://localhost:4000/a5/module/name">
      Get Module Name
      </a>
    <h5>Modifying Module Name</h5>
      <a href={`${MODULE_URL}/name/${module.name}`}>Update Module Name</a>
      <input
        type="text"
        onChange={(e) => setModule({ ...module, name: e.target.value })}
        value={module.name}
      />

    <h5>Modifying Assignment score </h5>
      <a href={`${ASSIGNMENT_URL}/score/${assignment.score}`}>
        Update score
      </a>
      <input type="number" 
        onChange={(e) => setAssignment({ ...assignment,
            score: Number(e.target.value )})}
        value={assignment.score}/>
    <h5>Modifying Assignment complete</h5>
      <a href={`${ASSIGNMENT_URL}/completed/${assignment.completed}`}>
        Update Completed property
        </a>
        <input 
        type="checkbox" 
        onChange={(e) => setAssignment({ ...assignment, 
          completed: e.target.checked })}
        checked={assignment.completed}/>
      <h5>Editing Module Description</h5>
      <a href={`${MODULE_URL}/description/${module.description}`}>Edit Module Description</a>
      <input
        type="text"
        onChange={(e) => setModule({ ...module, description: e.target.value })}
        value={module.description}
      />
    </div>
  );
}
export default WorkingWithObjects;