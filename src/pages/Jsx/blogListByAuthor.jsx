import NavbarDashboard from "../../components/Jsx/NavbarDashboard";
import BlogsByAuthor  from "../../components/Jsx/myBlogs";

import "../Styles/dashboard.css";

export default function Dashboard() {
    
  return (
    <>
     <NavbarDashboard/>  
      <div className="dashboard">  
        <BlogsByAuthor/>
      </div>
    </>
  );
}