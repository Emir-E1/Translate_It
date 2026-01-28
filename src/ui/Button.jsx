export default function Button({ onClick, type, children }) {
  const theme = `rounded-xl border-2 border-[#4D5562] p-2  ${type} `;
  return (
    <button onClick={onClick} className={theme}>
      {children}
    </button>
  );
}
