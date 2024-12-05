/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Dispatch, SetStateAction, useEffect } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

import RichTextEditor from "@/components/rich-text-editor/rich-text-editor";
import { Button } from "@/components/ui/button";
import CustomModal from "@/components/ui/custom-modal";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import {
  useGetCandidateInfoQuery,
  useUpdateCandidateInfoMutation,
} from "@/redux/api/candidate/candidateApi";
import { z } from "zod";

// Define the schema for validation
const summaryFormSchema = z.object({
  bio: z.string().min(1, "Summary is required"),
});

type SummaryUpdateModalProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const SummaryUpdateModal = ({ isOpen, setIsOpen }: SummaryUpdateModalProps) => {
  const { data: candidateInfo, isLoading } = useGetCandidateInfoQuery("");
  const [updateCandidateInfo] = useUpdateCandidateInfoMutation();

  const form = useForm<z.infer<typeof summaryFormSchema>>({
    resolver: zodResolver(summaryFormSchema),
    defaultValues: {
      bio: candidateInfo?.data?.bio || "",
    },
  });

  useEffect(() => {
    if (!isLoading && candidateInfo?.data) {
      form.reset({ bio: candidateInfo.data.bio });
    }
  }, [candidateInfo, isLoading, form]);

  const onSubmit = async (data: { bio: string }) => {
    try {
      const response = await updateCandidateInfo(data).unwrap();
      if (response?.data) {
        Swal.fire({
          title: "Success",
          text: "Summary updated successfully.",
          icon: "success",
        });
        setIsOpen(false);
      }
    } catch (error) {
      Swal.fire(
        "Error",
        "Failed to update the summary. Please try again.",
        "error"
      );
    }
  };

  return (
    <CustomModal
      title="Update Summary"
      open={isOpen}
      setOpen={setIsOpen}
      buttonType={null}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            name="bio"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <RichTextEditor
                    initialContent={field.value}
                    onChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex items-center justify-end">
            <Button type="submit" className="uppercase">
              Update
            </Button>
          </div>
        </form>
      </Form>
    </CustomModal>
  );
};

export default SummaryUpdateModal;
