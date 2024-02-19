import './index.css';
import { FaFileImport, FaRegListAlt, FaHome, FaStream, FaBullhorn, FaChartBar, FaBell } from 'react-icons/fa';
import { IoMdCloseCircleOutline } from 'react-icons/io';

function CourseStatus() {
  // Placeholder data, this could also come from props or state
  const tasks = [
    { title: 'Grade A1 - ENV + HTML', points: '100 points • Sep 18 at 11:59pm' },
    { title: 'Grade A2 - CSS + BOOTSTRAP', points: '100 points • Oct 2 at 11:59pm' }
  ];

  return (
    <div className="course-status">
      <div className="course-actions">
        <button><FaFileImport /> Import Existing Content</button>
        <button><FaRegListAlt /> Import from Commons</button>
        <button><FaHome /> Choose Home Page</button>
        <button><FaStream /> View Course Stream</button>
        <button><FaBullhorn /> New Announcement</button>
        <button><FaChartBar /> New Analytics</button>
        <button><FaBell /> View Course Notifications</button>
      </div>
      <div className="course-todo">
        <h4>To Do</h4>
        <hr/>
        {tasks.map((task, index) => (
          <div key={index} className="todo-item">
            <span className="todo-number">5</span>
            <div>
              <div className={`todo-title ${task.title.includes('Grade A1') || task.title.includes('Grade A2') ? 'red' : ''}`}>
                {task.title}
              </div>
              <div className="todo-points">{task.points}</div>
            </div>
            <IoMdCloseCircleOutline className="todo-close" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseStatus;
