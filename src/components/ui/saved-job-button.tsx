import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";

const SavedJobButton = () => {
  return (
    <div className="flex items-center justify-center border border-primary py-1 px-5 rounded">
      <FaRegHeart className="text-primary text-2xl " />
      {/* <FaHeart className="text-red-500 text-2xl" /> */}
    </div>
  );
};

export default SavedJobButton;
