import { MenuManager } from "@/type";
import Link from "next/link";
import { BiX } from "react-icons/bi";
import logo from "@/assets/main/logo-transparent.png";
import Image from "next/image";

const MobileNavbar = ({ toggleMenu }: MenuManager) => {
  return (
    <div
      className={`relative z-50 origin-top-right transform p-2 transition-transform lg:hidden duration-500 ease-in-out mt-10`}
    >
      <div className="divide-y divide-gray-200 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
        {/* Header Section */}
        <div className="px-5 pb-4 pt-5">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <div className="inline-flex items-center space-x-2">
              <Image src={logo} width={100} height={100} alt="logo" />
            </div>
            {/* Close Button */}
            <div className="-mr-2">
              <button
                onClick={toggleMenu}
                className="w-full h-full rounded-full p-2"
              >
                <span className="sr-only">Close menu</span>
                <BiX className="text-gray-800 size-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="px-5 py-4">
          <nav className="flex flex-col gap-4">
            <Link
              href="/"
              className="font-semibold text-gray-700 hover:text-blue-500"
            >
              Home
            </Link>
            <Link
              href="/find-job"
              className="font-semibold text-gray-700 hover:text-blue-500"
            >
              Find Job
            </Link>
            <Link
              href="/high-paid-job"
              className="font-semibold text-gray-700 hover:text-blue-500"
            >
              High Paid Job
            </Link>
            <Link
              href="/contact-us"
              className="font-semibold text-gray-700 hover:text-blue-500"
            >
              Get Support
            </Link>

            {/* Divider */}
            <hr className="my-2 border-gray-300" />

            {/* Employer Section */}
            <Link href="/employee-login">
              <button className="w-full py-2 px-4 font-semibold text-sm bg-gray-200 rounded-md hover:bg-gray-300">
                FOR EMPLOYERS
              </button>
            </Link>

            {/* Login & Register Buttons */}
            <div className="flex flex-col justify-between gap-2 mt-2">
              <Link href="/login">
                <button className="w-full py-2 px-4 border rounded-md text-sm font-semibold text-gray-700 hover:bg-gray-100">
                  LOGIN
                </button>
              </Link>
              <Link href="/candidate-register">
                <button className="w-full py-2 px-4 bg-primary text-white rounded-md text-sm font-semibold hover:bg-blue-600">
                  REGISTER
                </button>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
