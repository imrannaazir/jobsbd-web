"use client";

import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import { BiMenu } from "react-icons/bi";
import { useState } from "react";
import logo from "@/assets/main/logo-transparent.png";
import { usePathname } from "next/navigation";
import MobileNavbar from "./MobileNavbar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logout } from "@/redux/features/auth/authSlice";
import userIcon from '../../assets/candidate-dashboard/candidate-default.png';
import { useGetCandidateInfoQuery } from "@/redux/api/candidate/candidateApi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentPath = usePathname();
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector((state) => state.auth.user);
  const token = useAppSelector((state) => state.auth.token);
  const {data, isLoading} = useGetCandidateInfoQuery("");

  console.log(data?.data, userInfo);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogOut = () => {
    dispatch(logout());
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
                className=""
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
              {
                token ? <li>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <div className="flex items-center justify-center gap-3 cursor-pointer">
                      <Image
                        src={userIcon}
                        width={32}
                        height={32}
                        className="size-7 rounded-full"
                        alt="user"
                      />
                    <div>
                      <h2>{!isLoading && data?.data?.fullName}</h2>
                      <p>Candidate</p>
                    </div>
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56 mt-3">
                    <DropdownMenuLabel className="text-center">
                      name
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup className="cursor-pointer">
                      <Link href="/admin/profile">
                        <DropdownMenuItem className="cursor-pointer">
                          Profile
                        </DropdownMenuItem>
                      </Link>
                      <Link href="/admin/profile">
                        <DropdownMenuItem className="cursor-pointer">
                          Profile
                        </DropdownMenuItem>
                      </Link>
                      <DropdownMenuItem className="cursor-pointer">
                        Settings
                      </DropdownMenuItem>
                    </DropdownMenuGroup>

                    <div className="p-2">
                      <Button
                        onClick={handleLogOut}
                        className="bg-[#265450] w-full hover:bg-[#265450]/90 text-white cursor-pointer"
                      >
                        Logout
                      </Button>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li> 
              :
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
              }
                
             
                
              
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
