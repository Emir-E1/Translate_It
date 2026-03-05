import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
// NavBar.jsx

function NavBar() {
  return (
    <nav className="flex items-center justify-between text-sm text-white">
      <Link to="/" className="flex items-center gap-2">
        <Logo className="h-8 w-8" />
        <span className="font-semibold tracking-tight">Translate&nbsp;It</span>
      </Link>

      <div className="flex items-center gap-4">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            `transition ${isActive ? "text-cyan-300" : "text-gray-200"} hover:text-cyan-300`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/"
          className={({ isActive }) =>
            `rounded-md px-3 py-1 transition ${
              isActive
                ? "bg-cyan-500 text-black"
                : "bg-white/10 text-gray-100 hover:bg-white/20"
            }`
          }
        >
          Translator
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
