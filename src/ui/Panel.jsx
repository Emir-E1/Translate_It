function Panel({ children, type }) {
  return (
    <div
      className={`flex min-h-[280px] w-full min-w-0 max-w-lg flex-1 flex-col gap-4 rounded-2xl border border-white/50 ${type === "source" ? "bg-[#212936f9]" : "bg-[#121826f8]"} p-5 shadow-xl shadow-black/25 backdrop-blur-0 transition-all duration-300 sm:min-w-[320px]`.trim()}
    >
      {children}
    </div>
  );
}

export default Panel;
