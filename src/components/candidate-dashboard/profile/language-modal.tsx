/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAddLanguageMutation } from "@/redux/api/candidate/candidateApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { z } from "zod";

const LanguageSchema = z.object({
  language: z.string().min(1, "Language is required."),
  proficiency: z.string().min(1, "Proficiency is required."),
});

type LanguageForm = z.infer<typeof LanguageSchema>;

const LanguageModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [addLanguage] = useAddLanguageMutation();

  const {
    handleSubmit,
    setValue,

    formState: { errors },
  } = useForm<LanguageForm>({
    resolver: zodResolver(LanguageSchema),
  });

  const onSubmit = async (data: LanguageForm) => {
    try {
      const response = await addLanguage(data).unwrap();
      if (response.success === false) {
        Swal.fire({
          title: "Error",
          text: response?.errorDetails,
          icon: "error",
          showConfirmButton: false,
          timer: 1500,
        });
      } else if (response?.data) {
        Swal.fire({
          title: "Language Added",
          text: "Language has been added successfully",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
        setIsOpen(false);
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Error",
        text: "Failed to add Language",
        icon: "error",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="flex items-center gap-2 bg-[#D0EFFF] hover:bg-[#D0EFFF] hover:text-[#027BC1]"
        >
          Add <Plus className="w-4 h-4" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New Language</DialogTitle>
        </DialogHeader>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">
                Language
              </label>
              <Select
                onValueChange={(value) =>
                  setValue("language", value, { shouldValidate: true })
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="BENGALI">BENGALI</SelectItem>
                  <SelectItem value="ENGLISH">ENGLISH</SelectItem>
                  <SelectItem value="FRENCH">FRENCH</SelectItem>
                  <SelectItem value="SPANISH">SPANISH</SelectItem>
                  <SelectItem value="GERMAN">GERMAN</SelectItem>
                  <SelectItem value="ARABIC">ARABIC</SelectItem>
                </SelectContent>
              </Select>
              {errors.language && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.language.message}
                </p>
              )}
            </div>

            {/* Proficiency Field */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">
                Proficiency
              </label>
              <Select
                onValueChange={(value) =>
                  setValue("proficiency", value, { shouldValidate: true })
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Proficiency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="BASIC">BASIC</SelectItem>
                  <SelectItem value="FLUENT">FLUENT</SelectItem>
                  <SelectItem value="NATIVE">NATIVE</SelectItem>
                  <SelectItem value="CONVERSATIONAL">CONVERSATIONAL</SelectItem>
                </SelectContent>
              </Select>
              {errors.proficiency && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.proficiency.message}
                </p>
              )}
            </div>
          </div>
          <DialogFooter className="flex justify-end gap-4">
            <Button type="submit">Submit</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LanguageModal;
