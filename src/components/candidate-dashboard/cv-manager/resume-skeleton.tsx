

const ResumeSkeleton = () => {
  return (
    <div className="flex items-center justify-between animate-pulse">
      <div>
        <div className="w-32 h-5 bg-gray-300 rounded"></div>
        <div className="mt-2 w-48 h-4 bg-gray-200 rounded"></div>
      </div>
      <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
    </div>
  );
};

export default ResumeSkeleton;
