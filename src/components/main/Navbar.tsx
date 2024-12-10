"use client";

import { removeRefreshToken } from "@/action/auth-action";
import logo from "@/assets/jobsbd-logo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useGetCandidateInfoQuery } from "@/redux/api/candidate/candidateApi";
import { logout } from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { FaChevronDown } from "react-icons/fa";
import userIcon from "../../assets/candidate-dashboard/candidate-default.png";
import { Button } from "../ui/button";
import Container from "./Container";
import MobileNavbar from "./MobileNavbar";
import { userRole } from "@/constant/constant-variable";

const Navbar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentPath = usePathname();
  const dispatch = useAppDispatch();
  const [isClient, setIsClient] = useState(false);
  const token = useAppSelector((state) => state.auth.token);
  const user = useAppSelector((state) => state.auth.user);
  const { data, isLoading } = useGetCandidateInfoQuery("");

  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogOut = async () => {
    dispatch(logout());
    await removeRefreshToken();
    router.push("/");
  };

  const defaultRoutesForNav = () => {
    return (
      <>
        <li>
          <Link
            href="/login"
            className="nav-link border-2 border-[#155EAD] hover:bg-[#DCEFFF]"
          >
            Login
          </Link>
        </li>
        <li>
          <Link
            href="/candidate-register"
            className="nav-link bg-[#155EAD] text-white hover:bg-primary"
          >
            Register
          </Link>
        </li>
        <li>
          <Link
            href="/employee-login"
            className="nav-link text-[#424447] bg-[#93949572] hover:bg-[#DCEFFF]"
          >
            For Employers
          </Link>
        </li>
      </>
    );
  };

  const renderAuthButtons = () => {
    if (!isClient) return null; // Return null on the server-side

    return (
      <>
        {token ? (
          user?.role === userRole.CANDIDATE ? (
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="flex items-center justify-center gap-3 cursor-pointer">
                    <Image
                      src={userIcon}
                      width={40}
                      height={40}
                      className="size-10 rounded-full"
                      alt="user"
                    />
                    <div>
                      <h2 className="text-sm font-semibold">
                        {!isLoading && (data?.data?.fullName || "Loading...")}
                      </h2>
                      <p className="text-sm">Candidate</p>
                    </div>
                    <div>
                      <FaChevronDown className="size-4" />
                    </div>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 mt-3">
                  <DropdownMenuGroup className="cursor-pointer">
                    <Link href="/candidate-dashboard">
                      <DropdownMenuItem className="cursor-pointer">
                        <div className="flex items-center justify-center gap-3 cursor-pointer">
                          <Image
                            src={userIcon}
                            width={40}
                            height={40}
                            className="size-10 rounded-full"
                            alt="user"
                          />
                          <div>
                            <h2 className="text-sm font-semibold">
                              {!isLoading &&
                                (data?.data?.fullName || "Loading...")}
                            </h2>
                            <p className="text-sm">Go To Dashboard</p>
                          </div>
                        </div>
                      </DropdownMenuItem>
                    </Link>
                    <Link href="/candidate-dashboard/profile">
                      <DropdownMenuItem className="cursor-pointer">
                        View Profile
                      </DropdownMenuItem>
                    </Link>
                    <Link href="/candidate-dashboard/candidate-change-password">
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
            </li>
          ) : user?.role === userRole.EMPLOYER ? (
            <li>
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
            </li>
          ) : (
            <>{defaultRoutesForNav()}</>
          )
        ) : (
          <>{defaultRoutesForNav()}</>
        )}
      </>
    );
  };

  return (
    <header className="fixed top-0 w-full border-b-2 h-20 lg:h-28 flex justify-center items-center z-50 bg-white">
      <Container>
        <div className="flex items-center justify-between py-2">
          <div className="inline-flex items-center space-x-2">
            <Link href="/">
              <Image
                src={logo}
                width={100}
                height={100}
                alt="logo"
                className="size-16 lg:size-24"
              />
            </Link>
          </div>

          <div className="hidden lg:block">
            <ul className="inline-flex justify-center items-center space-x-5">
              <li>
                <Link
                  href="/"
                  className={
                    currentPath === "/"
                      ? "nav-link bg-[#DCEFFF]"
                      : "nav-link nav-not-active"
                  }
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/jobs"
                  className={
                    currentPath === "/jobs"
                      ? "nav-link bg-[#DCEFFF]"
                      : "nav-link nav-not-active"
                  }
                >
                  Find Job
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className={
                    currentPath === "/contact-us"
                      ? "nav-link bg-[#DCEFFF]"
                      : "nav-link nav-not-active"
                  }
                >
                  Get Support
                </Link>
              </li>
              {renderAuthButtons()}
            </ul>
          </div>

          <div className="lg:hidden flex justify-center items-center relative z-50">
            <BiMenu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
          </div>

          {isMenuOpen && (
            <div
              className="fixed inset-0 z-40 bg-black bg-opacity-50"
              onClick={toggleMenu}
            >
              <div
                className={`fixed top-0 right-0 h-full sm:w-1/2 w-full shadow-lg z-50 transform translate-x-0 transition-transform duration-300 ease-in-out`}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Menu Content */}
                <MobileNavbar toggleMenu={toggleMenu} />
              </div>
            </div>
          )}
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
