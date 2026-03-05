function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-4 text-xs text-gray-300">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-4 sm:flex-row">
        <span>© {year} Translate It. Frontend Project.</span>
        <span className="text-sm text-gray-400">
          Default language : English.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
