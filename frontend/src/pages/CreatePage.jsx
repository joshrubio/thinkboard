import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { ArrowLeftIcon } from 'lucide-react'
import toast from 'react-hot-toast';
import api from '../lib/axios.js' // Adjust the import path as necessary

const CreatePage = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!title.trim() || !content.trim()) {
      toast.error('All fields are required')
      return;
    }
    setLoading(true);

    try {
      await api.post("/notes", {
        title,
        content,
      })

      toast.success('Note created successfully!')
      navigate('/app')
    }

    catch (error) {
      console.log('Error creating note:', error);
      if (error.response.status === 429) {
        toast.error("Slow down! You're creating notes too fast", {
          duration: 4000,
          icon: "💀",
        })
      }
      else {
        toast.error('Failed to create note')
      }
    }
    finally {
      setLoading(false);
    }
  }
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/10 to-gray-900'>
      <div className='container mx-auto px-4 py-8'>
        <div className='max-w-2xl mx-auto'>
          <Link to='/app' className='inline-flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors duration-200 mb-6'>
            <ArrowLeftIcon className='size-5' />
            Back to Notes
          </Link>

          <div className='bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 shadow-2xl'>
            <div>
              <h2 className='text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent'>Create a New Note</h2>
              <form onSubmit={handleSubmit}>
                <div className='mb-6'>
                  <label className='block text-gray-300 mb-2 font-semibold'>
                    Title
                  </label>
                  <input
                    type='text'
                    placeholder='Enter note title'
                    className='w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>

                <div className='mb-6'>
                  <label className='block text-gray-300 mb-2 font-semibold'>
                    Content
                  </label>
                  <textarea
                    placeholder='Enter note content'
                    className='w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200 min-h-[200px] resize-y'
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                  ></textarea>
                </div>
                <div className="flex justify-end">
                  <button
                    type='submit'
                    className={`px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-purple-500/50 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={loading}
                  >
                    {loading ? 'Creating...' : 'Create Note'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreatePage