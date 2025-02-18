import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";
import TripPage from "./pages/tripPage/TripPage";
import JoinPage from "./pages/joinPage/JoinPage";
import CreatePage from "./pages/createPage/CreatePage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/trip/:uuid" element={<TripPage />} />
        <Route path="/trip/:uuid/join" element={<JoinPage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Router>
  );
}

export default App;
