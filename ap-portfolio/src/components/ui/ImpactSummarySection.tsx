import Image from "next/image";
import HighlightCard from "./HighlightCard";

interface HighlightItem {
  icon: string;
  text: string;
}

interface ImpactSummaryProps {
  title: string;
  description: string;
  highlights: HighlightItem[];
}

export default function ImpactSummarySection({
  title,
  description,
  highlights = [],
}: ImpactSummaryProps) {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Left content */}
        <div>
          <p className="text-base sm:text-lg md:text-xl uppercase tracking-wide text-gray-400 mb-3 sm:mb-4">
            Long story short
          </p>

          <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-600">
            {title}
          </h2>

          <p className="mt-4 sm:mt-6 text-sm sm:text-base text-gray-600">
            {description}
          </p>

          {/* Highlights */}
          <div className="mt-8 sm:mt-12 space-y-3 sm:space-y-4">
            {highlights.map((item, index) => (
              <HighlightCard
                key={index}
                icon={item.icon}
                text={item.text}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}