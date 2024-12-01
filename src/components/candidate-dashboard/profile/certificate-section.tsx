"use client"
import SectionTitle from "../section-title";
import CertificateModal from "./certificate-modal";
import { useGetAllCertificatesQuery } from "@/redux/api/candidate/candidateApi";
import { convertIntoDateString } from "@/utils/convert-into-date-string";

type TCertificate = {
  id: string;
  certificateName: string;
  certificateUrl: string;
  description: string;
  duration: string;
  institution: string;
  endDate: Date;
  startDate: Date;
};

const CertificateSection = () => {
  const { data, isLoading } = useGetAllCertificatesQuery("");
  return (
    <div className="section-design">
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
                <p>{convertIntoDateString(certificate?.endDate as Date)}</p>
              </div>
              <p className="font-bold">
                Duration: <span>{certificate?.duration}</span>
              </p>
              {!isLoading && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: certificate?.description,
                  }}
                ></div>
              )}
              {!isLoading && !certificate?.description && (
                <p className="text-gray-600 text-sm p-4">This is a details.</p>
              )}
            </div>
          </div>
        ))}
    </div>
  );
};

export default CertificateSection;
