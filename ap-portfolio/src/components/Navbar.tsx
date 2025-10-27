export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200 p-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <a href="/" className="font-sans text-xl font-semibold">
          Anna Portfolio
        </a>
        <div className="flex gap-6 text-gray-700">
          <a href="#projects" className="hover:text-black font-sans">
            Projects
          </a>
          <a href="#about" className="hover:text-black font-sans">
            About
          </a>
          <a href="#contact" className="hover:text-black font-sans">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
