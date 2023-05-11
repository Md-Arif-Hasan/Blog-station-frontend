import { useEffect, useState } from "react";
import NavbarDashboard from "../../components/Jsx/NavbarDashboard";
import Navbar from "../../components/Jsx/Navbar";
import Pagination from "../../components/Jsx/Pagination";
import { useContext } from "react";
import { AuthContext } from "../../contexts/contexts";
import Blogs from "../../components/Jsx/blogs";
import "../Styles/dashboard.css";

export default function Dashboard() {
  const [signedIn, setSignedIn] = useState(false);
  const [blogCount, setBlogCount] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const { checkLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    if (checkLoggedIn()) {
      setSignedIn(true);
    } else {
      setSignedIn(false);
    }
  },[]);

  const changePage = (page) => {
    setPageNumber(page);
  };

  return (
    <>
      {signedIn ? <NavbarDashboard /> : <Navbar />}
      <div className="dashboard">
        <Blogs
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
