import { Divider } from "@nextui-org/react";
import React from "react";

const ORDivider = () => {
  return (
    <div className="flex items-center gap-2 w-full">
      <Divider className="flex-1"/>
      <p className="text-lg">OR</p>
      <Divider className="flex-1" />
    </div>
  );
};

export default ORDivider;
