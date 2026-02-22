import { BrowserRouter, Routes, Route } from "react-router";
import Register from "./features/auth/pages/Register";
import Login from "./features/auth/pages/Login";

import React from "react";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
