import { Link } from "react-router-dom";
import VideoBackground from "@/assets/video_background.mp4"; // Ensure you have a video file in this path

export default function HomePage() {
  return (
    <div className="w-full min-h-[77vh] relative overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={VideoBackground} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Enhanced overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent">
        <div className="flex flex-col justify-center items-center text-center h-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Your Journey Starts{" "}
                <span className="text-emerald-400 relative">
                  Here
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-emerald-400 rounded-full"></div>
                </span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-200 font-light max-w-3xl mx-auto leading-relaxed">
                Effortless Ferry Booking Between Palawan and Mindoro
              </p>
            </div>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
              Skip the lines, book anytime, travel secure. Your ferry ticket is
              just a click away.
            </p>

            {/* CTA Button */}
            <div className="pt-4 flex flex-col gap-8 justify-center items-center">
              <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 transform hover:scale-105 transition-all duration-200 shadow-xl hover:shadow-2xl">
                <span className="relative">Book Your Ferry Now</span>
                <svg
                  className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>

              <Link to="/admin" className="text-white text-md underline">
                Admin Dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements for visual interest */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white/70"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </div>
  );
}
