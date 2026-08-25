export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5">
      <div className="text-xl font-semibold tracking-tight">
        Lowclerkenuinely
      </div>

      <div className="flex items-center gap-8 text-sm text-gray-600">
        <a href="#">Features</a>
        <a href="#">Security</a>
        <a href="#">About</a>
        <button className="rounded-full bg-black px-5 py-2 text-white">
          Login
        </button>
      </div>
    </nav>
  );
}