interface HighlightCardProps {
  icon: string;
  text: string;
}

export default function HighlightCard({
  icon,
  text,
}: HighlightCardProps) {
  return (
    <div className="flex items-start gap-4 bg-gray-50 rounded-xl p-5">
      <span className="text-xl leading-none">{icon}</span>
      <p className="text-gray-600">{text}</p>
    </div>
  );
}