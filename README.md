# MERN Stack Todo List Application

A full-stack Todo List application built with the MERN stack (MongoDB, Express.js, React.js, Node.js). This application provides a complete solution for managing tasks with a responsive frontend and a robust backend API.

## 🌟 Features

### Frontend
- **Intuitive UI** built with React.js
- **Responsive Design** that works on all devices
- **Real-time Updates** for a seamless user experience
- **Modern Styling** with Bootstrap 5

### Backend
- **RESTful API** built with Express.js
- **MongoDB** for persistent data storage
- **Mongoose ODM** for database modeling
- **CORS** enabled for secure cross-origin requests

## 🛠️ Tech Stack

- **Frontend**:
  - React.js v19.1.0
  - Bootstrap 5.3.6
  - Axios for HTTP requests
  - React Hooks for state management

- **Backend**:
  - Node.js with Express.js
  - MongoDB with Mongoose ODM
  - dotenv for environment variables
  - CORS for cross-origin requests

## 📦 Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher) or yarn
- MongoDB Atlas account or local MongoDB installation

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd FullStack
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd "Todo-List BE"

# Install dependencies
npm install

# Create .env file
echo "MONGO_API_KEY=your_mongodb_connection_string" > .env
echo "PORT=5000" >> .env

# Start the backend server
npm start
```

The backend server will start on `http://localhost:5000`

### 3. Frontend Setup

```bash
# Open a new terminal and navigate to frontend directory
cd "../Todo-List FE"

# Install dependencies
npm install

# Start the development server
npm start
```

The application will automatically open in your default browser at `http://localhost:3000`

## 📂 Project Structure

```
FullStack/
├── Todo-List BE/           # Backend (Node.js + Express)
│   ├── model/             # Database models
│   ├── routes/            # API routes
│   ├── .env               # Environment variables
│   ├── app.js             # Main application file
│   ├── db.js              # Database connection
│   └── package.json       # Backend dependencies
│
└── Todo-List FE/          # Frontend (React)
    ├── public/            # Static files
    ├── src/               # React source code
    │   ├── components/    # Reusable components
    │   ├── App.js         # Main React component
    │   └── index.js       # Application entry point
    └── package.json       # Frontend dependencies
```

## 🔧 Available Scripts

### Backend (in Todo-List BE directory)
- `npm start` - Start the backend server
- `npm run dev` - Start in development mode with nodemon

### Frontend (in Todo-List FE directory)
- `npm start` - Start the development server
- `npm test` - Launch the test runner
- `npm run build` - Build for production

## 🌐 API Endpoints

- `GET /api/todo` - Get all todos
- `POST /api/todo` - Create a new todo
- `PUT /api/todo/:id` - Update a todo
- `DELETE /api/todo/:id` - Delete a todo

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
