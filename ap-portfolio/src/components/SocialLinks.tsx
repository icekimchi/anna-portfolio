import { Github, Linkedin, Mail, Globe } from "lucide-react";

export default function SocialLinks() {
  return (
    <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="https://github.com/icekimchi"
                className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:annapark@gmail.com"
                className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://icekimchi.github.io"
                className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                aria-label="Globe"
              >
                <Globe size={20} />
              </a>
            </div>
  );
}
