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
import { DateField, InputField } from "@/components/ui/form-fields";
import { Label } from "@/components/ui/label";
import { useAddCertificateMutation } from "@/redux/api/candidate/candidateApi";
import {
  certificateFormSchema,
  CertificateFormValues,
} from "@/schemas/profile-form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const CertificateModal = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [addCertificate] = useAddCertificateMutation();
  const form = useForm<CertificateFormValues>({
    resolver: zodResolver(certificateFormSchema),
  });

  const onSubmit = async (data: CertificateFormValues) => {
    const response = await addCertificate(data);
    if (response.data) {
      Swal.fire({
        title: "Certificate Added",
        text: "Certificate has been added successfully",
        icon: "success",
      });
      setOpen(false);
    } else {
      Swal.fire({
        title: "Error",
        text: "Failed to add Certificate",
        icon: "error",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    <CustomModal
      buttonType="add"
      title="Certificate  "
      open={open}
      setOpen={setOpen}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
            <InputField
              name="certificateName"
              label="Certificate name"
              type="text"
              required
              placeholder="Certificate name"
            />
            <InputField
              name="institution"
              label="Institution name"
              type="text"
              placeholder="Institution name"
            />

            <DateField name="startDate" label="Start Date" />
            <DateField name="endDate" label="Start Date" />
            <InputField
              name="duration"
              label="Duration"
              type="text"
              required
              placeholder="Duration "
            />
            <InputField
              name="certificateUrl"
              label="certificate URL "
              type="text"
              placeholder="certificate URL"
            />
          </div>
          <div>
            <Label>Description</Label>
            <FormField
              name="description"
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
          </div>

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

export default CertificateModal;
