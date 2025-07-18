import { PenSquareIcon, Trash2Icon } from 'lucide-react'
import { Link } from 'react-router'
import { formatDate } from '../../lib/utils'
import api from '../../lib/axios.js'
import toast from 'react-hot-toast'

const NoteCard = ({ note, setNotes }) => {

const handleDelete = async (e, id) => {
  e.preventDefault() // Prevent the default link behavior

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
      className="card bg-base-300 hover:shadow-2xl transition-all duration-200"
    >
      <div className="card-body">
        <h3 className="card-title text-base-content">{note.title}</h3>
        <p className="text-base-content/70 line-clamp-3">{note.content}</p>
        <div className="card-actions justify-between items-center mt-4">
          <span className="text-sm text-base-content/60"> Created on {formatDate (new Date(note.createdAt))}</span>
          <div className="flex items-center gap-1">
            <button className="btn btn-ghost btn-xs">
            <PenSquareIcon className="size-4" />
              </button>
              <button className="btn btn-ghost btn-xs text-error" onClick={(e) => handleDelete(e, note._id)}>
              <Trash2Icon className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default NoteCard
