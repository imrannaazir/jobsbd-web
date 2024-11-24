
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Button } from "./button";

const SocialLogin = () => {
  return (
    <Button  className="bg-white border rounded flex w-full hover:bg-transparent">
      <FcGoogle size={20}/>
      <p className="flex-1 text-gray-500">Sign in with Google</p>
    </Button>
  );
};

export default SocialLogin;
