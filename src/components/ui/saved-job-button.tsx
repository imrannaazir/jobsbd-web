import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { Button } from "./button";

const SavedJobButton = () => {
  return (
    <Button size="icon" variant="outline" className="hover:bg-transparent">
      <FaRegHeart className="text-primary" size={20}/>
      {/* <FaHeart className="text-red-500" size={20}/> */}
    </Button>
  );
};

export default SavedJobButton;
