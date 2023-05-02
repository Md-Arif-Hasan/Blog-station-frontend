import api from "../api";

const getAllBlogs = async () => {
    try {
        const response = await api.get("/blog");
        return response;
    } catch (err) {
        return err.response;
    }
}

const getBlogsByAuthorId = async (authorId) => {
    try {
        const response = await api.get("/blog/author/"+ authorId);
        return response;
    } catch (err) {
        return err.response;
    }
}


const createBlog = async (newBlog) => {
    try {
        const response = await api.post("/blog", newBlog, { withCredentials: true });
        return response;
    } catch (err) {
        return err.response;
    }
}


const editBlog = async (blogId, editedBlog) => {
    try {
        const response = await api.put("/blog/"+ blogId, editedBlog, { withCredentials: true });
        return response;
    } catch (err) {
        return err.response;
    }
}

const deleteBlog = async (blogId) => {
    try {
        const response = await api.delete("/blog/"+ blogId, { withCredentials: true });
        return response;
    } catch (err) {
        return err.response;
    }
}




export { getAllBlogs,getBlogsByAuthorId, createBlog , editBlog, deleteBlog};