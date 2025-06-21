export default function MobileUserFeedback() {
  return (
    <div className="mx-4 mb-6">
      <div className="rounded-lg border border-emerald-300 bg-emerald-50 p-4">
        <div className="mb-3 flex items-center">
          <div className="flex-shrink-0">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100">
              <svg
                className="h-4 w-4 text-emerald-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </div>
          </div>
          <div className="ml-3">
            <h4 className="text-sm font-semibold text-emerald-900">
              Share Your Experience
            </h4>
          </div>
        </div>
        <p className="mb-3 text-xs leading-relaxed text-emerald-700">
          Help us improve our services by sharing your feedback and suggestions.
        </p>
        <button className="w-full rounded-md bg-emerald-600 px-3 py-2.5 text-xs font-medium text-white transition-colors duration-200 hover:bg-emerald-700 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-1 focus:outline-none">
          Give Feedback
        </button>
      </div>
    </div>
  );
}
