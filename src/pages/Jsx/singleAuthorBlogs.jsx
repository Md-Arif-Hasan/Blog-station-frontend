
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
 import Button from "@mui/material/Button";

 import Alert from "../../components/Jsx/dialog";
 import { AuthContext } from "../../contexts/contexts";
 import { useContext } from "react";

import { getUserByUsername } from "../../services/user";
import { getAllBlogsByAuthorId, deleteBlog} from "../../services/blogList";


function formatTimestamp(timestamp) {
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZone: "UTC",
  };
  const formatted = new Date(timestamp).toLocaleString("en-US", options);
  return (
    <Typography sx={{ mb: 1.5 }} color="text.secondary">
      {formatted}
    </Typography>
  );
}






function AllBlogs({blogAdded, setPageNumber, setPageSize, setBlogCount}) {
  const [blogs, setBlogs] = useState(null);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [authorId, setAuthorId] = useState("");
  const [username, setUsername] = useState("");
  const { checkLoggedIn, loggedInUsername } = useContext(AuthContext);


  useEffect(() => {


    if (!checkLoggedIn()) {
      navigate("/dashboard");
    }
    const pgNo = searchParams.get('pageNo');
    const pgSize = searchParams.get('pageSize');
    if(pgNo && pgNo!== 'null') setPageNumber(pgNo);
    if(pgSize && pgSize!== 'null') setPageSize(pgSize);


    async function getUser() {
            const user = await getUserByUsername(loggedInUsername);
            setAuthorId(user.data.id);
            setUsername(user.data.username)
            await BlogsByAuthorId(user.data.id, pgNo, pgSize);
          }
          getUser();

  }, [ blogAdded, searchParams, username]);



  const BlogsByAuthorId = async (authorId, pageNumber, pageSize) => {
    let allBlogs = null;
      allBlogs = await getAllBlogsByAuthorId(authorId, pageNumber, pageSize);

    if(typeof(allBlogs) === 'object'){
      setBlogs(allBlogs.data.rows);
      setBlogCount(allBlogs.data.count);
    } else {
      setBlogs(null);
      setBlogCount(0);
    }
  }


    const deleteBlogs = async (blogId) => {
    const response = await deleteBlog(blogId);
    console.log(response.data);
    if(response.status === 200){
        console.log("Blog deleted!")
    }
    await BlogsByAuthorId(authorId,1, 5);
  }


  
  if(blogs) {
    return (
    <>
      {blogs.map((item) => (
        <Card className="blogCards" key={item.id}>
          <CardContent style={{ overflowWrap: "break-word" }}>

    
           
            <Typography
              variant="h5"
              component="div"
              style={{
                fontFamily: "Poppins",
                fontWeight: "bold",
                color: "#863812",
              }}
            >
               <a onClick={(e) => navigate(`/blogs/${item.id}`, {state:item})}> {item.title} </a>
            </Typography>

            <Typography
              variant="h5"
              component="div"
              style={{
                fontFamily: "Poppins",
                fontWeight: "italic",
                color: "#25383C",
              }}
            >
              Author: {item.author.username}
            </Typography>

            {formatTimestamp(item.updatedAt)}
            <div className="description">
              {item.description}
            </div>
          </CardContent>




            <Button
              size="small"
              disableElevation
              variant="contained"
              style={{
                backgroundColor: "#863812",
                marginRight: "0.5rem",
                marginBottom: "0.5rem",
              }}
              onClick={(e) => navigate(`/blogs/${item.id}/edit`, {state:item})}
            >
              Edit
            </Button>

          <Alert submit={()=>deleteBlogs(item.id)}/>

        </Card>
        
      ))}
    </>
  );
  } 
    return (
      <>
      <h1>Sorry! No blog found</h1>
      </>
    )
  
}


export default function BlogList({blogAdded, setPageNumber, setPageSize, setBlogCount}) {
  return (
        <AllBlogs blogAdded={blogAdded} setPageNumber={setPageNumber}  setPageSize={setPageSize}  setBlogCount= {setBlogCount}/>
  );
}


