import React, { useState } from "react";

function AdminPortal() {
  const [doctors, setDoctors] = useState([
    { id: 1, name: "Dr. Johny Sins", specialization: "Cardiology" },
    { id: 2, name: "Dr. Lana Rhodes", specialization: "Orthopedics" },
  ]);

  const [patients, setPatients] = useState([
    { id: 101, name: "Mohd. Adnan" },
    { id: 102, name: "Tabrez" },
    { id: 103, name: "Sunny" },
  ]);

  const [newDoctor, setNewDoctor] = useState({ name: "", specialization: "" });
  const [newPatient, setNewPatient] = useState("");

  const addDoctor = () => {
    if (!newDoctor.name || !newDoctor.specialization) return;
    setDoctors([...doctors, { id: Date.now(), ...newDoctor }]);
    setNewDoctor({ name: "", specialization: "" });
  };

  const removeDoctor = (id) => {
    setDoctors(doctors.filter((doc) => doc.id !== id));
  };

  const addPatient = () => {
    if (!newPatient) return;
    setPatients([...patients, { id: Date.now(), name: newPatient }]);
    setNewPatient("");
  };

  const removePatient = (id) => {
    setPatients(patients.filter((p) => p.id !== id));
  };

  return (
    <div className="min-h-screen bg-blue-50">
      <header className="bg-white shadow p-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-700">QueueMukt Admin Portal</h1>
        <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
          Logout
        </button>
      </header>

      <main className="max-w-6xl mx-auto p-6 space-y-10">
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Manage Doctors</h2>
          <div className="bg-white p-6 rounded-xl shadow space-y-4">
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Doctor Name"
                value={newDoctor.name}
                onChange={(e) =>
                  setNewDoctor({ ...newDoctor, name: e.target.value })
                }
                className="flex-1 border rounded-lg px-3 py-2"
              />
              <input
                type="text"
                placeholder="Specialization"
                value={newDoctor.specialization}
                onChange={(e) =>
                  setNewDoctor({ ...newDoctor, specialization: e.target.value })
                }
                className="flex-1 border rounded-lg px-3 py-2"
              />
              <button
                onClick={addDoctor}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Add
              </button>
            </div>

            <ul className="divide-y divide-gray-200">
              {doctors.map((doc) => (
                <li
                  key={doc.id}
                  className="flex justify-between items-center py-3"
                >
                  <span className="text-gray-700">
                    {doc.name} – <span className="italic">{doc.specialization}</span>
                  </span>
                  <button
                    onClick={() => removeDoctor(doc.id)}
                    className="text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Manage Patients</h2>
          <div className="bg-white p-6 rounded-xl shadow space-y-4">
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Patient Name"
                value={newPatient}
                onChange={(e) => setNewPatient(e.target.value)}
                className="flex-1 border rounded-lg px-3 py-2"
              />
              <button
                onClick={addPatient}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
              >
                Add
              </button>
            </div>

            <ul className="divide-y divide-gray-200">
              {patients.map((p) => (
                <li
                  key={p.id}
                  className="flex justify-between items-center py-3"
                >
                  <span className="text-gray-700">{p.name}</span>
                  <button
                    onClick={() => removePatient(p.id)}
                    className="text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">System Stats</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow text-center">
              <h3 className="text-lg font-medium">Total Doctors</h3>
              <p className="text-2xl text-blue-600 font-bold">{doctors.length}</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow text-center">
              <h3 className="text-lg font-medium">Total Patients</h3>
              <p className="text-2xl text-green-600 font-bold">{patients.length}</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow text-center">
              <h3 className="text-lg font-medium">Avg Wait Time</h3>
              <p className="text-2xl text-gray-700 font-bold">~15 mins</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default AdminPortal;
