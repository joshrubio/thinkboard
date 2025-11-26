# Thinkboard

A full-stack notes application built with the MERN stack (MongoDB, Express.js, React, Node.js). Thinkboard allows users to create, read, update, and delete notes with a clean and responsive interface.

## Features

- **Create Notes**: Add new notes with title and content
- **View Notes**: Display all notes in a grid layout with the most recent first
- **Edit Notes**: Update existing notes
- **Delete Notes**: Remove notes permanently
- **Rate Limiting**: Built-in rate limiting using Upstash Redis to prevent abuse
- **Responsive Design**: Mobile-friendly UI using Tailwind CSS and DaisyUI
- **Real-time Feedback**: Toast notifications for user actions

## Tech Stack

### Backend
- **Node.js** with Express.js
- **MongoDB** with Mongoose ODM
- **Upstash Redis** for rate limiting
- **CORS** for cross-origin requests
- **Dotenv** for environment variables

### Frontend
- **React** with Vite
- **React Router** for navigation
- **Axios** for API calls
- **Tailwind CSS** and **DaisyUI** for styling
- **React Hot Toast** for notifications
- **Lucide React** for icons

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- Upstash Redis account (for rate limiting)

### Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/joshrubio/thinkboard.git
   cd thinkboard
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Variables:**
   Create a `.env` file in the `backend` directory with the following:
   ```
   MONGO_URI=your_mongodb_connection_string
   UPSTASH_REDIS_REST_URL=your_upstash_redis_url
   UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token
   NODE_ENV=development
   PORT=5001
   ```

4. **Start the development servers:**
   - Backend: `npm run dev` (from backend directory)
   - Frontend: `npm run dev` (from frontend directory)

5. **Build for production:**
   ```bash
   npm run build
   npm start
   ```

## Usage

- Navigate to `http://localhost:5173` (frontend)
- The backend runs on `http://localhost:5001`

### API Endpoints

- `GET /api/notes` - Get all notes
- `GET /api/notes/:id` - Get a specific note
- `POST /api/notes` - Create a new note
- `PUT /api/notes/:id` - Update a note
- `DELETE /api/notes/:id` - Delete a note

## Project Structure

```
thinkboard/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   └── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── lib/
│   │   ├── pages/
│   │   └── App.jsx
│   └── package.json
└── package.json
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Repository

[GitHub Repository](https://github.com/joshrubio/thinkboard)