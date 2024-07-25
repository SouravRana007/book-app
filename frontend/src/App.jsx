import React from "react";
import Home from "./home/Home";
import { Navigate, NavigationType, Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import { ToastContainer } from "react-toastify";
import { useAuth } from "./context/AuthProvider";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="dark:bg-white dark:text-black">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
