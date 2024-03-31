import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithObjects from "./WorkingWithObjects";
import WorkingWithArrays from "./WorkingWithArrays";
const API_BASE = process.env.REACT_APP_API_BASE;
const COURSES_API = `${API_BASE}/api/courses`;

function Assignment5() {
  // new add here
  const baseURL = process.env.REACT_APP_API_BASE;
  const welcomeLink = `${baseURL}/a5/welcome`;
    return (
      <div>
        <h1>Assignment 5</h1>
        {/* <a href="http://localhost:4000/a5/welcome">
          Welcome
        </a>  */}
         <a href={welcomeLink}>
        Welcome
          </a>
        <EncodingParametersInURLs/>
        <WorkingWithObjects/>
        <WorkingWithArrays/>
    </div>
  ); }
  export default Assignment5;