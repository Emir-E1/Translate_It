import { Outlet } from "react-router";

import Footer from "../components/Footer";
import Header from "../components/Header";
const AppLayout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-slate-800">
      <header>
        <Header />
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default AppLayout;
