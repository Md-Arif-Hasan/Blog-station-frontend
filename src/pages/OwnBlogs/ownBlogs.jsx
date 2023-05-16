import { useEffect, useState } from "react";
import Pagination from "../../components/pagination/Pagination";
import NavbarDashboard from "../../components/navbarDashBoard/NavbarDashboard";
import { AuthContext } from "../../contexts/Contexts";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import OwnBlogs from "./singleAuthorBlogs";

export default function Dashboard() {
  const [blogCount, setBlogCount] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const { checkLoggedIn } = useContext(AuthContext);

  const changePage = (page) => {
    setPageNumber(page);
  };
  const navigate = useNavigate();
  useEffect(() => {
    if (!checkLoggedIn()) {
      navigate("/dashboard");
    }
  }, []);

  return (
    <>
      <NavbarDashboard />
      <div className="dashboard">
        <OwnBlogs
          setPageNumber={setPageNumber}
          setPageSize={setPageSize}
          setBlogCount={setBlogCount}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "1rem 0",
          }}
        >
          <Pagination
            changePage={changePage}
            pageSize={pageSize}
            pageNumber={pageNumber}
            navigationPage={"dashboard"}
            blogCount={blogCount}
          />
        </div>
      </div>
    </>
  );
}
