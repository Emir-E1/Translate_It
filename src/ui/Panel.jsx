function Panel({ children }) {
  return (
    <div className="flex h-48 w-96 flex-col justify-between rounded-xl bg-gray-800 p-4 shadow-lg transition-all duration-300">
      {children}
    </div>
  );
}

export default Panel;
