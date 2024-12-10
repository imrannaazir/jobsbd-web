"use client";
import { saveTokenInCookies } from "@/action/auth-action";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { userRole } from "@/constant/constant-variable";
import { useGoogleAuthMutation } from "@/redux/api/auth/authApi";
import { setUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { getUserSession } from "@/services/getUserSession";
import { TUser } from "@/type/user.types";
import { verifyToken } from "@/utils/verifyToken";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import SocialLogin from "../ui/SocialLogin";

const GoogleSignUp = () => {
  const [openGoogleModal, setOpenGoogleModal] = useState(false);
  const [socialLogin] = useGoogleAuthMutation();
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleGoogleSignIn = async (user: string) => {
    localStorage.setItem("userType", user);
    const response = await signIn("google", { redirect: false });

    if (response?.ok) {
      console.log("Google sign up successful!");
    }
  };

  useEffect(() => {
    const checkSession = async () => {
      const session = await getUserSession();
      const userType = localStorage.getItem("userType");
      if (session?.user) {
        const userData = {
          fullName: session?.user?.name,
          email: session?.user?.email,
          role: userType,
          image: session?.user?.image,
        };
        const result = await socialLogin(userData).unwrap();
        console.log(result);

        if (result?.success) {
          const user = verifyToken(result?.data?.accessToken) as TUser;
          dispatch(
            setUser({
              user: user,
              token: result?.data?.accessToken,
              phoneNumber: result?.data?.phoneNumber,
            })
          );

          await saveTokenInCookies(result?.data?.accessToken);

          //   Swal.fire({
          //     title: "Success",
          //     text: "You have been logged in successfully",
          //     icon: "success",
          //   });

          if (userType === userRole.CANDIDATE) {
            router.push("/candidate-dashboard");
          } else if (userType === userRole.EMPLOYER) {
            router.push("/recruiter/dashboard");
          }
        }
      }
    };
    checkSession();
  }, [dispatch, router, socialLogin]);

  return (
    <>
      <div className="lg:w-[400px] lg:mx-auto hover:shadow-lg transition-all duration-300 ease-in-out">
        <SocialLogin setOpenGoogleModal={setOpenGoogleModal} />
      </div>
      {/* Google Login Options Dialog */}
      <Dialog open={openGoogleModal} onOpenChange={setOpenGoogleModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Google Sign Up</DialogTitle>
            <DialogDescription>Select a role to sign up</DialogDescription>
          </DialogHeader>
          <div className="flex items-center gap-3 my-4">
            <Button
              onClick={() => handleGoogleSignIn("CANDIDATE")}
              className="w-full bg-primary text-white"
            >
              Candidate
            </Button>
            <Button
              onClick={() => handleGoogleSignIn("EMPLOYER")}
              className="w-full bg-secondary text-white"
            >
              Employer
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default GoogleSignUp;
