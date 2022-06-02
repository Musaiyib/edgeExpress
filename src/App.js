import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Auth from "./Auth/Auth";
import Home from "./vendor/pages/home/Home";
import Profile from "./vendor/pages/Profile/Profile";
function App() {
  return (
    <div className="App">
      <div className="blur" style={{ top: "-18%", right: "0" }}></div>
      <div className="blur" style={{ top: "36%", left: "-8rem" }}></div>
      <Router>
        <Routes>
          <Route path="/vendor" element={<Home />} />
          <Route path="/vendor/profile" element={<Profile />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
