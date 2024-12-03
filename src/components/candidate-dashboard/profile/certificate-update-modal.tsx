/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { DateField, InputField } from "@/components/ui/form-fields";
import { Label } from "@/components/ui/label";

import { useUpdateCertificateMutation } from "@/redux/api/candidate/candidateApi";
import {
  CertificateFormValues,
  updateCertificateFormSchema,
} from "@/schemas/profile-form-schema";

type CertificateUpdateModalProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  certificate: CertificateFormValues;
};

const CertificateUpdateModal = ({
  isOpen,
  setIsOpen,
  certificate,
}: CertificateUpdateModalProps) => {
  const [updateCertificate] = useUpdateCertificateMutation();

  const form = useForm<CertificateFormValues>({
    resolver: zodResolver(updateCertificateFormSchema),
    defaultValues: { ...certificate },
  });

  useEffect(() => {
    if (certificate) {
      const updatedData = {
        ...certificate,
        startDate: certificate.startDate
          ? new Date(certificate.startDate)
          : undefined,
        endDate: certificate.endDate
          ? new Date(certificate.endDate)
          : undefined,
      };
      form.reset(updatedData);
    }
  }, [certificate, form]);

  const onSubmit = async (data: CertificateFormValues) => {
    try {
      const response = await updateCertificate({
        id: certificate.id,
        data,
      }).unwrap();

      if (response?.data) {
        Swal.fire({
          title: "Certificate Updated",
          text: "Certificate has been updated successfully.",
          icon: "success",
          confirmButtonText: "OK",
        });
        setIsOpen(false);
      }
    } catch (error: any) {
      Swal.fire(
        "Error",
        "Failed to update the certificate. Please try again.",
        "error"
      );
    }
  };

  return (
    <CustomModal
      title="Update Certificate"
      open={isOpen}
      setOpen={setIsOpen}
      buttonType={null}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
            <InputField
              name="certificateName"
              label="Certificate Name"
              type="text"
              required
            />
            <InputField
              name="institution"
              label="Institution Name"
              type="text"
            />
            <DateField name="startDate" label="Start Date" />
            <DateField name="endDate" label="End Date" />
            <InputField name="duration" label="Duration" type="text" required />
            <InputField
              name="certificateUrl"
              label="Certificate URL"
              type="text"
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
            <Button type="submit">Update</Button>
          </div>
        </form>
      </Form>
    </CustomModal>
  );
};

export default CertificateUpdateModal;
