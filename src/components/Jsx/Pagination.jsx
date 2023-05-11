import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";

export default function BasicPagination({
  changePage,
  pageSize,
  pageNumber,
  blogCount,
}) {
  const navigate = useNavigate();
  let totalPages = 5;
  if (blogCount) {
    totalPages = Math.ceil(blogCount / pageSize);
    console.log(
      "Total pages: " +
        totalPages +
        " " +
        blogCount +
        " " +
        pageSize +
        " " +
        pageNumber
    );
  }

  const onChangePage = (event, value) => {
    navigate(`.?pageNo=${value}&pageSize=${pageSize}`);
    changePage(value);
  };

  return (
    <Stack spacing={2} style={{ display: "flex" }}>
      <Pagination
        color="primary"
        count={totalPages}
        page={parseInt(pageNumber) || 1}
        shape="rounded"
        onChange={onChangePage}
        style={{ justifyContent: "center" }}
      />
    </Stack>
  );
}
