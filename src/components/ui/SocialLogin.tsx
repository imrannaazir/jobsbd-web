/* eslint-disable @typescript-eslint/no-explicit-any */
import { FcGoogle } from "react-icons/fc";
import { Button } from "./button";

const SocialLogin = ({ setOpenGoogleModal }: { setOpenGoogleModal: any }) => {
  return (
    <Button
      onClick={() => setOpenGoogleModal(true)}
      className="bg-white border rounded flex w-full hover:bg-transparent"
    >
      <FcGoogle size={20} />
      <p className="flex-1 text-gray-500">Sign in with Google</p>
    </Button>
  );
};

export default SocialLogin;
