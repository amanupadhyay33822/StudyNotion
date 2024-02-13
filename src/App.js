import { Route, Routes } from "react-router-dom";
// import "./App.css";
import Homepage from "./pages/Homepage";
import Test from "./pages/Test";

function App() {
  return (
    <div className="w-screen min-h-screen flex flex-col font-inter bg-richblack-900">
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/test" element={<Test/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
