import { useState } from 'react';
import { ChevronsLeftRight } from 'lucide-react';

interface BeforeAfterSliderProps {
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
  label: string;
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ before, after, beforeAlt, afterAlt, label }) => {
  const [position, setPosition] = useState(50);

  return (
    <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white">
      <div className="relative aspect-[4/3] select-none">
        <img src={after} alt={afterAlt} className="absolute inset-0 w-full h-full object-cover" draggable={false} />

        <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
          <img src={before} alt={beforeAlt} className="w-full h-full object-cover" draggable={false} />
        </div>

        <div className="absolute top-0 bottom-0 pointer-events-none" style={{ left: `${position}%` }}>
          <div className="absolute inset-y-0 -translate-x-1/2 w-0.5 bg-white" />
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center">
            <ChevronsLeftRight className="w-4 h-4 text-gray-700" />
          </div>
        </div>

        <span className="absolute top-3 left-3 bg-black/60 text-white !text-xs font-semibold px-2 py-1 rounded">
          Before
        </span>
        <span className="absolute top-3 right-3 bg-emerald-600 text-white !text-xs font-semibold px-2 py-1 rounded">
          After
        </span>

        <input
          type="range"
          min={0}
          max={100}
          value={position}
          onChange={(e) => setPosition(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
          aria-label={`${label}: drag to compare before and after`}
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="font-semibold text-gray-900">{label}</h3>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
