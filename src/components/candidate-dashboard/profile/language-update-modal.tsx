/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useUpdateLanguageMutation } from "@/redux/api/candidate/candidateApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { z } from "zod";

const LanguageSchema = z.object({
  language: z.string().min(1, "Language is required."),
  proficiency: z.string().min(1, "Proficiency is required."),
});

type LanguageForm = z.infer<typeof LanguageSchema>;
type Language = {
  id: string;
  language: string;
  proficiency: string;
};

const UpdateLanguageModal = ({
  languageData,
  open,
  setOpen,
}: {
  languageData: Language;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [updateLanguage] = useUpdateLanguageMutation();

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<LanguageForm>({
    resolver: zodResolver(LanguageSchema),
    defaultValues: {
      language: languageData.language,
      proficiency: languageData.proficiency,
    },
  });

  useEffect(() => {
    if (languageData) {
      setValue("language", languageData.language);
      setValue("proficiency", languageData.proficiency);
    }
  }, [languageData, setValue]);

  const onSubmit = async (data: LanguageForm) => {
    const modifiedData = {
      language: data.language,
      proficiency: data.proficiency,
    };
    try {
      const response = await updateLanguage({
        id: languageData.id,
        data: modifiedData,
      }).unwrap();
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
          title: "Language Updated",
          text: "Language has been updated successfully",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
        setOpen(false);
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Failed to update Language",
        icon: "error",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update Language</DialogTitle>
        </DialogHeader>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">
                Language
              </label>
              <Controller
                name="language"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
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
                )}
              />
              {errors.language && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.language.message}
                </p>
              )}
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">
                Proficiency
              </label>
              <Controller
                name="proficiency"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Proficiency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="BASIC">BASIC</SelectItem>
                      <SelectItem value="FLUENT">FLUENT</SelectItem>
                      <SelectItem value="NATIVE">NATIVE</SelectItem>
                      <SelectItem value="CONVERSATIONAL">
                        CONVERSATIONAL
                      </SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.proficiency && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.proficiency.message}
                </p>
              )}
            </div>
          </div>
          <DialogFooter className="flex justify-end gap-4">
            <Button type="submit">Update</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateLanguageModal;
