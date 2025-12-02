import { Route, Routes } from 'react-router';
import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';
import NoteDetailPage from './pages/NoteDetailPage';
import LandingPage from './pages/LandingPage';
import { toast } from 'react-hot-toast'

const App = () => {
  return (
    <div data-theme='dracula'>

      < Routes >
        < Route path="/" element={<LandingPage />} />
        < Route path="/app" element={<HomePage />} />
        < Route path="/create" element={<CreatePage />} />
        < Route path="/note/:id" element={<NoteDetailPage />} />
      </ Routes >
    </div>
  )
}

export default App