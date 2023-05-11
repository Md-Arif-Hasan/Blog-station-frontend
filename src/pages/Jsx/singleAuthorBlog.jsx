import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {useState } from "react";
import Button from "@mui/material/Button";
import Alert from "../../components/Jsx/dialog";

function SingleBlog({ item }) {
  const [alertOpen, setAlertOpen] = useState(false);

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
            <a onClick={(e) => navigate(`/blogs/${item.id}`, { state: item })}>
              {" "}
              {item.title}{" "}
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
        <Button
          size="small"
          disableElevation
          variant="contained"
          style={{
            backgroundColor: "#863812",
            marginRight: "0.5rem",
            marginBottom: "0.5rem",
          }}
          onClick={(e) => navigate(`/blogs/${item.id}/edit`, { state: item })}
        >
          Edit
        </Button>

        <Button variant="outlined" onClick={() => setAlertOpen(true)}>
          Delete
        </Button>
        {alertOpen && (
          <Alert
            submit={() => deleteBlogs(item.id)}
            close={() => setAlertOpen(false)}
          />
        )}
      </Card>
    </>
  );
}

export default SingleBlog;
