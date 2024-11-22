import React from "react";

const CircularProgressBar = ({ size = 120, progress = 30, strokeWidth = 5 }) => {
  const center = size / 2;
  const radius = center - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const progressOffset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
    {/* SVG Circle */}
    <svg width={size} height={size} className="absolute">
      {/* Background Circle */}
      <circle
        cx={center}
        cy={center}
        r={radius}
        className="text-gray-300"
        strokeWidth={strokeWidth}
        stroke="currentColor"
        fill="none"
      />
      {/* Progress Circle */}
      <circle
        cx={center}
        cy={center}
        r={radius}
        className="text-green-500"
        strokeWidth={strokeWidth}
        stroke="currentColor"
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={progressOffset}
        strokeLinecap="round"
        style={{
          transition: "stroke-dashoffset 0.5s ease",
        }}
      />
    </svg>

    {/* Progress Text */}
    <div className="absolute -bottom-1 text-center text-green-500 font-semibold text-lg bg-white px-5 py-1 rounded-3xl shadow-xl">
      {progress}%
    </div>
  </div>
);
};

export default CircularProgressBar