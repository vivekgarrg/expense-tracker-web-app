import "./App.css";
import NavBar from "./pages/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tracker from "./pages/Tracker";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="/" element={<Tracker />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
