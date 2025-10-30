import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white font-sans">
      <Navbar />
      <main className="pt-20 px-6 md:px-12">
        <Outlet />
      </main>
    </div>
  );
}
