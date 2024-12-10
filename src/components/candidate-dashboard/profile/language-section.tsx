"use client";
import logo from "@/assets/main/logo-transparent.png";
import { useGetLanguagesQuery } from "@/redux/api/candidate/candidateApi";
import Image from "next/image";
import SectionTitle from "../section-title";
import LanguageModal from "./language-modal";
import LanguageTable from "./language-table";

const LanguageSection = () => {
  const { data, isLoading } = useGetLanguagesQuery("");
  if (isLoading) {
    return (
      <div className="flex flex-col h-screen items-center justify-center">
        <Image
          src={logo}
          width={130}
          height={100}
          alt="logo"
          className="-mb-6"
        />

        <div className="loader" />
      </div>
    );
  }
  return (
    <div className="section-design">
      <SectionTitle label="Languages" component={<LanguageModal />} />
      <div className="p-4">
        <LanguageTable languages={data?.data} />
      </div>
    </div>
  );
};

export default LanguageSection;
