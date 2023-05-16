import UsersList from "../../components/users/Users.jsx";
import NavbarDashboard from "../../components/navbarDashBoard/NavbarDashboard";

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
