import ModuleList from "../Modules/List";
import './index.css'
import CourseStatus from "./Status/"

function Home() {
    return (
      <div className="home-container">
        <div className="module-list-container">
          <ModuleList />
        </div>
        <div className="status-container">
            <CourseStatus />
        </div>
      </div>
    );
  }
export default Home;