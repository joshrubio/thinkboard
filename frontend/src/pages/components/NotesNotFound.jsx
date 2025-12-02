import { NotebookIcon } from "lucide-react";
import { Link } from "react-router";

const NotesNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 space-y-6 max-w-md mx-auto text-center">
      <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full p-8 border border-purple-500/30">
        <NotebookIcon className="size-10 text-purple-400" />
      </div>
      <h3 className="text-2xl font-bold text-white">No notes yet</h3>
      <p className="text-gray-400">
        Ready to organize your thoughts? Create your first note to get started on your journey.
      </p>
      <Link to="/create" className="px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-purple-500/50">
        Create Your First Note
      </Link>
    </div>
  );
};
export default NotesNotFound;