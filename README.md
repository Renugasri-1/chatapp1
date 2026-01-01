📌 Project Overview
This project is a scalable MERN-based chat application built as part of an assignment to demonstrate REST API development, authentication, role-based access control, and frontend integration.
The application provides secure user authentication, admin-controlled group chat management, and real-time messaging, along with a basic frontend UI for testing protected APIs.

🚀 Features
🔐 Authentication & Authorization
User registration and login
Password hashing using bcrypt
JWT-based authentication
Role-based access control:
Admin: Can create groups, add/remove users, rename groups
User: Can participate in chats and send messages

💬 Chat Functionality
One-to-one chat
Group chat
Admin-controlled group management
Send and fetch messages
User search functionality

🧱 Backend (Primary Focus)
RESTful APIs built using Node.js & Express.js
JWT-protected routes
Role-based access enforcement
CRUD operations on:
Users
Chats
Groups
Messages
Centralized error handling & validation
API versioning (/api/v1/...)
Modular and scalable project structure

🖥️ Frontend (Supportive)
Built using React.js
UI styled with Chakra UI

Features:
Register & Login
Access protected chat dashboard
Create groups (admin only)
Send and receive messages
Display API success & error messages

🛠 Tech Stack
Frontend
React.js
Chakra UI
Axios

Backend
Node.js
Express.js
JWT Authentication
bcrypt

Database
MongoDB Atlas (Cloud-hosted MongoDB)

Tools
Postman (API Documentation & Testing)
Git & GitHub

📂 Project Structure (Simplified)
chatapp1/
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   └── server.js
├── frontend/
│   └── src/
├── postman/
│   └── MERN-Chat-App.postman_collection.json
└── README.md

📄 API Documentation
API documentation is provided using Postman.
Includes authentication APIs
Role-based protected routes
CRUD operations for chats and messages
JWT usage clearly defined


To test APIs:
Import the collection into Postman
Login to get JWT token
Use token in Authorization → Bearer Token for protected APIs

🔑 Roles & Access Control
Role	Permissions
Admin	Create groups, add/remove users, rename groups
User	Access chats, send & receive messages
Role checks are enforced at the API level.

⚙️ Environment Setup
Backend .env file
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/chatapp
JWT_SECRET=your_jwt_secret
PORT=5000

▶️ How to Run the Project
Backend
cd backend
npm install
npm start

Frontend
cd frontend
npm install
npm start

🗄️ MongoDB Atlas Note (IMPORTANT)
This project uses a MongoDB Atlas free-tier (M0) cluster.
⚠️ Important Note:
MongoDB Atlas automatically pauses free-tier clusters after prolonged inactivity.
If APIs fail due to database connection issues, please resume the cluster from the Atlas dashboard before testing.
All data is retained during pause.

🔒 Security Practices
Password hashing with bcrypt
JWT token-based authentication
Protected routes using middleware
Input validation & sanitization
Secure role-based access enforcement

📈 Scalability Considerations
Modular backend structure (controllers, routes, middleware)
Easy to add new modules (notifications, file sharing, etc.)
Can be extended with:
Redis caching
Docker containerization
Microservices architecture
Load balancing

👤 Author
Renuga Sri
MCA Student | Full Stack Developer
GitHub: https://github.com/Renugasri-1
