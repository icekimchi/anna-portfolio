import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand / Intro */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold text-gray-900">
              Anna Park
            </h3>
            <p className="mt-3 max-w-sm text-sm text-gray-600">
              Designing and building thoughtful digital experiences
              with a background in software engineering and UX.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900">
              Navigation
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/" className="hover:text-gray-900">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-gray-900">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gray-900">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-900">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900">
              Connect
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>
                <a
                  href="https://github.com/icekimchi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-900"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-900"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="mailto:annapark0828@gmail.com"
                  className="hover:text-gray-900"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-6 text-sm text-gray-500 md:flex-row">
          <p>© {new Date().getFullYear()} Anna Park. All rights reserved.</p>
          <p className="text-xs">
            Built with Next.js & React
          </p>
        </div>
      </div>
    </footer>
  );
}
