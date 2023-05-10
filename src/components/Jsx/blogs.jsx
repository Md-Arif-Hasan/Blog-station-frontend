import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

import { getAllBlogs} from "../../services/blogList";

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


function AllBlogs({blogAdded, setPageNumber, setPageSize, setBlogCount}) {
  const [blogs, setBlogs] = useState(null);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();


  useEffect(() => {

    const pgNo = searchParams.get('pageNo');
    const pgSize = searchParams.get('pageSize');
    if(pgNo && pgNo!== 'null') setPageNumber(pgNo);
    if(pgSize && pgSize!== 'null') setPageSize(pgSize);

    fetchAllBlogs(pgNo, pgSize);
  }, [blogAdded, searchParams]);

  const fetchAllBlogs = async (pageNumber, pageSize) => {
    let allBlogs = null;

      allBlogs = await getAllBlogs(pageNumber, pageSize);
     console.log(allBlogs);

  
    if(typeof(allBlogs) === 'object'){
      setBlogs(allBlogs.data.rows);
      setBlogCount(allBlogs.data.count);
    } else {
      setBlogs(null);
      setBlogCount(0);
    }
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
        </Card>
      ))}
    </>
  );
  } 
    return (
      <>
      <h1 className="notFound">No blog found</h1>
      </>
    )
  
}


export default function BlogList({blogAdded, setPageNumber, setPageSize, setBlogCount}) {
  return (
        <AllBlogs blogAdded={blogAdded} setPageNumber={setPageNumber}  setPageSize={setPageSize}  setBlogCount= {setBlogCount}/>
  );
}