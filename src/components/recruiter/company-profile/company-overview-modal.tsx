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
import EditButton from "@/components/ui/edit-button-with-icon";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useUpdateCompanyMutation } from "@/redux/api/company/company-api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import * as z from "zod";

const formSchema = z.object({
  companyDetails: z.string().min(10, {
    message: "Company description must be at least 10 characters.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const CompanyOverviewModal = ({
  companyDetails,
}: {
  companyDetails: string;
}) => {
  const [updateCompany, { isLoading }] = useUpdateCompanyMutation();

  const [open, setOpen] = useState<boolean>(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyDetails: companyDetails || "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    try {
      const response = await updateCompany({
        companyDetails: data?.companyDetails,
      }).unwrap();

      if (response.success) {
        Swal.fire({
          title: "Success",
          text: "Profile updated successfully",
          icon: "success",
        });
        setOpen(false);
      }

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Failed to update profile",
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
      <DialogContent className="">
        <DialogHeader>
          <DialogTitle>Company Overview</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="companyDetails"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter Company Description"
                      className="h-40 resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button
                variant="outline"
                type="button"
                onClick={() => setOpen(false)}
              >
                CANCEL
              </Button>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "SUBMITTING" : "SUBMIT"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default CompanyOverviewModal;
