import NavbarDashboard from "../../components/Jsx/NavbarDashboard";
import Blogs  from "../../components/Jsx/blogs";

import "../Styles/dashboard.css";

export default function Dashboard() {
    
  return (
    <>
     <NavbarDashboard/>  
      <div className="dashboard">  
        <Blogs/>
      </div>
    </>
  );
}