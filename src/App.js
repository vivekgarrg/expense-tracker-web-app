import "./App.css";
import NavBar from "./pages/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tracker from "./pages/Tracker";
import EditExpense from "./Components/EditExpense";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="/" element={<Tracker />} />
          <Route path="/expense/:id" element={<EditExpense />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
