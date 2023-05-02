import { getUserByUsername } from "../../services/user";
import { getBlogsByAuthorId, deleteBlog } from "../../services/blogList";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";

import { useEffect, useState } from "react";

export default function OwnBlogs() {
  const [blogList, setBlogList] = useState([]);
  const [authorId, setAuthorId] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    async function getUser() {
      let cookie = Cookies.get("jwt");
      let { username } = jwt_decode(cookie);

      const user = await getUserByUsername(username);
      setAuthorId(user.data.id);
      console.log(user.data.id);
      await getAllBlgsByAuthorId(user.data.id);
    }
    getUser();
  }, [username]);

  const getAllBlgsByAuthorId = async (authorId) => {
    const userBlogs = await getBlogsByAuthorId(authorId);
    if (typeof userBlogs.data === "object") {
      setBlogList(userBlogs.data);
    } else {
      setBlogList(null);
    }
  };



  const deleteBlogs = async (blogId) => {
    const response = await deleteBlog(blogId);
    console.log(response.data);
    if(response.status === 200){
        console.log("Blog deleted!")
    }
    await getAllBlgsByAuthorId(authorId);
  }


  function formatTimestamp(timestamp) {
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    const formatted = new Date(timestamp).toLocaleString(undefined, options);
    return (
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {formatted}
      </Typography>
    );
  }

  if (blogList) {
    return (
      <>
        <h4>
          <a
            href="/dashboard"
            style={{
              fontSize: "16px",
              color: "#863812",
              textDecoration: "none",
              marginBottom: "2rem",
            }}
          >
            ← Go back to Dashboard
          </a>
        </h4>
        {blogList.map((item) => (
          <Card className="blogCards" key={item.id}>
            <CardContent style={{ overflowWrap: "break-word" }}>
              <Typography
                sx={{
                  fontSize: 14,
                  fontFamily: "Poppins",
                  display: "flex",
                  alignItems: "center",
                }}
                color="text.secondary"
                gutterBottom
              >
                <Typography
                  sx={{ fontSize: 13, fontFamily: "Poppins", padding: "0" }}
                  color="#863812"
                >
                  &nbsp;{item.authorUsername}
                </Typography>
              </Typography>
              <Typography
                variant="h5"
                component="div"
                style={{
                  fontFamily: "Poppins",
                  fontWeight: "bold",
                  color: "#863812",
                }}
              >
                {item.title}
              </Typography>
              {formatTimestamp(item.updatedAt)}
              <div className="description">{item.description}</div>
            </CardContent>
            <hr style={{ border: "1px solid #e0d8c3" }} />

            <Button
              size="small"
              disableElevation
              variant="contained"
              style={{
                backgroundColor: "#863812",
                marginRight: "0.5rem",
                marginBottom: "0.5rem",
              }}
              onClick={(e) => navigate('/editblog')}
            >
              Edit
            </Button>

            <Button
              size="small"
              disableElevation
              variant="outlined"
              style={{
                marginRight: "0.5rem",
                marginBottom: "0.5rem",
              }}
              onClick={() => deleteBlogs(item.id)}
            >
              Delete
            </Button>


          </Card>
        ))}
      </>
    );
  }
  return (
    <>
      <h4>
        <a
          href="/dashboard"
          style={{
            fontSize: "16px",
            color: "#863812",
            textDecoration: "none",
            marginBottom: "2rem",
          }}
        >
          ← Go back to Dashboard
        </a>
      </h4>
      <h1 style={{ marginBottom: "1rem", textAlign: "center" }}>
        No blog found
      </h1>
    </>
  );
}
