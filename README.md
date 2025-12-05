# Thinkboard

A full-stack sensitive note-taking application built with the MERN stack (MongoDB, Express.js, React, Node.js). Thinkboard features a modern, responsive landing page and a functional dashboard for managing notes.

## Features

- **Modern Landing Page**: A visually appealing entry point featuring animations and project insights using Framer Motion.
- **Note Management**: Full CRUD capabilities (Create, Read, Update, Delete) for notes.
- **Responsive Design**: Optimized for all devices using Tailwind CSS and DaisyUI.
- **Interactive UI**: Smooth animations and transitions powered by Framer Motion.
- **Real-time Feedback**: Toast notifications for user actions.
- **Clean Interface**: A minimalist and distraction-free environment for thinking.

## Tech Stack

### Frontend
- **React 19** with **Vite**
- **Tailwind CSS** & **DaisyUI** for styling
- **Framer Motion** for animations
- **React Router** for navigation
- **Axios** for API requests
- **Lucide React** for icons
- **React Hot Toast** for notifications

### Backend
- **Node.js** & **Express.js**
- **MongoDB** with **Mongoose ODM**
- **CORS** & **Dotenv** configuration

## Installation

### Prerequisites
- Node.js (v18 or higher recommended)
- MongoDB (Local or Atlas connection string)

### Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/joshrubio/thinkboard.git
   cd thinkboard
   ```

2. **Install dependencies:**
   
   **Root (optional, if using workspaces):**
   ```bash
   npm install
   ```

   **Backend:**
   ```bash
   cd backend
   npm install
   ```

   **Frontend:**
   ```bash
   cd frontend
   npm install
   ```

3. **Environment Variables:**
   Create a `.env` file in the `backend` directory:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=5001
   NODE_ENV=development
   ```

4. **Start the application:**

   **Backend:**
   ```bash
   # In terminal 1 (backend directory)
   npm run dev
   ```

   **Frontend:**
   ```bash
   # In terminal 2 (frontend directory)
   npm run dev
   ```

5. **Build for production:**
   The backend is configured to serve the frontend in production.
   ```bash
   # In frontend directory
   npm run build
   
   # In backend directory
   npm start
   ```

## Usage

- **Landing Page**: Visit `http://localhost:5173` to view the project overview and details.
- **App Dashboard**: Navigate to the app section to start managing your notes.
- **Backend API**: Running on `http://localhost:5001`.

## Project Structure

```
thinkboard/
├── backend/
│   ├── src/
│   │   ├── config/       # Database configuration
│   │   ├── controllers/  # Route controllers
│   │   ├── models/       # Mongoose models
│   │   ├── routes/       # API routes
│   │   └── server.js     # Entry point
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── lib/          # Utilities
│   │   ├── pages/        # Page components (Landing, Home, Create, etc.)
│   │   │   └── components/ # Page-specific components (Hero, TechStack, etc.)
│   │   └── App.jsx       # Main application component
│   └── package.json
└── README.md
```

## License

This project is licensed under the ISC License.

## Repository

[GitHub Repository](https://github.com/joshrubio/thinkboard)