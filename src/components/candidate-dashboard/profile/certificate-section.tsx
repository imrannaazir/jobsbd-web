/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import {
  useDeleteCertificateMutation,
  useGetAllCertificatesQuery,
} from "@/redux/api/candidate/candidateApi";
import { convertIntoDateString } from "@/utils/convert-into-date-string";
import { useState } from "react";
import { FiDelete, FiEdit } from "react-icons/fi";
import Swal from "sweetalert2";
import SectionTitle from "../section-title";
import CertificateModal from "./certificate-modal";
import CertificateUpdateModal from "./certificate-update-modal";
import { TCertificate } from "@/type/certificate.types";



const CertificateSection = () => {
  const { data, isLoading } = useGetAllCertificatesQuery("");
  const [deleteCertificate] = useDeleteCertificateMutation();

  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] =
    useState<TCertificate | null>(null);

  const handleDelete = async (id: string) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        const response = await deleteCertificate(id).unwrap();
        if (response?.data?.id) {
          Swal.fire(
            "Deleted!",
            "Certificate record has been deleted.",
            "success"
          );
        }
      }
    } catch (error) {
      Swal.fire("Error", "Something went wrong while deleting.", "error");
    }
  };

  const handleUpdate = (certificate: TCertificate) => {
    setSelectedCertificate(certificate);
    setUpdateModalOpen(true);
  };

  return (
    <div className="section-design relative">
      <SectionTitle
        label="Training & Certifications"
        component={<CertificateModal />}
      />

      {!isLoading &&
        data?.data?.map((certificate: TCertificate) => (
          <div className="p-4 border-b" key={certificate.id}>
            <p className="text-primary font-bold mb-5">
              {certificate?.certificateName}
            </p>
            <div className="pb-4 mb-6 border-b flex flex-col gap-2">
              <p className="font-bold">
                Institute Name: <span>{certificate?.institution}</span>
              </p>
              <div className="flex items-center gap-2 mt-2">
                <p>{convertIntoDateString(certificate?.startDate)}</p> -
                <p>{convertIntoDateString(certificate?.endDate)}</p>
              </div>
              <p className="font-bold">
                Duration: <span>{certificate?.duration}</span>
              </p>
              <div
                dangerouslySetInnerHTML={{
                  __html: certificate?.description || "",
                }}
                className="text-gray-600 text-sm"
              />
              <div className="flex justify-end absolute right-0 gap-4 mr-2">
                <button
                  onClick={() => handleUpdate(certificate)}
                  className="px-4 py-2 text-sm font-medium bg-[#E5F4FF] rounded text-blue-500"
                >
                  <FiEdit />
                </button>
                <button
                  onClick={() => handleDelete(certificate.id)}
                  className="px-4 py-2 text-sm font-medium text-red-500 bg-[#FEEFEE] rounded "
                >
                  <FiDelete />
                </button>
              </div>
            </div>
          </div>
        ))}

      {selectedCertificate && (
        <CertificateUpdateModal
          isOpen={isUpdateModalOpen}
          setIsOpen={setUpdateModalOpen}
          certificate={selectedCertificate}
        />
      )}
    </div>
  );
};

export default CertificateSection;
