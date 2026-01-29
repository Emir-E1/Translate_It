import { Outlet } from "react-router";
import NavBar from "./NavBar";
import Footer from "../components/Footer";

function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-slate-950 via-slate-900 to-black text-slate-50">
      <NavBar />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default AppLayout;
