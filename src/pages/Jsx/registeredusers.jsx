import UsersList from "../../components/Jsx/users";
import NavbarDashboard from "../../components/Jsx/NavbarDashboard";

export default function Users () {

return (
    <>
     <NavbarDashboard/>  
      <div className="dashboard">  
        <UsersList/>
      </div>
    </>
  );
}