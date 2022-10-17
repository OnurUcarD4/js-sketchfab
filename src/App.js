import "./App.css";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Views from "views";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Views />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
