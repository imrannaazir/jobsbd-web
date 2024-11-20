import { Button } from "@nextui-org/react";
import React from "react";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <Button className="bg-white border rounded flex w-full">
      <FcGoogle size={20}/>
      <p className="flex-1">Sign in with Google</p>
    </Button>
  );
};

export default SocialLogin;
