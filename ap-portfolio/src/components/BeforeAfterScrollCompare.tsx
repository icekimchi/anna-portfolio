"use client";

import { useState } from "react";

interface BeforeAfterScrollCompareProps {
  beforeSrc: string;
  afterSrc: string;
  height?: string;
}

export default function BeforeAfterScrollCompare({
  beforeSrc,
  afterSrc,
  height = "520px",
}: BeforeAfterScrollCompareProps) {
  const [value, setValue] = useState<number>(50);

  return (
    <>
      <div
        className="relative w-full overflow-hidden rounded-2xl shadow-lg bg-neutral-100"
        style={{ height }}
      >
        {/* Scroll Area */}
        <div className="relative w-full h-full overflow-y-scroll">
          {/* Before */}
          <img
            src={beforeSrc}
            alt="Before"
            className="absolute top-0 left-0"
            style={{ width: `${100 - value}%` }}
          />

          {/* After */}
          <img
            src={afterSrc}
            alt="After"
            className="absolute top-0 right-0"
            style={{ width: `${value}%` }}
          />
        </div>

        {/* Divider */}
        <div
          className="absolute top-0 bottom-0 z-20 pointer-events-none"
          style={{ left: `${value}%` }}
        >
          <div className="w-[2px] h-full bg-white/90" />
          <div className="absolute -left-3 top-6 w-6 h-6 rounded-full bg-white shadow-md" />
        </div>
      </div>

      {/* Slider */}
      <input
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full mt-6"
      />

      {/* Labels */}
      <div className="flex justify-between text-sm text-gray-500 mt-2">
        <span>Before</span>
        <span>After</span>
      </div>
    </>
  );
}