const Loading = ({ message = "Loading..." }) => (
  <div className="min-h-screen bg-primary flex items-center justify-center px-4">
    <div className="text-center">
      {/* Elegant Spinner */}
      <div className="w-12 h-12 border-2 border-white/30 border-t-white rounded-full animate-spin mx-auto mb-4"></div>

      {/* Text */}
      <p className="text-white/80 text-lg font-light">{message}</p>
    </div>
  </div>
);

export default Loading;
