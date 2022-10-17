import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Home = React.lazy(() => import("./home"));
const About = React.lazy(() => import("./about"));
const AddBrand = React.lazy(() => import("./add-brand"));

const AppViews = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/add-brand" element={<AddBrand />} />

        <Route path="*" element={<Home />} />
      </Routes>
    </Suspense>
  );
};

export default AppViews;
