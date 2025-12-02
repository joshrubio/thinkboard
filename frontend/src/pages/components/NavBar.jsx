import { Link } from "react-router";
import { PlusIcon, Home } from "lucide-react";

const NavBar = () => {
    return <header className="bg-gray-900 border-b border-gray-800">
        <div className="container mx-auto max-w-6xl p-4">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent font-mono tracking-tight">Thinkboard</h1>
                <div className="flex items-center gap-4">
                    <Link to="/" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-gray-300 hover:text-white hover:border-purple-500/50 transition-all duration-200">
                        <Home className="size-4" />
                        <span className="hidden sm:inline">Back to Landing</span>
                    </Link>
                    <Link to={"/create"} className="px-6 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-purple-500/50 flex items-center gap-2">
                        <PlusIcon className="size-5" />
                        <span>Create Note</span>
                    </Link>
                </div>
            </div>
        </div>
    </header>
};
export default NavBar;