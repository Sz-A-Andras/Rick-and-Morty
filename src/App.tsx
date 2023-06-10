import { Routes, Route } from "react-router-dom";
import Profile from "./Profile";
import Home from "./Home";

const App = () => {
  return (
    <Routes>
      <Route path="/Profile" element={<Profile />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default App;
