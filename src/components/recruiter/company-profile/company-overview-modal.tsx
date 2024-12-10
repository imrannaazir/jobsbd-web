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
// import { InputField } from "@/components/ui/form-fields";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const CompanyOverviewModal = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <EditButton asChild />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Company Overview</DialogTitle>
        </DialogHeader>
        <div>
          <form className="space-y-8">
            <div className="grid grid-cols-1 gap-4">
              <div className="grid w-full gap-1.5">
                <Textarea
                  name="companyDetails"
                  placeholder="Enter Company Description"
                  className="h-40"
                />
              </div>
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
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CompanyOverviewModal;
