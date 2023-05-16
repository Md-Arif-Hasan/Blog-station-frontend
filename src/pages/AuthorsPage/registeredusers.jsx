import UsersList from "../../components/Users/Users";
import NavbarDashboard from "../../components/NavbarDashBoard/NavbarDashboard";

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
