import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/work" className="font-sans text-gray-900 text-xl">
          WORKS
        </Link>

        <Link href="/" className="font-sans text-gray-900  text-xl">
          ANNA PARK
        </Link>

        <Link href="/" className="font-sans text-gray-900  text-xl">
          ABOUT
        </Link>
        
      </div>
    </nav>
  );
}
