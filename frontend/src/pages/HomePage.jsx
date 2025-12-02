import { useEffect, useState } from 'react'
import NavBar from "./components/NavBar.jsx";
import RateLimitedUI from './components/RateLimitedUI.jsx';
import toast from 'react-hot-toast';
import NoteCard from './components/NoteCard.jsx';
import api from '../lib/axios.js'; // Adjust the import path as necessary
import NoteNotFound from './components/NotesNotFound.jsx';

const HomePage = () => {

  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await api.get('/notes');
        console.log(res.data);
        setNotes(res.data);
        setIsRateLimited(false);
      } catch (error) {
        console.log('Error fetching notes:');
        console.log(error);
        if (error.response?.status === 429) {
          setIsRateLimited(true);
          toast.error('Rate limit exceeded');
        } else {
          toast.error('Failed to fetch notes');
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchNotes();
  }, []);

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/10 to-gray-900'>
      <NavBar />
      {isRateLimited && <RateLimitedUI />}
      <div className='max-w-7xl mx-auto p-4 mt-6'>
        {isLoading && <div className='text-center text-purple-400 py-10 text-lg'>Loading notes...</div>}

        {
          notes.length === 0 && !isLoading && !isRateLimited && <NoteNotFound />
        }

        {notes.length > 0 && !isRateLimited && (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {notes.map(note => (
              <NoteCard key={note._id} note={note} setNotes={setNotes} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePage;
