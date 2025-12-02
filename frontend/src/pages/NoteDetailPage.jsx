import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router'
import toast from 'react-hot-toast'
import { LoaderIcon, ArrowLeftIcon, Trash2Icon } from 'lucide-react'
import api from "../lib/axios";

const NoteDetailPage = () => {
  const [note, setNote] = useState(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)


  const navigate = useNavigate()

  const { id } = useParams()

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await api.get(`/notes/${id}`)
        setNote(res.data)
      } catch (error) {
        console.log("Error in fetching note", error)
        toast.error("Failed to fetch the note")
      } finally {
        setLoading(false)
      }
    }

    fetchNote()
  }, [id])

  const handleDelete = async () => {

    if (!window.confirm('Are you sure you want to delete this note?'))
      return
    try {
      await api.delete(`/notes/${id}`)
      toast.success('Note deleted successfully!')
      navigate('/app')
    } catch (error) {
      console.error('Error deleting note:', error)
      toast.error('Failed to delete note. Please try again.')
    }
  }
  const handleSave = async () => {
    if (!note.title.trim() || !note.content.trim()) {
      toast.error('Please fill in all fields')
      return;
    }
    setSaving(true)
    try {
      await api.put(`/notes/${id}`, note)
      toast.success('Note updated successfully!')
      navigate('/app')
    } catch (error) {
      console.error('Error updating note:', error)
      toast.error('Failed to update note. Please try again.')
    }
    finally {
      setSaving(false)
    }
  }


  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/10 to-gray-900 flex items-center justify-center">
        <LoaderIcon className="animate-spin size-10 text-purple-400" />
      </div>
    )

  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/10 to-gray-900'>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <Link to="/app" className="inline-flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors duration-200">
              <ArrowLeftIcon className="h-5 w-5" />
              Back to Notes
            </Link>
            <button onClick={handleDelete} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-pink-600/20 border border-pink-600/50 text-pink-400 hover:bg-pink-600/30 transition-all duration-200">
              <Trash2Icon className="h-5 w-5" />
              Delete Note
            </button>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 shadow-2xl">
            <div>

              <div className="mb-6">
                <label className="block text-gray-300 mb-2 font-semibold">
                  Title
                </label>
                <input
                  type="text"
                  placeholder="Note title"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200"
                  value={note?.title}
                  onChange={(e) => setNote({ ...note, title: e.target.value })}
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-300 mb-2 font-semibold">
                  Content
                </label>
                <textarea
                  placeholder="Write your note here..."
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200 min-h-[200px] resize-y"
                  value={note.content}
                  onChange={(e) => setNote({ ...note, content: e.target.value })}
                />
              </div>

              <div className="flex justify-end">
                <button
                  className={`px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-purple-500/50 ${saving ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={saving}
                  onClick={handleSave}
                >
                  {saving ? "Saving..." : "Save Changes"}
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NoteDetailPage