import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";

import { getAllBlogs } from "../../services/blogList";

import "../Styles/blogs.css";

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


function AllBlogs({blogAdded}) {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    async function fetchBlogs() {
      const allBlogs = await getAllBlogs();
      console.log(allBlogs.data);

      console.log(allBlogs.data);


      console.log(typeof(allBlogs));
      if(typeof(allBlogs) === 'object'){
        setBlogs(allBlogs.data);
      }
    }
    fetchBlogs();
  }, [blogAdded]);


  
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
              {item.title}
            </Typography>


            {formatTimestamp(item.updatedAt)}
            <div className="description">
              {item.description}
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
  } 
    return (
      <>
      <h1>No blog found</h1>
      </>
    )
  
}

export default function BlogList({blogAdded}) {
  return (
        <AllBlogs blogAdded={blogAdded}/>
  );
}