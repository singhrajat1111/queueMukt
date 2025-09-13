import { Routes, Route, Link, NavLink } from "react-router-dom";
import PatientDashboard from "../pages/patientDashboard";
import DoctorDashboard from "../pages/DoctorDashboard";
import Landing from "../pages/Landing";  


function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">
        Welcome to QueueMukt App!!
      </h1>
      <p className="text-gray-700 mb-6">Please select your role to continue:</p>

      <div className="flex gap-4">
        <Link
          to="/patient"
          className="px-6 py-3 bg-blue-900 text-white rounded-md shadow hover:bg-blue-800 transition"
        >
          Login as Patient
        </Link>
        <Link
          to="/doctor"
          className="px-6 py-3 bg-blue-100 text-blue-900 rounded-md shadow hover:bg-blue-200 transition"
        >
          Login as Doctor
        </Link>
      </div>
    </div>
  );
}

export default Home;
