"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/main/logo-transparent.png";
import Container from "../main/Container";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logout } from "@/redux/features/auth/authSlice";
import userIcon from "../../assets/candidate-dashboard/candidate-default.png";
// import { useGetCandidateInfoQuery } from "@/redux/api/candidate/candidateApi";

const RecruiterNavbar = () => {
  const dispatch = useAppDispatch();
  // const userInfo = useAppSelector((state) => state.auth.user);
  const token = useAppSelector((state) => state.auth.token);
  // const { data, isLoading } = useGetCandidateInfoQuery("");

  const handleLogOut = () => {
    dispatch(logout());
  };

  return (
    <header className="fixed top-0 w-full border-b-2 h-20 flex justify-center items-center z-50 bg-white">
      <Container>
        <div className="flex items-center justify-between py-2">
          <div className="inline-flex items-center space-x-2">
            <Link href="/">
              <Image
                src={logo}
                width={100}
                height={100}
                alt="logo"
                className=""
              />
            </Link>
          </div>

          <div>
            <div className="inline-flex justify-center items-center space-x-10">
              <div className="hidden lg:block">
                <Link
                  href="/"
                  className="font-semibold text-lg hover:text-primary"
                >
                  Candidate
                </Link>
              </div>

              <div className="hidden lg:block">
                <Link
                  href="/contact-us"
                  className="font-semibold text-lg hover:text-primary"
                >
                  Get Support
                </Link>
              </div>
              {token && (
                <div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <div className="flex items-center justify-center gap-5 cursor-pointer">
                        <Image
                          src={userIcon}
                          width={40}
                          height={40}
                          className="size-10 rounded-full"
                          alt="user"
                        />
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56 mt-3">
                      <DropdownMenuGroup className="cursor-pointer">
                        <Link href="/">
                          <DropdownMenuItem className="cursor-pointer">
                            Candidate
                          </DropdownMenuItem>
                        </Link>
                        <Link href="/contact-us">
                          <DropdownMenuItem className="cursor-pointer">
                            Get Support
                          </DropdownMenuItem>
                        </Link>
                        <Link href="/recruiter/dashboard">
                          <DropdownMenuItem className="cursor-pointer">
                            Dashboard
                          </DropdownMenuItem>
                        </Link>
                        <Link href="/recruiter/company-profile">
                          <DropdownMenuItem className="cursor-pointer">
                            Company Profile
                          </DropdownMenuItem>
                        </Link>
                        <Link href="/recruiter/recruiter-settings">
                          <DropdownMenuItem className="cursor-pointer">
                            Settings
                          </DropdownMenuItem>
                        </Link>
                      </DropdownMenuGroup>

                      <div className="p-2">
                        <Button
                          onClick={handleLogOut}
                          className="bg-white w-full border-2 border-primary text-primary cursor-pointer hover:bg-[#ECF0F3]"
                        >
                          Logout
                        </Button>
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default RecruiterNavbar;
