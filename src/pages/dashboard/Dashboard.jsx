import { useEffect, useState } from "react";
import NavbarDashboard from "../../components/navbarDashBoard/NavbarDashboard";
import Navbar from "../../components/navbar/Navbar";
import Pagination from "../../components/pagination/Pagination";
import { useContext } from "react";
import { AuthContext } from "../../contexts/Contexts";
import Blogs from "../allBlogsPage/Blogs";
import "./dashboard.css";

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


  console.log("signedInfsdfsdfsdf");
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
