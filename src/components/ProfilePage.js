import { useState } from "react";
import Navbar from "./Navbar";
import LogoutButton from "./LogoutButton";
import { ReactComponent as EditSVG } from "./miscimages/edit.svg";
import { ReactComponent as PhotoSVG } from "./miscimages/photo.svg";

export default function ProfilePage({ username, changeUsername }) {
    const [newName, setNewName] = useState("");
    const [posts] = useState([
        {
            id: 1,
            time: "Just now",
            content:
                "Coming soon for users logged in with their Google account!",
        },
    ]);

    const handleUsernameSubmit = (e) => {
        changeUsername(e);
        setNewName("");
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar username={username} />

            <div className="max-w-5xl mx-auto mt-20 grid grid-cols-1 lg:grid-cols-3 gap-6 px-4">
                {/* Profile Sidebar */}
                <aside className="bg-white p-6 rounded-2xl shadow-lg">
                    <div className="flex flex-col items-center">
                        <PhotoSVG className="w-24 h-24 text-gray-400" />
                        <h2 className="mt-4 text-2xl font-semibold text-gray-800">
                            {username}
                        </h2>
                        <button className="mt-2 flex items-center text-[#1877f2] hover:underline">
                            <EditSVG className="w-5 h-5 mr-1" />
                            Edit Profile
                        </button>
                    </div>

                    <div className="mt-6">
                        <h3 className="font-semibold text-gray-800 mb-2">
                            Change Username
                        </h3>
                        <form
                            onSubmit={handleUsernameSubmit}
                            className="flex flex-wrap gap-2"
                        >
                            <input
                                type="text"
                                className="flex-grow min-w-0 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1877f2]"
                                placeholder="New username"
                                value={newName}
                                onChange={(e) => setNewName(e.target.value)}
                                required
                            />
                            <button
                                type="submit"
                                className="px-4 py-2 bg-[#1877f2] text-white rounded-lg hover:bg-blue-600 transition"
                            >
                                Change
                            </button>
                        </form>
                    </div>

                    <div className="mt-6">
                        <LogoutButton />
                    </div>
                </aside>

                {/* Main Content */}
                <section className="lg:col-span-2 space-y-6">
                    {/* Recent Posts */}
                    <div className="bg-white p-6 rounded-2xl shadow-lg">
                        <h3 className="font-semibold text-gray-800 mb-4">
                            Recent Posts
                        </h3>
                        <ul className="space-y-4">
                            {posts.map((post) => (
                                <li
                                    key={post.id}
                                    className="p-4 border border-gray-200 rounded-lg"
                                >
                                    <p className="text-gray-700">
                                        {post.content}
                                    </p>
                                    <span className="text-sm text-gray-500">
                                        {post.time}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    );
}
