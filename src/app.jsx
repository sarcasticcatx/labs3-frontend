import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AccommodationList from "./pages/AccommodationList";
import Homepage from "./pages/Homepage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/accommodation/:id" element={<AccommodationList />} />
      </Routes>
    </Router>
  );
}
