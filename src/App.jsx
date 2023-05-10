
import Register from './pages/Jsx/register';
import Login from './pages/Jsx/login';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Dashboard from './pages/Jsx/dashboard';
import Homepage from './pages/Jsx/homepage';
import Profile from './pages/Jsx/profile';
import CreateBlog from './pages/Jsx/createBlog';
import Users from './pages/Jsx/registeredusers';
import MyBlogs from './pages/Jsx/ownBlogs';
import EditBlog from './pages/Jsx/editBlog';
import FullBlog from './pages/Jsx/fullBlog';




function App() {
  return (
    <>
      <Routes>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/dashboard/:pagenumber" element={<Dashboard />}/>

        <Route path="/" element={<Homepage />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/registeredusers" element={<Users />}/>
        <Route path="/blogs/create" element={<CreateBlog />}/>
        <Route path="/blogs/users/:username" element={<MyBlogs />}/>
        <Route path="/blogs/:blogId/edit" element={<EditBlog />}/>
        <Route path="/blogs/:blogId" element={<FullBlog />}/>


      </Routes>
    </>
  )
}

export default App