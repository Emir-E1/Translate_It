function Panel({ children, type }) {
  return (
    <div
      className={`flex min-h-[280px] w-full min-w-0 max-w-none flex-1 flex-col gap-4 rounded-2xl border border-white/10 ${
        type === "source" ? "bg-slate-900/80" : "bg-slate-900/80"
      } p-5 shadow-2xl shadow-black/40 backdrop-blur-xl transition-all duration-300 sm:min-w-[320px]`.trim()}
    >
      {children}
    </div>
  );
}

export default Panel;
