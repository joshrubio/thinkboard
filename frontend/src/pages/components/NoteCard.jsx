import { PenSquareIcon, Trash2Icon } from 'lucide-react'
import { Link } from 'react-router'
import { formatDate } from '../../lib/utils'
import api from '../../lib/axios.js'
import toast from 'react-hot-toast'

const NoteCard = ({ note, setNotes }) => {

  const handleDelete = async (e, id) => {
    e.preventDefault() // Prevent the default link behavior
    e.stopPropagation() // Prevent the event from bubbling up to the Link component

    if (!window.confirm('Are you sure you want to delete this note?'))
      return

    try {
      await api.delete(`/notes/${id}`)
      setNotes((prev) => prev.filter(note => note._id !== id)) // Update the state to remove the deleted note
      toast.success('Note deleted successfully!')
    } catch (error) {
      toast.error('Failed to delete note. Please try again.')
      console.error('Error deleting note:', error)
    }
  }
  return (
    <Link
      to={`/note/${note._id}`}
      className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
    >
      <h3 className="text-xl font-bold text-white mb-3">{note.title}</h3>
      <p className="text-gray-400 line-clamp-3 mb-4">{note.content}</p>
      <div className="flex justify-between items-center mt-4">
        <span className="text-sm text-gray-500">Created on {formatDate(new Date(note.createdAt))}</span>
        <div className="flex items-center gap-1">
          <button className="p-2 rounded-lg hover:bg-purple-600/20 transition-colors duration-200">
            <PenSquareIcon className="size-4 text-gray-400 hover:text-purple-400" />
          </button>
          <button
            className="p-2 rounded-lg hover:bg-pink-600/20 transition-colors duration-200"
            onClick={(e) => handleDelete(e, note._id)}
          >
            <Trash2Icon className="size-4 text-gray-400 hover:text-pink-400" />
          </button>
        </div>
      </div>
      {/* Gradient Border Effect on Hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
    </Link>
  )
}

export default NoteCard
