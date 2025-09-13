QueueMukt – Hospital Waiting Area Removal App

🚀 QueueMukt is a full-stack web application built with the MERN stack (MongoDB, Express.js, React, Node.js).
It aims to reduce hospital waiting times by providing a smart queue management system where patients can register digitally, receive token numbers, track their position in real-time, and get notified when their turn is near. Doctors and admins can efficiently manage queues and view detailed analytics.

✨ Features

📝 Patient Registration – Register via app/QR/reception.

🎟️ Digital Token Generation – Auto-generated with priority handling (emergency cases).

📱 Smart Queue Management – Real-time queue status & estimated wait times.

👩‍⚕️ Doctor/Staff Dashboard – Upcoming patients, reordering, and emergency overrides.

🔔 Notifications & Alerts – Push/SMS alerts for patients.

✅ Consultation & Exit – Seamless doctor-patient interaction.

📊 Analytics & Reports – Average waiting time, peak hours, and performance data.

🛠️ Tech Stack

Frontend: React.js, Tailwind CSS

Backend: Node.js, Express.js

Database: MongoDB (Mongoose)

Authentication: JWT (JSON Web Token)

Notifications: Twilio / Firebase (optional)

📂 Project Structure
QueueMukt/
│── backend/          # Express + Node.js API
│   ├── models/       # Mongoose schemas
│   ├── routes/       # API routes
│   ├── controllers/  # Business logic
│   └── server.js     # Entry point
│
│── frontend/         # React.js frontend
│   ├── src/
│   │   ├── components/  
│   │   ├── pages/       
│   │   └── App.js     
│
│── README.md
│── package.json

⚙️ Installation & Setup
1. Clone the repository
git clone https://github.com/your-username/QueueMukt.git
cd QueueMukt

2. Install dependencies
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install

3. Setup environment variables

Create a .env file inside backend/ with:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

4. Run the app
# Backend
cd backend
npm start

# Frontend (in another terminal)
cd frontend
npm start


App will run on:

Frontend → http://localhost:3000

Backend → http://localhost:5000

🚀 Future Scope

AI-based wait-time prediction.

Multi-hospital support.

Integration with online appointment booking.

Mobile app version for patients.

📸 Screenshots

(Add some screenshots here once UI is ready)

🤝 Contributing

Pull requests are welcome! If you’d like to add features or fix issues, feel free to fork the repo and submit a PR.
