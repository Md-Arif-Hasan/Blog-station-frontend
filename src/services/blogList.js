import api from "../api";

const getAllBlogs = async (pageNumber) => {
  try {
    const response = await api.get(
      `/blog?pageNo=${pageNumber}&pageSize=5`
    );
    return response;
  } catch (err) {
    return err.response;
  }
};

const getAllBlogsByAuthorId = async (authorId, pageNumber) => {
  try {
    const response = await api.get(`/blog/author/${authorId}?pageNo=${pageNumber}&pageSize=5`);
    return response;
  } catch (err) {
    return err.response;
  }
};

const createBlog = async (newBlog) => {
  try {
    const response = await api.post(`/blog`, newBlog, {
      withCredentials: true,
    });
    return response;
  } catch (err) {
    return err.response;
  }
};

const editBlog = async (blogId, editedBlog) => {
  try {
    const response = await api.put(`/blog/` + blogId, editedBlog, {
      withCredentials: true,
    });
    return response;
  } catch (err) {
    return err.response;
  }
};

const deleteBlog = async (blogId) => {
  try {
    const response = await api.delete(`/blog/` + blogId, {
      withCredentials: true,
    });
    return response;
  } catch (err) {
    return err.response;
  }
};

export { getAllBlogs, getAllBlogsByAuthorId, createBlog, editBlog, deleteBlog };
