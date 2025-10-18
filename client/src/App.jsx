import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import Navbar from "../components/Navbar";
import PatientDashboard from "../pages/patientDashboard";
import DoctorDashboard from "../pages/DoctorDashboard";

function App() {
  return (
    <Router>
      <Navbar />
      
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/patient" element={<PatientDashboard />} />
          <Route path="/doctor" element={<DoctorDashboard />} />
        </Routes>
    </Router>
  );
}


export default App;
