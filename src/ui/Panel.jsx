function Panel({ children, className = "" }) {
  return (
    <div
      className={`flex min-h-[280px] w-full min-w-0 max-w-lg flex-1 flex-col gap-4 rounded-2xl border border-white/10 bg-gray-900/90 p-5 shadow-xl shadow-black/25 backdrop-blur-sm transition-all duration-300 sm:min-w-[320px] ${className}`.trim()}
    >
      {children}
    </div>
  );
}

export default Panel;
