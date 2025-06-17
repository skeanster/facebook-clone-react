import { useState } from "react";
import { ReactComponent as InfoSVG } from "./miscimages/info.svg";

export default function InfoButton() {
    const [visible, setVisible] = useState(false);
    const [hasOpened, setHasOpened] = useState(false);

    const toggleInfo = () => {
        setVisible((prev) => !prev);
        if (!hasOpened) setHasOpened(true);
    };

    return (
        <div className="fixed bottom-5 right-5 z-50">
            <div className="relative">
                <div
                    className={`absolute bottom-14 right-0 w-72 p-5 bg-white bg-opacity-80 backdrop-blur-sm border border-[#1877f2] text-gray-800 text-sm rounded-2xl shadow-2xl transition-all duration-200 ease-out transform origin-bottom-right ${
                        visible
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-90 pointer-events-none"
                    }`}
                >
                    <h4 className="font-semibold mb-2 text-[#1877f2]">
                        Quick Tips
                    </h4>
                    <p className="leading-relaxed">
                        Thank you for visiting! On this web app you can:
                        <ul className="list-disc list-inside ml-4 mt-1">
                            <li>Create a post</li>
                            <li>Like and comment on posts</li>
                            <li>Update your username on your profile page</li>
                        </ul>
                    </p>
                </div>

                <button
                    onClick={toggleInfo}
                    aria-label="Info"
                    className="relative flex items-center justify-center p-2 rounded-full bg-[#1877f2] shadow-xl hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-300 transform hover:scale-105 transition"
                >
                    <InfoSVG className="w-8 h-8 fill-current text-white" />
                    {!hasOpened && (
                        <span className="absolute top-0 right-0 block h-2 w-2 bg-red-500 rounded-full animate-ping" />
                    )}
                </button>
            </div>
        </div>
    );
}
