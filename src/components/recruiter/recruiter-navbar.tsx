"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/main/logo-transparent.png";
import Container from "../main/Container";

const RecruiterNavbar = () => {
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

          <div className="hidden lg:block">
            <ul className="inline-flex justify-center items-center space-x-5">
              <li>
                <Link href="/" className="font-semibold text-lg hover:text-primary">
                  Candidate
                </Link>
              </li>

              <li>
                <Link
                  href="/contact-us"
                  className="font-semibold text-lg hover:text-primary"
                >
                  Get Support
                </Link>
              </li>
              <li>
                <Link href="/" className="font-semibold text-lg">
                  Dropdown
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default RecruiterNavbar;
