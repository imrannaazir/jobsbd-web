"use client";
import logo from "@/assets/jobsbd-logo.png";
import Image from "next/image";

const Loading = () => {
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <Image src={logo} width={130} height={100} alt="logo" className="mb-3" />

      <div className="loader" />
    </div>
  );
};

export default Loading;
