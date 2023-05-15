import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

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

function SingleBlog({ item }) {
  const navigate = useNavigate();

  return (
    <>
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
            <a onClick={(e) => navigate(`/blog/${item.id}`, { state: item })}>
              {item.title}
            </a>
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
          <div className="description">{item.description}</div>
        </CardContent>
      </Card>
    </>
  );
}

export default SingleBlog;
