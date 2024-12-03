"use client";

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
import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const SummaryModal = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [updateBio] = useUpdateCandidateInfoMutation();
  const { data , refetch, isLoading} = useGetCandidateInfoQuery("");
  const form = useForm({
    defaultValues: {
      bio: !isLoading &&data?.data?.bio,
    },
  });

  const onSubmit = async (data: { bio: string }) => {
    const res = await updateBio(data);
    
    if (res.data) {
      Swal.fire({
        title: "Success",
        text: "Bio updated successfully",
        icon: "success",
      });
      setOpen(false);
      refetch()
    } else {
      Swal.fire({
        title: "Error",
        text: "Failed to update Bio",
        icon: "error",
      });
    }
  };
  return (
    <CustomModal
      buttonType="edit"
      title="Summary"
      open={open}
      setOpen={setOpen}
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
              submit
            </Button>
          </div>
        </form>
      </Form>
    </CustomModal>
  );
};

export default SummaryModal;
