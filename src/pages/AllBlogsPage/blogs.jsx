import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getAllBlogs } from "../../services/blogList";
import CircularProgress from "@mui/material/CircularProgress";
import BlogCard from "../../components/SingleBlog/SingleBlog.jsx";


import "./blogs.css";

function AllBlogs({ blogAdded, setPageNumber, setPageSize, setBlogCount }) {
  const [blogs, setBlogs] = useState(null);
  const [searchParams] = useSearchParams();
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const pgNo = searchParams.get("pageNo");
    const pgSize = searchParams.get("pageSize");

    // console.log("pageno"+pgNo);
     if(pgNo === null)  setPageNumber(1);
    if (pgSize && pgSize !== "null") setPageSize(pgSize);
    fetchAllBlogs(pgNo, pgSize);
  }, [blogAdded, searchParams]);

  const fetchAllBlogs = async (pageNumber, pageSize) => {
    let allBlogs = null;
    allBlogs = await getAllBlogs(pageNumber, pageSize);
    console.log(allBlogs);
    setisLoading(false);

    if (typeof allBlogs === "object") {
      setBlogs(allBlogs.data.rows);
      setBlogCount(allBlogs.data.count);
    } else {
      setBlogs(null);
      setBlogCount(0);
    }
  };
  
  
  if(isLoading){
    return(
       <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress color="inherit" />
        </Box>
  )}

  if (blogs) {
    return (
      <>
        {blogs.map((item) => (
          <BlogCard key={item.id} item={item} />
        ))}
      </>
    );
  }
  return (
    <>
      <h1 className="notFound">No blog found</h1>
    </>
  );
}

export default function BlogList({
  blogAdded,
  setPageNumber,
  setPageSize,
  setBlogCount,
}) {
  return (
    <AllBlogs
      blogAdded={blogAdded}
      setPageNumber={setPageNumber}
      setPageSize={setPageSize}
      setBlogCount={setBlogCount}
    />
  );
}
