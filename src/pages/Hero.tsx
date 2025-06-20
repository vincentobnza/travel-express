import { Link } from "react-router-dom";
import VideoBackground from "@/assets/video_background.mp4";

export default function Hero() {
  return (
    <div className="relative min-h-[77vh] w-full overflow-hidden">
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover"
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
        <div className="flex h-full flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl space-y-8">
            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="text-3xl leading-tight font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl">
                Your Journey Starts{" "}
                <span className="relative text-emerald-400">
                  Here
                  <div className="absolute -bottom-2 left-0 h-1 w-full rounded-full bg-emerald-400"></div>
                </span>
              </h1>
              <p className="text-md mx-auto max-w-3xl leading-relaxed font-semibold text-gray-200">
                Effortless Ferry Booking Between Palawan and Mindoro
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col items-center justify-center gap-8 pt-4">
              <button className="group relative inline-flex transform items-center justify-center rounded-lg bg-emerald-600 px-8 py-4 text-lg font-semibold text-white shadow-xl transition-all duration-200 hover:scale-105 hover:bg-emerald-700 hover:shadow-2xl">
                <span className="relative">Book Your Ferry Now</span>
                <svg
                  className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1"
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

              <Link to="/admin" className="text-sm font-bold text-white">
                Admin Dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements for visual interest */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform animate-bounce">
        <svg
          className="h-6 w-6 text-white/70"
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
