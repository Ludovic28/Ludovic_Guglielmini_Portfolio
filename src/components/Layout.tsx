import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#0f172a] font-sans text-white">
      <Navbar />
      <main className="px-6 pt-20 md:px-12">
        <Outlet />
      </main>
    </div>
  );
}
