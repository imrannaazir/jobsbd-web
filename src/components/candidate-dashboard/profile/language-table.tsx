/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { useDeleteLanguageMutation } from "@/redux/api/candidate/candidateApi";
import { Pencil, X } from "lucide-react";
import { useState } from "react";
import Swal from "sweetalert2";
import LanguageUpdateModal from "./language-update-modal";
import UpdateLanguageModal from "./language-update-modal";
// Import update modal

interface Language {
  id: string;
  _id: string;
  language: string;
  proficiency: string;
}

export default function LanguageTable({
  languages,
}: {
  languages: Language[];
}) {
  const [deleteLanguage] = useDeleteLanguageMutation();
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<Language | null>(
    null
  );

  const handleUpdate = (language: Language) => {
    setSelectedLanguage(language);
    setOpenUpdateModal(true);
  };

  const handleDelete = async (id: string) => {
    console.log(id);
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
        const data = await deleteLanguage(id).unwrap();
        if (data?.success) {
          Swal.fire({
            title: "Success",
            text: "Language has been deleted successfully",
            icon: "success",
          });
        }
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Something went wrong while deleting.",
        icon: "error",
      });
    }
  };

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-base font-semibold text-gray-700">
              Languages
            </TableHead>
            <TableHead className="text-base font-semibold text-gray-700">
              Proficiency
            </TableHead>
            <TableHead />
          </TableRow>
        </TableHeader>
        <TableBody>
          {languages.map((language) => (
            <TableRow key={language.language}>
              <TableCell className="text-gray-700">
                {language.language}
              </TableCell>
              <TableCell className="text-gray-600">
                {language.proficiency}
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end space-x-2">
                  <button
                    onClick={() => handleUpdate(language)}
                    className="p-2 text-blue-500 bg-blue-50 rounded-md hover:bg-blue-100 transition-colors"
                    aria-label="Edit language"
                  >
                    <Pencil className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(language.id)}
                    className="p-2 text-red-500 bg-red-50 rounded-md hover:bg-red-100 transition-colors"
                    aria-label="Delete language"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {selectedLanguage && (
        <UpdateLanguageModal
          languageData={selectedLanguage}
          open={openUpdateModal}
          setOpen={setOpenUpdateModal}
        />
      )}
    </div>
  );
}
