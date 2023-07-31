import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import MainRegisterForm from "../components/register_form/MainRegisterForm";
import MainLoginForm from "../components/login_form/MainLoginForm";
import { useUserContext } from "../context/UserContext";
import MainProfile from "../components/profile/MainProfile";
import EditFormUser from "../components/edit_form/EditFormUser";
import MainAdminEditUsers from "../components/edit_form/MainAdminEditUsers";
import HomePage from "./home/HomePage";

function MainRoutes() {
  const { user } = useUserContext();
  console.log(user);
  return (
    <div className="pt-14 bg-blue-400 h-screen">
      <Routes>
        <Route exact path="/" Component={HomePage} />
        <Route exact path="/users/register" Component={MainRegisterForm} />
        <Route exact path="/users/login" Component={MainLoginForm} />
        <Route exact path="/users/profile" Component={MainProfile} />
        <Route exact path="/users/edit" Component={EditFormUser} />
        <Route exact path="/users/edit/:id" Component={MainAdminEditUsers} />
      </Routes>
    </div>
  );
}

export default MainRoutes;
