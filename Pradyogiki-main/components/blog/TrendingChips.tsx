'use client';

const chips = [
  "Rescue Story", "Permanent Care", "Medical Care", "Emergency Rescue",
  "Feeding Program", "Volunteer Work", "Recovery Story", "Campus Life",
  "Vaccination", "Success Story", "Behind the Scenes", "Inspiration"
];

interface TrendingChipsProps {
  activeTag: string;
  setActiveTag: (tag: string) => void;
}

export default function TrendingChips({ activeTag, setActiveTag }: TrendingChipsProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Story Categories</h3>
      <div className="flex flex-wrap gap-3">
        {chips.map(tag => (
          <button
            key={tag}
            className={`px-4 py-2 rounded-full border font-medium whitespace-nowrap transition-all ${
              activeTag === tag 
                ? "bg-blue-600 text-white border-blue-600 shadow-sm" 
                : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100 hover:border-gray-300"
            }`}
            onClick={() => setActiveTag(activeTag === tag ? "" : tag)}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}