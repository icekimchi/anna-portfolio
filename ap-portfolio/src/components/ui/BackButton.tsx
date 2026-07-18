"use client";

import { ArrowLeft } from 'lucide-react';
import { useRouter } from "next/navigation";

export default function BackButton(){
    const router = useRouter();

    const handleBack = () => {
        // Direct visits (e.g. shared link) have no in-app history to return to
        if (window.history.length > 1) {
            router.back();
        } else {
            router.push("/");
        }
    };

    return (
    <div>
        <button
            type="button"
            onClick={handleBack}
            className="fixed top-20 left-4 sm:left-8 z-50 inline-flex items-center gap-2 text-gray-900 hover:text-gray-600 transition-colors bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-md"
        >
            <ArrowLeft size={20} />
            Back
        </button>
    </div>
    )
}
