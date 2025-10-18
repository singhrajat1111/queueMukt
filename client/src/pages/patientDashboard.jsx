import React, { useState } from "react";
const PatientDashboard = () => {
  const [userName, setUserName] = useState("Rajat");
  const [selectedDate, setSelectedDate] = useState("12 Sep 2025");
  const [selectedTime, setSelectedTime] = useState("4:00 PM - 4:30 PM");
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [yourToken, setYourToken] = useState(12);
  const [currentToken, setCurrentToken] = useState(8);
  const [estimatedWait, setEstimatedWait] = useState("20 mins");
  const [notification, setNotification] = useState("You're next!");
  const [queue, setQueue] = useState([
    { id: 8, name: "Munna Tripathi", status: "Waiting" },
    { id: 9, name: "Mohd. Adnan", status: "Skipped" },
  ]);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const doctors = [
    { id: 1, name: "Dr. Rajat Singh", specialty: "Cardiology", experience: "10 years" },
    { id: 2, name: "Dr. Adnan Ali", specialty: "Orthopedics", experience: "5 years" },
  ];

  const handleLoginAsPatient = () => setIsLoggedIn(true);

  const handleDoctorSelect = (doctor) => setSelectedDoctor(doctor);

  const handleConfirmAppointment = () => {
    if (selectedDoctor) {
      alert(`Appointment confirmed with ${selectedDoctor.name} on ${selectedDate} at ${selectedTime}`);
      setYourToken(currentToken + 4); 
      setNotification("Appointment confirmed! You're in the queue.");
    } else {
      alert("Please select a doctor.");
    }
  };

  const handleSearchChange = (e) => setSearchQuery(e.target.value);

  const filteredDoctors = doctors.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const progress = Math.min((currentToken / yourToken) * 100, 100);

  return (
    <div className="max-w-md mx-auto p-4 bg-blue-50 font-sans min-h-screen">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6 text-center">
        <h1 className="text-xl font-bold text-blue-900">QUEUE MUKT</h1>
        <h2 className="text-3xl font-bold text-blue-900 mt-2">No more long waits.</h2>
        <h3 className="text-2xl font-bold text-blue-900">Book. Track. Consult.</h3>
        <div className="flex mt-4 space-x-2 justify-center">
          {!isLoggedIn ? (
            <>
              <button
                onClick={handleLoginAsPatient}
                className="px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800"
              >
                Login as Patient
              </button>
              <button className="px-4 py-2 bg-blue-100 text-blue-900 rounded-md hover:bg-blue-200">
                Login as Doctor
              </button>
            </>
          ) : (
            <p className="text-blue-900">Welcome back, {userName} 👋</p>
          )}
        </div>
      </div>

      {isLoggedIn && (
        <>
          <div className="bg-white rounded-lg shadow-md p-4 mb-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-2">Book Appointment</h2>
            <input
              type="text"
              placeholder="Search by Doctor / Specialization..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full mb-3 p-2 border border-blue-200 rounded-md"
            />
            <div className="grid grid-cols-2 gap-4">
              {filteredDoctors.map((doctor) => (
                <div
                  key={doctor.id}
                  onClick={() => handleDoctorSelect(doctor)}
                  className={`p-3 border rounded-md cursor-pointer ${
                    selectedDoctor?.id === doctor.id
                      ? "border-blue-500 bg-blue-50"
                      : "border-blue-200"
                  }`}
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-full mx-auto mb-2"></div>
                  <p className="text-center text-blue-900 font-semibold">{doctor.name}</p>
                  <p className="text-center text-sm text-blue-600">{doctor.specialty}</p>
                  <p className="text-center text-sm text-blue-600">{doctor.experience}</p>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <select
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full p-2 border border-blue-200 rounded-md mt-1"
              >
                <option>12 Sep 2025</option>
              </select>
              <select
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                className="w-full p-2 border border-blue-200 rounded-md mt-2"
              >
                <option>4:00 PM - 4:30 PM</option>
              </select>
              <button
                onClick={handleConfirmAppointment}
                className="w-full mt-4 px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800"
              >
                Confirm Appointment
              </button>
            </div>
          </div>


          <div className="bg-white rounded-lg shadow-md p-4 mb-6">
            <h2 className="text-2xl font-bold text-blue-900">My Queue</h2>
            <div className="flex space-x-4 mt-2">
              <div className="flex-1">
                <p className="text-xl font-bold text-blue-900">Your Token: #{yourToken}</p>
                <p className="text-blue-900">Current Token: #{currentToken}</p>
                <div className="mt-2 h-2 bg-blue-200 rounded-full">
                  <div
                    className="h-full bg-teal-500 rounded-full"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>
              <div className="flex-1 bg-teal-100 p-4 rounded-md text-center">
                <p className="text-blue-900">Estimated wait:</p>
                <p className="text-xl font-bold text-blue-900">{estimatedWait}</p>
              </div>
            </div>
            <div className="mt-4 bg-blue-100 p-4 rounded-md flex items-center justify-between">
              <span className="text-blue-900">🔔 Notification:</span>
              <p className="ml-2 text-blue-900 font-semibold">{notification}</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-2xl font-bold text-blue-900">Today's Queue</h2>
            <ul className="mt-2 space-y-2">
              {queue.map((patient) => (
                <li
                  key={patient.id}
                  className={`flex justify-between items-center p-2 rounded-md shadow-sm ${
                    patient.status === "Current"
                      ? "bg-green-100"
                      : patient.status === "Skipped"
                      ? "bg-yellow-100"
                      : "bg-blue-50"
                  }`}
                >
                  <p className="text-blue-900">#{patient.id} - {patient.name}</p>
                  <span className="text-sm font-semibold text-blue-700">{patient.status}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default PatientDashboard;
