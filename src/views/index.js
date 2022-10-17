import AppLayout from "layout/app-layout";
import React from "react";
import { Route, Routes } from "react-router-dom";

const Views = () => {
  return (
    <Routes>
      <Route path="/*" element={<AppLayout />}></Route>
    </Routes>
  );
};

export default Views;
