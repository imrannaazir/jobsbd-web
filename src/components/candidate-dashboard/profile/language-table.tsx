"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Pencil, X } from "lucide-react";

interface Language {
  _id: string;
  language: string;
  proficiency: string;
}

export default function LanguageTable({
  languages,
}: {
  languages: Language[];
}) {
  return (
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
          <TableRow key={language._id}>
            <TableCell className="text-gray-700">{language.language}</TableCell>
            <TableCell className="text-gray-600">
              {language.proficiency}
            </TableCell>
            <TableCell className="text-right">
              <div className="flex justify-end space-x-2">
                <button
                  className="p-2 text-blue-500 bg-blue-50 rounded-md hover:bg-blue-100 transition-colors"
                  aria-label="Edit language"
                >
                  <Pencil className="h-4 w-4" />
                </button>
                <button
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
  );
}
