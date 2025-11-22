📝 MERN Stack Blog Website

A simple and modern Blog Application built using the MERN stack (MongoDB, Express.js, React.js, Node.js).
Users can create, edit, delete, and read blog posts through a clean and responsive interface.

🚀 Features
✍️ Blog Features

Create new blog posts

Edit existing posts

Delete posts

View full blog details

Display all posts on homepage

👤 User Features (Optional)

User authentication (Login/Register)

JWT-based protected routes

Profile page

🎨 UI/UX

Responsive React frontend

Clean layout for reading blogs

Modern component-based design

🛠️ Tech Stack
Frontend

React.js

Axios

React Router

Bootstrap / TailwindCSS (optional)

Backend

Node.js

Express.js

MongoDB & Mongoose

Database

MongoDB Atlas / Local MongoDB

📂 Project Structure
mern-blog/
│── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── .env
│
│── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   ├── index.js
│   └── package.json
│
│── README.md

⚙️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/your-username/mern-blog.git
cd mern-blog

🧩 Backend Setup (Node + Express)
2️⃣ Install backend dependencies
cd backend
npm install

3️⃣ Create .env file

Add the following:

MONGO_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_secret_key

4️⃣ Start backend server
npm start


Backend runs on → http://localhost:5000

🎨 Frontend Setup (React)
5️⃣ Install frontend dependencies
cd ../frontend
npm install

6️⃣ Start frontend
npm start


Frontend runs on → http://localhost:3000

🔗 API Routes (Basic Example)
POST /api/posts

Create new blog post

GET /api/posts

Get all blog posts

GET /api/posts/:id

Get single post

PUT /api/posts/:id

Update post

DELETE /api/posts/:id

Delete post
