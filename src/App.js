import './App.css';
import Navbar from './Component/Common/Header/navbar.js';
import { Route, Routes } from 'react-router-dom';
import Login from './Component/Common/Login/login.js';
import Cookies from 'cookies';
import Party from './Component/Admin/Pages/Party/party.js';
import Dashboard from './Component/Admin/Pages/Dashbord/dashbord.js';
import Election from './Component/Admin/Pages/Election/election.js'
import { adminNav } from './Component/Admin/Header/adminNav.js';
import { userNav } from './Component/User/Header/userNav.js';
// import Cookies from "js-cookie";



function App() {

  let role = Cookies.get("role");

  if (role === "admin") {
    return (
      <>
        <Navbar data={adminNav} />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Election" element={<Election />} />
          <Route path="/party" element={<Party />} />
          <Route path="/Student" element={""} />
          <Route path="*" element={""} />
        </Routes>
      </>
    );
  } else if (role === "user") {
    return (
      <>
        <Navbar data={userNav} />
        <Routes>
          <Route path="/" element={""} />
          <Route path="/FacultyCo" element={""} />
          <Route path="/Faculty" element={""} />
          <Route path="/Student" element={""} />
          <Route path="*" element={""} />
        </Routes>
      </>
    );
  } else if (!role) {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    )

  }
}

export default App;