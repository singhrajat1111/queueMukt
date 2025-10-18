import React, { useState } from "react";

const DoctorDashboard = () => {
  const [queue, setQueue] = useState([
    { id: 8, name: "Mohd. Adnan", status: "Waiting" },
    { id: 9, name: "Tabrez", status: "Current" },
    { id: 10, name: "Sunny", status: "Waiting" },
  ]);


  const nowServing = queue.find((p) => p.status === "Current");

  const handleMarkAsDone = (id) => {
    let updatedQueue = queue.map((patient) =>
      patient.id === id ? { ...patient, status: "Done" } : patient
    );

    const nextPatient = updatedQueue.find((p) => p.status === "Waiting");
    if (nextPatient) {
      updatedQueue = updatedQueue.map((p) =>
        p.id === nextPatient.id ? { ...p, status: "Current" } : p
      );
    }

    setQueue(updatedQueue.filter((p) => p.status !== "Done"));
    alert(`Patient #${id} marked as done ✅`);
  };

  const handleSkip = (id) => {
    const patient = queue.find((p) => p.id === id);
    if (!patient) return;

    const updatedQueue = queue
      .map((p) =>
        p.id === id ? { ...p, status: "Waiting" } : p
      )
      .filter((p) => p.id !== id);

    updatedQueue.push(patient); 
    setQueue(updatedQueue);
    alert(`Patient #${id} skipped ⏭️ (moved to end)`);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-blue-50 font-sans min-h-screen">
      <div className="bg-white rounded-lg shadow-md p-6 mb-6 text-center">
        <h1 className="text-xl font-bold text-blue-900">
          QUEUE MUKT
        </h1>
        <h2 className="text-3xl font-bold text-blue-900 mt-2">
          Doctor Dashboard
        </h2>
      </div>

      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Queue Status</h2>
        {nowServing ? (
          <div className="bg-green-100 p-4 rounded-md mb-2 flex items-center justify-between">
            <span className="text-green-900 font-semibold">
              Now Serving: #{nowServing.id} – {nowServing.name}
            </span>
            <button
              onClick={() => handleMarkAsDone(nowServing.id)}
              className="px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              Done
            </button>
          </div>
        ) : (
          <p className="text-blue-700">No active patient</p>
        )}
      </div>

      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">
          Waiting Patients
        </h2>
        <ul className="space-y-3">
          {queue
            .filter((p) => p.status === "Waiting")
            .map((patient) => (
              <li
                key={patient.id}
                className="flex justify-between items-center p-3 bg-blue-50 rounded-md"
              >
                <span className="text-blue-900 font-medium">
                  #{patient.id} – {patient.name}
                </span>
                <button
                  onClick={() => handleSkip(patient.id)}
                  className="px-3 py-1 bg-yellow-400 text-white rounded-md hover:bg-yellow-500"
                >
                  Skip
                </button>
              </li>
            ))}
        </ul>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-4 text-center">
        <p className="text-blue-900">
          Total in Queue: <b>{queue.length}</b>
        </p>
      </div>
    </div>
  );
};

export default DoctorDashboard;
