"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
const LanguageTable = ({
  languages,
}: {
  languages: Array<{ [key: string]: any }>;
}) => {
  return (
    <Table>
      <TableHeader>
        <TableRow className="text-gray-700">
          <TableHead>Languages</TableHead>
          <TableHead>Proficiency</TableHead>
          
        </TableRow>
      </TableHeader>
      <TableBody>
        {languages.map((language) => (
          <TableRow key={language._id}>
            <TableCell className="font-medium">{language.name}</TableCell>
            <TableCell>{language.proficiency}</TableCell>
            <TableCell>button</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default LanguageTable;
