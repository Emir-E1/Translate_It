import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";

function NavBar() {
  return (
    <header className="border-b border-white/10 bg-black/40 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 text-sm text-white">
        <Link to="/" className="flex items-center gap-2">
          <Logo className="h-8 w-8" />
          <span className="font-semibold tracking-tight">
            Translate&nbsp;It
          </span>
        </Link>

        <div className="flex items-center gap-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              [
                "transition hover:text-cyan-300",
                isActive ? "text-cyan-300" : "text-gray-200",
              ].join(" ")
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/app"
            className={({ isActive }) =>
              [
                "rounded-md px-3 py-1 transition",
                isActive
                  ? "bg-cyan-500 text-black"
                  : "bg-white/5 text-gray-100 hover:bg-white/10",
              ].join(" ")
            }
          >
            Translator
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
