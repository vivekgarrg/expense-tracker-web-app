import "./App.css";
import NavBar from "./pages/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tracker from "./pages/Tracker";
import BasicModal from "./Components/BasicModal";
import CustomSnackbar from "./Components/CustomSnackBar";

function App() {
  return (
    <Router>
      <BasicModal />
      <CustomSnackbar />
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="/" element={<Tracker />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
