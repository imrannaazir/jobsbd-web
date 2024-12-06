import ResumeUploader from "@/components/candidate-dashboard/cv-manager/resume-uploader";
import UploadedCvSection from "@/components/candidate-dashboard/cv-manager/uploaded-cv-section";



const CVManagerPage = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-6 bg-white rounded-md relative z-20 shadow-md">
        <div>
          <div className="flex flex-col border-b-2 mb-2">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              Upload Resume
            </h1>

            <p className=" text-sm text-primary font-bold mb-5">
              Resume is the most important document recruiters look for.
              Recruiters generally do not look at profiles without resumes.
            </p>
          </div>
          {/* upload Resume card container*/}
          <div className="py-12">
            <ResumeUploader />
          </div>
        </div>
      </div>
      {/* uploaded cv */}
      <UploadedCvSection/>
    </>
  );
};

export default CVManagerPage;
