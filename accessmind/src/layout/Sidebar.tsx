import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-zinc-900 text-white p-4 fixed">
      <h2 className="text-xl font-bold mb-6">AccessMind</h2>

      <nav className="flex flex-col gap-4">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/scanner">Scanner</Link>
        <Link to="/adaptive">Adaptive</Link>
        <Link to="/translate">Translate</Link>
        <Link to="/reports">Reports</Link>
        <Link to="/settings">Settings</Link>
      </nav>
    </div>
  );
}