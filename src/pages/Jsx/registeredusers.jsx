import UsersList from "../../components/Jsx/users";
import NavbarDashboard from "../../components/Jsx/NavbarDashboard";
import "../Styles/dashboard.css"
export default function Users() {
  return (
    <>
      <NavbarDashboard />
      <div className="dashboard">
        <UsersList />
      </div>
    </>
  );
}
