import {NavLink} from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import PatientDashboard from "../pages/patientDashboard";
import DoctorDashboard from "../pages/DoctorDashboard";
import Landing from "../pages/Landing";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-blue-50">
        {/* Navbar */}
        <nav className="bg-blue-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
          <h1 className="text-xl font-bold">QueueMukt</h1>
          <div className="space-x-4">
            <NavLink to="/" className={({isActive}) => isActive? "bg-cyan-500 rounded-2xl px-2 font-semibold": "hover:underline"}>Home</NavLink>
            <NavLink to="/patient" className={({isActive}) => isActive? "bg-cyan-500 rounded-2xl px-2 font-semibold": "hover:underline"}>Patient</NavLink>
            <NavLink to="/doctor" className={({isActive}) => isActive? "bg-cyan-500 rounded-2xl px-2 font-semibold": "hover:underline"}>Doctor</NavLink>
          </div>
        </nav>

        {/* Pages */}
        <div className="p-6">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/patient" element={<PatientDashboard />} />
            <Route path="/doctor" element={<DoctorDashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
