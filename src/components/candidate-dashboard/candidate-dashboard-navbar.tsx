/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { BsBuildings } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { CiLogout } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import {
  MdOutlineContactPage,
  MdOutlineDashboard,
  MdOutlineWorkHistory,
} from "react-icons/md";
import { RiListSettingsLine } from "react-icons/ri";

import { removeRefreshToken } from "@/action/auth-action";
import defaultImg from "@/assets/candidate-dashboard/candidate-default.png";
import CircularProgressBar from "@/components/candidate-dashboard/circular-progress-bar";
import { logout } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import {
  useGetCandidateInfoQuery,
  useUpdateCandidateInfoMutation,
} from "@/redux/api/candidate/candidateApi";
import Divider from "../ui/Divider";
import NameDesignationEditModal from "./name-designation-edit-modal";
import { ImageUpload } from "./image-upload";
import type { StaticImageData } from "next/image";
import { uploadImage } from "@/action/file-upload-action";
import Swal from "sweetalert2";

const CandidateDashboardNavbar: React.FC = () => {
  const { data } = useGetCandidateInfoQuery("");
  const [updateImage] = useUpdateCandidateInfoMutation();
  const router = useRouter();
  const currentPath = usePathname();
  const dispatch = useAppDispatch();
  const [profileImage, setProfileImage] = useState<string | StaticImageData>(
    defaultImg || data?.data?.image
  );

  useEffect(() => {
    if (data?.data?.image) {
      setProfileImage(data.data.image);
    }
  }, [data]);

  const navLinks = [
    {
      label: "Dashboard",
      icon: <MdOutlineDashboard size={25} />,
      href: "/candidate-dashboard",
    },
    {
      label: "Profile",
      icon: <CgProfile size={25} />,
      href: "/candidate-dashboard/profile",
    },
    {
      label: "CV Manager",
      icon: <MdOutlineContactPage size={25} />,
      href: "/candidate-dashboard/cv-manager",
    },
    {
      label: "Applied Jobs",
      icon: <MdOutlineWorkHistory size={25} />,
      href: "/candidate-dashboard/applied-jobs",
    },
    {
      label: "Saved Jobs",
      icon: <FaRegHeart size={25} />,
      href: "/candidate-dashboard/saved-jobs",
    },
    {
      label: "Followed Company",
      icon: <BsBuildings size={25} />,
      href: "/candidate-dashboard/followed-companies",
    },
    {
      label: "Setting",
      icon: <RiListSettingsLine size={25} />,
      href: "/candidate-dashboard/candidate-change-password",
    },
  ];

  const handleLogOut = async () => {
    dispatch(logout());
    await removeRefreshToken();
    router.push("/");
  };

  const handleImageUpload = async (file: File) => {
    try {
      const formData = new FormData();
      formData.append("file", file);

      const imageUrl = await uploadImage(formData);
      setProfileImage(imageUrl);
      const res = await updateImage({
        image: imageUrl,
      });
      if (res?.data) {
        Swal.fire("Success", "Profile Image Uploaded successfully!", "success");
      }
    } catch (error) {
      Swal.fire("Error", "Something went wrong while deleting.", "error");
    }
  };

  return (
    <>
      <div className="bg-white lg:w-[316px] shadow-md lg:min-h-screen rounded z-10">
        <div className="flex flex-row lg:flex-col items-center gap-5 sticky lg:static top-14 bg-white lg:bg-transparent p-5 lg:p-0 border-b lg:border-b-0 shadow-md lg:shadow-none">
          <div className="relative flex items-center justify-center">
            <CircularProgressBar />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <ImageUpload
                currentImage={profileImage}
                onUpload={handleImageUpload}
              />
            </div>
          </div>
          <div className="flex items-center justify-center gap-5 mb-2">
            <div>
              <h3 className="text-xl font-bold text-center">
                {data?.data?.fullName}
              </h3>
              <p className="text-center text-gray-500 mt-2">
                {data?.data?.designation}
              </p>
            </div>
            <NameDesignationEditModal />
          </div>
        </div>
        <Divider />
        <ul className="mt-2 md:mt-0 grid grid-cols-2 lg:grid-cols-1 gap-2 md:gap-0">
          {navLinks.map((link, index) => (
            <li key={index} className="border lg:border-none p-2 lg:p-0">
              <Link
                href={link.href}
                className={
                  currentPath === link.href
                    ? "flex items-center text-sm lg:text-base gap-3 py-2 px-3 bg-[#EFF7FF] transition text-primary font-semibold border-l-4 border-primary"
                    : "flex items-center text-sm lg:text-base gap-3 py-2 px-3 hover:bg-[#EFF7FF] text-gray-800 transition font-semibold"
                }
              >
                <span className="p-2 rounded-full shadow">{link.icon}</span>
                {link.label}
              </Link>
            </li>
          ))}
          <li
            onClick={handleLogOut}
            className="flex items-center text-sm lg:text-base gap-3 py-2 px-3 font-semibold cursor-pointer"
          >
            <span className="p-2 rounded-full shadow">
              <CiLogout size={25} />
            </span>
            Logout
          </li>
        </ul>
      </div>
    </>
  );
};

export default CandidateDashboardNavbar;
