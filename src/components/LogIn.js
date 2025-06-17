import { signInWithGoogle, guestSignIn } from "./Firebase";

function LogIn() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-100 p-4">
            {/* Main content grows to fill available space */}
            <div className="flex-grow max-w-4xl w-full flex flex-col md:flex-row items-center space-y-12 md:space-y-0 md:space-x-12 mx-auto">
                {/* Left Text Section */}
                <div className="flex flex-col space-y-4 md:w-1/2">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/9/93/Facebook_logo_%282023%29.svg"
                        alt="Facebook"
                        className="w-48"
                    />
                    <p className="text-2xl text-gray-800 leading-snug">
                        Connect with friends and the world around you on
                        Facebook.
                    </p>
                </div>

                {/* Right Card Section */}
                <div className="bg-white shadow-md rounded-lg p-8 md:w-1/2 w-full">
                    <div className="flex flex-col space-y-4">
                        <button
                            onClick={signInWithGoogle}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-md transition"
                        >
                            Log In with Google
                        </button>
                        <button
                            onClick={guestSignIn}
                            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-4 rounded-md transition"
                        >
                            Use Guest Account
                        </button>
                    </div>

                    {/* Links */}
                    <div className="mt-6 text-center text-sm text-gray-600 space-x-2">
                        <a
                            href="https://github.com/skeanster"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:underline hover:text-blue-600"
                        >
                            GitHub
                        </a>
                        <span>-</span>
                        <a
                            href="https://www.linkedin.com/in/ryanskeans/"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:underline hover:text-blue-600"
                        >
                            LinkedIn
                        </a>
                        <span>-</span>
                        <a
                            href="https://skeanster.github.io/"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:underline hover:text-blue-600"
                        >
                            Ryan Inc.
                        </a>
                    </div>
                </div>
            </div>

            {/* Footer pushed to bottom */}
            <footer className="mt-auto w-full border-t border-gray-300 pt-6 bg-white">
                <div className="max-w-5xl mx-auto px-4">
                    {/* Language options */}
                    <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500 mb-4">
                        {[
                            "English (US)",
                            "Español",
                            "Français (France)",
                            "中文(简体)",
                            "العربية",
                            "Português (Brasil)",
                            "Italiano",
                            "Deutsch",
                            "日本語",
                            "한국어",
                        ].map((lang) => (
                            <button
                                key={lang}
                                className="hover:underline focus:outline-none"
                                aria-label={`Change language to ${lang}`}
                            >
                                {lang}
                            </button>
                        ))}
                    </div>

                    {/* Fake links */}
                    <div className="flex flex-wrap justify-center gap-6 text-xs text-gray-600">
                        {[
                            { label: "Instagram", href: "#" },
                            { label: "Twitter", href: "#" },
                            { label: "About", href: "#" },
                            { label: "Help", href: "#" },
                            { label: "Privacy", href: "#" },
                            { label: "Terms", href: "#" },
                            { label: "Contact", href: "#" },
                        ].map(({ label, href }) => (
                            <a
                                key={label}
                                href={href}
                                className="hover:underline"
                                onClick={(e) => e.preventDefault()}
                            >
                                {label}
                            </a>
                        ))}
                    </div>

                    {/* Copyright */}
                    <p className="mt-4 text-center text-gray-400 text-xs select-none">
                        © 2025 Fakebook from Ryan Inc.
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default LogIn;
