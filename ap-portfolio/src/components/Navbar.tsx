export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-5xl mx-auto flex justify-between items-center px-6 py-4">
        <a href="/" className="text-xl font-semibold">
          Anna Portfolio
        </a>
        <div className="flex gap-6 text-gray-700">
          <a href="#projects" className="hover:text-black">
            Projects
          </a>
          <a href="#about" className="hover:text-black">
            About
          </a>
          <a href="#contact" className="hover:text-black">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
