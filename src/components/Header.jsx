// Header.jsx
import NavBar from "./../ui/NavBar";

function Header() {
  return (
    <header className="border-b border-white/10 bg-white/5 backdrop-blur">
      <div className="mx-auto max-w-5xl px-4 py-3">
        <NavBar />
      </div>
    </header>
  );
}

export default Header;
