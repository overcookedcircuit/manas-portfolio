import { useNavigate } from "react-router-dom";
import crc from '../assets/images/CRC_2023-2024.jpg';
import crc2 from '../assets/images/CRC_2024-2025.jpg';
import kiosk from '../assets/images/kiosk.jpg';

export default function Robotics() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-6">
        <div className="max-w-5xl mx-auto">
            <button
            onClick={() => navigate("/")}
            className="mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
            ← Back to Projects
            </button>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Robotics Journey
            </h1>
            <p className="text-lg text-gray-700 mb-8">
            I’ve been an active member of the Vanier Robotics Team, where I contributed 
            to designing, building, and programming robots for competitions such as CRC Robotics.
            Our team achieved <span className="font-semibold">2nd place overall</span> in 2024,
            with multiple awards for construction, programming, and web development.
            </p>

            {/* Achievements Section */}
            <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Key Achievements</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>🏆 2nd Overall at CRC Robotics 2024</li>
                <li>🥇 1st in Robot Construction</li>
                <li>🥇 1st in Programming Construction</li>
                <li><a href="https://vanopoly.crcrobotics.com/en/Home/">🥈 2nd in Website Content</a></li>
                <li><a href="https://vanopoly.crcrobotics.com/en/Home/">🥉 3rd in Website Design</a></li>
            </ul>
            </section>

            {/* Media Section */}
            <section>
            <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white shadow rounded-lg overflow-hidden">
                <img
                    src={crc}
                    alt="Our competition robot"
                    className="w-full h-48 object-cover"
                />
                <div className="p-4">
                    <p className="text-gray-700">Our 2024 team placing overall 2nd place.</p>
                </div>
                </div>
                <div className="bg-white shadow rounded-lg overflow-hidden">
                <img
                    src={crc2}
                    alt="Team photo"
                    className="w-full h-48 object-cover"
                />
                <div className="p-4">
                    <p className="text-gray-700">Vanier Robotics team placing overall 3rd in the 2025 season</p>
                </div>
                </div>
                <div className="bg-white shadow rounded-lg overflow-hidden">
                <img
                    src={kiosk}
                    alt="Programming"
                    className="w-full h-48 object-cover"
                />
                <div className="p-4">
                    <p className="text-gray-700">Our team kiosk for the 2025 season</p>
                </div>
                </div>
            </div>
            </section>
            <section className="mt-12">
                <div className="p-6">
                    <h1 className="text-3xl font-bold mb-6">Robotics Season 2023-2024</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* First Video */}
                    <div className="w-full aspect-video">
                        <iframe
                        className="w-full h-full rounded-xl shadow-lg"
                        src="https://www.youtube.com/embed/-8USigVCoVs"
                        title="CRC Robotics 2024 - Vanier College"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        ></iframe>
                    </div>

                    {/* Second Video */}
                    <div className="w-full aspect-video">
                        <iframe
                        className="w-full h-full rounded-xl shadow-lg"
                        src="https://www.youtube.com/embed/SxM7DLkWRds"
                        title="CRC Robotics 2024 - Vanier College (Highlights)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        ></iframe>
                    </div>
                    </div>
                </div>
            </section>
        </div>
        </div>
    );
}
