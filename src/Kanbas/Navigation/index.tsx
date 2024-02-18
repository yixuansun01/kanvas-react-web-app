import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { TfiLayoutMediaCenterAlt } from "react-icons/tfi";
import { FaTachometerAlt, FaRegUserCircle, FaBook, 
    FaRegCalendarAlt, FaGlobeAmericas, FaQuestionCircle, 
    FaInbox, FaHistory } from "react-icons/fa";
function KanbasNavigation() {
  const links = [
    { label: "Account",   icon: <FaRegUserCircle className="fs-2 icon-account" />  },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" />  },
    { label: "Courses",   icon: <FaBook className="fs-2" />           },
    { label: "Calendar",  icon: <FaRegCalendarAlt className="fs-2" /> },
    { label: "Inbox",     icon: <FaInbox className="fs-2" />, path: "Inbox" },
    { label: "History",   icon: <FaHistory className="fs-2" />, path: "History" },
    { label: "Studio",    icon: <TfiLayoutMediaCenterAlt className="fs-2" />, path: "Studio" },
    { label: "Commons",   icon: <FaGlobeAmericas className="fs-2" />, path: "Commons" },
    { label: "Help",      icon: <FaQuestionCircle className="fs-2" />, path: "Help" }
  ];
  const { pathname } = useLocation();
  return (
    <ul className="wd-kanbas-navigation">
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
          <Link to={`/Kanbas/${link.label}`}> {link.icon} {link.label} </Link>
        </li>
      ))}
    </ul>
  );
}
export default KanbasNavigation;


