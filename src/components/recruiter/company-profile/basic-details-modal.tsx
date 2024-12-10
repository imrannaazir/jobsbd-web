"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { useUpdateCompanyMutation } from "@/redux/api/company/company-api";
import {
  companyDetailsFormSchema,
  TBasicCompanyDetailsValues,
} from "@/schemas/profile-form-schema";
import { TCompany } from "@/type/company.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const BasicDetailsModal = ({ company }: { company: TCompany }) => {
  const [updateCompany, { isLoading }] = useUpdateCompanyMutation();

  const [open, setOpen] = useState<boolean>(false);
  const form = useForm<TBasicCompanyDetailsValues>({
    resolver: zodResolver(companyDetailsFormSchema),
    defaultValues: {
      companyName: company?.companyName || "blah blah",
      websiteLink: company?.websiteLink || "",
      businessType: company?.businessType || "",
      foundedDate: company?.foundedDate || undefined,
      numberOfEmployees: company?.numberOfEmployees || 0,
      numberOfOffices: company?.numberOfOffices || 0,
    },
  });

  const onSubmit = async (data: TBasicCompanyDetailsValues) => {
    try {
      const response = await updateCompany(data).unwrap();

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
      <DialogContent className="sm:max-w-[800px] p-0">
        <DialogHeader className="px-6 py-4 flex flex-row items-center justify-between">
          <DialogTitle className="text-xl">
            Update Company Information
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="px-6 pb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-normal">
                      Company Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter Company Name"
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
                name="websiteLink"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-normal">
                      Website URL
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter Website URL"
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
                name="foundedDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-normal">
                      Founded Date
                    </FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full mt-2 border-gray-200 font-normal justify-start text-left",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value
                              ? format(field.value, "MM/dd/yyyy")
                              : "mm/dd/yyyy"}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="businessType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-normal">
                      Business type
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter Business type"
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
                name="numberOfEmployees"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-normal">
                      Number of Employees
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        {...field}
                        onChange={(e) => field.onChange(Number(e.target.value))}
                        className="mt-2 border-gray-200"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="numberOfOffices"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-normal">
                      Number of Offices
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        {...field}
                        onChange={(e) => field.onChange(Number(e.target.value))}
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

export default BasicDetailsModal;
