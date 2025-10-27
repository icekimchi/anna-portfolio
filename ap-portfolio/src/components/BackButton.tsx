import { ArrowLeft } from 'lucide-react';
import Link from "next/link";

export default function BackButton(){
    return (
    <div>
        <Link
            href="/"
            className="fixed top-20 left-4 sm:left-8 z-50 inline-flex items-center gap-2 text-gray-900 hover:text-gray-600 transition-colors bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-md"
        >
            <ArrowLeft size={20} />
            Back
        </Link>
    </div>
    )
}