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
      navigate('/')
    }

    catch (error) {
      console.log ('Error creating note:', error);
      if (error.response.status === 429) {
        toast.error("Slow down! You're creating notes too fast", {
          duration: 4000,
          icon: "💀",
        })}
      else { 
        toast.error('Failed to create note')}
    }
    finally {
      setLoading(false);
    }
  }
    return (
    <div className='min-h-screen bg-base-300'>
    <div className='container mx-auto px-4 py-8'>
      <div className='max-w-2xl mx-auto'>
      <Link to='/' className='btn btn-ghost mb-6'>
      <ArrowLeftIcon className='size-5' />
      Back to Notes
      </Link> 

      <div className='card bg-base-100 shadow-xl'>
        <div className='card-body'>
          <h2 className='card-title text-2xl mb-4'>Create a New Note</h2>
          <form onSubmit={handleSubmit}> 
            <div className='form-control mb-4'>
              <label className='label'>
                <span className='label-text'>Title</span>
              </label>
              <input
                type='text'
                placeholder='Enter note title'
                className='input input-bordered'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div className='form-control mb-4'>
              <label className='label'>
                <span className='label-text'>Content</span>
              </label>
              <textarea
                placeholder='Enter note content'
                className='textarea textarea-bordered'
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
              ></textarea>
            </div>
          <div className="card-actions justify-end">
            <button
              type='submit'
              className={`btn btn-primary ${loading ? 'loading' : ''}`}
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