/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/no-unescaped-entities */
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
import { Form } from "@/components/ui/form";
import {
  DateField,
  SelectField,
} from "@/components/ui/form-fields";
import { medicalAllowance, subOffices } from "@/constant/constant-variable";
import { useGetDepartmentQuery } from "@/redux/api/department/deapartmentApi";
import { useGetIndustryQuery } from "@/redux/api/industry/industryApi";
import { formSchema, FormValues } from "@/schemas/profile-form-schema";
import { TItem } from "@/type";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AdditionalInformationModal = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { data: departmentOption } = useGetDepartmentQuery("");
  const { data: industryOption } =
    useGetIndustryQuery("");
  const departmentSelectOption = departmentOption?.data?.map((item: TItem) => {
    return {
      id: item.id || "",
      name: item.name || "Unknown",
    };
  });

  const industrySelectOption = industryOption?.data?.map((item: TItem) => {
    return {
      id: item.id || "",
      name: item.name || "Unknown",
    };
  });

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    console.log(data);

    if (data) {
      Swal.fire({
        title: "Success",
        text: "Profile updated successfully",
        icon: "success",
      });
      setOpen(false);
    } else {
      Swal.fire({
        title: "Error",
        text: "Failed to update profile",
        icon: "error",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <EditButton asChild />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update Additional Information</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SelectField
              name="category"
              label="Category"
              options={[
                { value: "beginner", label: "beginner" },
                { value: "intermediate", label: "intermediate" },
                { value: "advanced", label: "advanced" },
              ]}
            />
              <DateField name="newOpening" label="New Opening" />
              <SelectField
              name="medicalAllowance"
              label="Medical Allowance"
              options={medicalAllowance}
            />
            <SelectField
              name="subOffices"
              label="Sub Offices"
              options={subOffices}
            />
            <SelectField
              name="natureofBusiness"
              label="Nature of Business"
              options={[
                { value: "b2b", label: "B2B" },
                { value: "b2c", label: "B2C" },
              ]}
            />
            <SelectField
                    name="industryId"
                    label="Industry"
                    options={industrySelectOption}
                  />
                  <SelectField
                    name="departmentId"
                    label="Department"
                    options={departmentSelectOption}
                  />
              
            </div>

            <DialogFooter>
              <Button
                variant="outline"
                type="button"
                onClick={() => setOpen(!open)}
              >
                CANCEL
              </Button>
              <Button type="submit">SUBMIT</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AdditionalInformationModal;