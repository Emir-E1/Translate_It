export default function Button({
  onClick,
  type = "",
  disabled = false,
  children,
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl border-2 border-[#4D5562] p-2 text-sm font-medium transition active:scale-[0.97]";
  const enabledStyles =
    "bg-white/5 text-white hover:bg-white/10 hover:border-white/70 focus:outline-none focus:ring-2 focus:ring-cyan-500/30";
  const disabledStyles =
    "cursor-not-allowed opacity-60 hover:bg-white/5 hover:border-[#4D5562]";
  const theme =
    `${base} ${disabled ? disabledStyles : enabledStyles} ${type}`.trim();
  return (
    <button
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={theme}
    >
      {children}
    </button>
  );
}
