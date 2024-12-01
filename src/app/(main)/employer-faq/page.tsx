"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    id: "item-1",
    question: "How do I register as an employer on atB Jobs?",
    answer: (
      <>
        To register as an employer, visit our registration page at{" "}
        <Link
          href="https://employer.atb-jobs.com/auth/registration"
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://employer.atb-jobs.com/auth/registration
        </Link>
        . You&apos;ll need to provide your company email, contact details, and
        create a secure password that includes uppercase and lowercase letters,
        numbers, and special characters.
      </>
    ),
  },
  {
    id: "item-2",
    question: "How to log in as an employer at atB jobs?",
    answer: (
      <>
        To log in, visit{" "}
        <Link
          href="https://employer.atb-jobs.com/auth/login"
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://employer.atb-jobs.com/auth/login
        </Link>
        , click the &apos;Sign In&apos; button, select &apos;Employer&apos;, and
        enter your company email address and password.
      </>
    ),
  },
  {
    id: "item-3",
    question:
      "Why am I seeing an error message when trying to log in as an employer?",
    answer: (
      <>
        The error message indicates you might be using the wrong account type.
        Make sure to click &apos;Sign In,&apos; select &apos;Employer,&apos; and
        enter your company email and password. (Login Url:{" "}
        <Link
          href="https://employer.atb-jobs.com/auth/login"
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://employer.atb-jobs.com/auth/login
        </Link>
        ) If the issue persists, please check your login details or contact
        support for help.
      </>
    ),
  },
];

export default function EmployerFAQ() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#3178C6] from-0% via-[#3178C6] via-[300px] to-white to-[301px] p-4 md:p-8">
      <div className="mx-auto max-w-4xl text-white pt-4 md:pt-8 mb-8">
        <div className="flex items-center gap-2 text-sm">
          <Link href="/" className="hover:text-blue-200 transition-colors">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-blue-200">FAQs For Company</span>
        </div>
      </div>

      <div className="mx-auto max-w-4xl rounded-xl bg-white p-6 md:p-8 shadow-2xl">
        <div className="mb-8 flex items-center gap-5">
          <span className="text-sm text-[#3178C6] bg-[#EBF2FC] px-3 py-1.5 rounded-md font-medium">
            FAQs
          </span>
          <h1 className="text-2xl font-bold text-[#3178C6]">For Company</h1>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map(({ id, question, answer }) => (
            <AccordionItem
              key={id}
              value={id}
              className="border rounded-lg px-6 py-2 data-[state=open]:bg-[#F8FAFC]"
            >
              <AccordionTrigger className="hover:no-underline font-bold">
                <div className="flex gap-2 text-left">
                  <span className="font-bold">Q:</span>
                  <span className="font-medium">{question}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-2 pb-4">
                <div className="flex gap-2">
                  <span className="font-semibold">A:</span>
                  <span className="text-gray-600">{answer}</span>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
