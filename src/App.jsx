import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {useKindeAuth} from "@kinde-oss/kinde-auth-react";

const App = () => {
  const { user, logout } = useKindeAuth();

  return (
    <BrowserRouter>
      <div>
        <Navbar user={user} logout={ logout} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/post/:id"
            element={user ? <Post /> : <Navigate to="/login" />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;