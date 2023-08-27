import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Box } from "@mui/material";
import { Routes } from "react-router-dom";
import { Route } from "react-router";
import GatingInformation from "./pages/GetingInformation";
import MyPost from "./pages/MyPost";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<GatingInformation />} />
      <Route element={<PrivateRoute />}>
        <Route path="/my-post" element={<MyPost />} />
      </Route>
    </Routes>
  );
}

export default App;
