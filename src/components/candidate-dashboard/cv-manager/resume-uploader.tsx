"use client";

import { useState } from "react";
import { FileUp, X } from "lucide-react";
import { uploadPdf } from "@/action/file-upload-action";
import Swal from "sweetalert2";
import { useAddResumeMutation } from "@/redux/api/resume/resumeApi";
import { usePathname } from "next/navigation";

export default function ResumeUploader() {
  const pathname = usePathname();

  const [uploadResume] = useAddResumeMutation();
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];

      // Check file size (10MB = 10 * 1024 * 1024 bytes)
      if (selectedFile.size > 10 * 1024 * 1024) {
        setError("File size must be less than 10MB");
        return;
      }

      // Check file type
      const validTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (!validTypes.includes(selectedFile.type)) {
        setError("Please upload a PDF, DOC, or DOCX file");
        return;
      }

      setFile(selectedFile);
      setError(null);
      setUploading(false);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const url = await uploadPdf(formData);
      const resumeData = {
        url,
        file_name: file.name,
      };
      console.log(resumeData, "resume data");
      const res = await uploadResume(resumeData);

      console.log(res, "response");
      if (res.data) {
        Swal.fire({
          title: "Upload Successful",
          text: "Your resume has been uploaded successfully",
          icon: "success",

          showConfirmButton: pathname === "/candidate-dashboard/cv-manager",
          timer:
            pathname !== "/candidate-dashboard/cv-manager" ? 1500 : undefined,
        });

        setFile(null);
        setError(null);
        setUploading(false);
      }
    } catch (error) {
      console.error("Upload failed:", error);
      setError("Upload failed. Please try again.");
      Swal.fire({
        title: "Upload Failed",
        text: "Your resume upload failed. Please try again.",
        icon: "error",
      });
    } finally {
      setUploading(false);
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
    setError(null);
  };

  if (file) {
    return (
      <div className="border-2 border-dashed border-blue-300 rounded-lg p-6">
        <div className="relative flex flex-col items-center gap-4">
          <button
            onClick={handleRemoveFile}
            className="absolute -top-2 -left-2 text-gray-500 hover:text-gray-700"
            aria-label="Remove file"
          >
            <X className="w-4 h-4 text-red-500" />
          </button>
          <p className="text-gray-700">{file.name}</p>
          <button
            onClick={handleUpload}
            disabled={uploading}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {uploading ? "UPLOADING..." : "UPLOAD RESUME"}
          </button>
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <input
        type="file"
        id="resume-upload"
        accept=".pdf,.doc,.docx"
        onChange={handleFileChange}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
      />
      <div className="border-2 border-dashed border-blue-300 rounded-lg p-8 text-center">
        <div className="space-y-1">
          <div className="flex items-center justify-center gap-2 rounded-full bg-bgColour w-[300px] mx-auto py-2">
            <FileUp className="text-primary" />
            <p className="text-lg font-semibold text-primary">Upload Resume</p>
          </div>
          <p className="text text-gray-500">
            Supported Formats: doc, docx, pdf upto 10 MB
          </p>
        </div>
      </div>
    </div>
  );
}
