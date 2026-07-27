interface HighlightCardProps {
  icon: string;
  text: string;
}

export default function HighlightCard({
  icon,
  text,
}: HighlightCardProps) {
  return (
    <div className="flex items-start gap-3 sm:gap-4 bg-gray-50 rounded-xl p-4 sm:p-5">
      <span className="text-lg sm:text-xl leading-none">{icon}</span>
      <p className="text-sm sm:text-base text-gray-600">{text}</p>
    </div>
  );
}