"use client";

import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import { BiMenu } from "react-icons/bi";
import { useState } from "react";
import logo from "@/assets/main/logo-transparent.png";
import { usePathname } from "next/navigation";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentPath = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
                  href="/job"
                  className={
                    currentPath === "/job"
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
