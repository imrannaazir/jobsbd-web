"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import EditButton from "@/components/ui/edit-button-with-icon";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useUpdateCompanyMutation } from "@/redux/api/company/company-api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { z } from "zod";
const formSchema = z.object({
  district: z.string({ required_error: "District is required" }),
  addressLine: z.string({ required_error: "Address line is required" }),
});

type FormValues = z.infer<typeof formSchema>;
const CompanyContactInformationModal = ({
  addressLine,
  district,
}: {
  addressLine: string;
  district: string;
}) => {
  const [updateCompany, { isLoading }] = useUpdateCompanyMutation();

  const [open, setOpen] = useState<boolean>(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      district,
      addressLine,
    },
  });

  const onSubmit = async (data: FormValues) => {
    const { addressLine, district } = data;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    try {
      const response = await updateCompany({
        district,
        addressLine,
      }).unwrap();

      if (response.success) {
        Swal.fire({
          title: "Success",
          text: "Address updated successfully",
          icon: "success",
        });
        setOpen(false);
      }

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Failed to update address",
        icon: "error",
        timer: 1000,
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <EditButton asChild />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] p-0">
        <DialogHeader className="px-6 py-4 flex flex-row items-center justify-between">
          <DialogTitle className="text-xl">
            Update Company Information
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="px-6 pb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <FormField
                control={form.control}
                name="addressLine"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-normal">
                      Address line
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Address line"
                        {...field}
                        className="mt-2 border-gray-200"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="district"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-normal">
                      District
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter district"
                        {...field}
                        className="mt-2 border-gray-200"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex justify-end gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={() => setOpen(false)}
                className="px-6"
              >
                CANCEL
              </Button>
              <Button type="submit" className="px-6 " disabled={isLoading}>
                {isLoading ? "SUBMITTING" : "SUBMIT"}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default CompanyContactInformationModal;
