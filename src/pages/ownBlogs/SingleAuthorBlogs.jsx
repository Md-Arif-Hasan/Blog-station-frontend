import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import SingleBlog from "../../components/singleAuthorBlogs/SingleAuthorBlog";
import CircularProgress from "@mui/material/CircularProgress";
import { AuthContext } from "../../contexts/Contexts";
import { useContext } from "react";
import { getUserByUsername } from "../../services/user";
import { getAllBlogsByAuthorId, deleteBlog } from "../../services/blogList";

function AllBlogs({ blogAdded, setPageNumber, setPageSize, setBlogCount }) {
  const [blogs, setBlogs] = useState(null);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [authorId, setAuthorId] = useState("");
  const [username, setUsername] = useState("");
  const { checkLoggedIn, loggedInUsername } = useContext(AuthContext);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    if (!checkLoggedIn()) {
      navigate("/dashboard");
    }
    const pgNo = searchParams.get("pageNo");
    const pgSize = searchParams.get("pageSize");
    if (pgNo && pgNo !== "null") setPageNumber(pgNo);
    if (pgSize && pgSize !== "null") setPageSize(pgSize);

    async function getUser() {
      const user = await getUserByUsername(loggedInUsername);
      setAuthorId(user.data.id);
      setUsername(user.data.username);
      await BlogsByAuthorId(user.data.id, pgNo, pgSize);
    }
    getUser();
  }, [blogAdded, searchParams, username]);

  const BlogsByAuthorId = async (authorId, pageNumber, pageSize) => {
    let allBlogs = null;
    allBlogs = await getAllBlogsByAuthorId(authorId, pageNumber, pageSize);
    setisLoading(false);

    if (typeof allBlogs === "object") {
      setBlogs(allBlogs.data.rows);
      setBlogCount(allBlogs.data.count);
    } else {
      setBlogs(null);
      setBlogCount(0);
    }
  };

  const deleteOneBlog = async (blogId) => {
    const response = await deleteBlog(blogId);
    if (response.status === 200) {
    }
    await BlogsByAuthorId(authorId, 1, 5);
  };

  if (isLoading) {
    return (
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <CircularProgress color="inherit" />
      </Box>
    );
  }

  if (!blogs)
    return (
      <>
        <h1 className="notFound">No blog found</h1>
      </>
    );

  return (
    <>
      {blogs.map((item) => (
        <SingleBlog key={item.id} item={item} deleteOneBlog={deleteOneBlog} />
      ))}
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
