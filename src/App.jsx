import Register from "./pages/RegisterPage/register";
import Login from "./pages/LoginPage/login";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard/dashboard";
import Homepage from "./pages/HomePage/homepage";
import Profile from "./pages/ProfilePage/profile";
import CreateBlog from "./pages/CreateBlogPage/createBlog";
import Users from "./pages/AuthorsPage/registeredusers";
import MyBlogs from "./pages/OwnBlogs/ownBlogs";
import EditBlog from "./pages/EditBlog/editBlog";
import FullBlog from "./pages/ViewFullBlog/fullBlog";

function App() {
  return (
    <>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/:pagenumber" element={<Dashboard />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/registeredusers" element={<Users />} />
        <Route path="/blogs/create" element={<CreateBlog />} />
        <Route path="/blogs/users/:username" element={<MyBlogs />} />
        <Route path="/blogs/:blogId/edit" element={<EditBlog />} />
        <Route path="/blogs/:blogId" element={<FullBlog />} />
      </Routes>
    </>
  );
}

export default App;
