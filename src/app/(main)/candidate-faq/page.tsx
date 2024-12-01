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
    question:
      "I can't create an account using the atB Jobs app. What should I do?",
    answer:
      "Please update the app if you're using an old version. You can also try clearing your cache and cookies or visit our website.",
  },
  {
    id: "item-2",
    question: "My password is showing as incorrect when I try to sign in.",
    answer:
      "Double-check your caps lock is off and try resetting your password using the 'Forgot Password' link on the login page.",
  },
  {
    id: "item-3",
    question: "I can't update my profile. What can I do?",
    answer:
      "Ensure all required fields are filled out correctly and try saving again. If you continue to experience issues, try using a different browser.",
  },
  {
    id: "item-4",
    question: "How do I upload my CV?",
    answer:
      "Navigate to your profile section and look for the 'Upload CV' button. Supported formats include PDF and DOC/DOCX files.",
  },
  {
    id: "item-5",
    question: "Why can't I open the downloaded CV?",
    answer:
      "Make sure you have appropriate software installed to open the file format. For PDFs, use Adobe Reader or your browser's PDF viewer.",
  },
  {
    id: "item-6",
    question: "I can't update my profile picture; I'm getting an error.",
    answer:
      "Check that your image meets our size and format requirements. We accept JPG and PNG files under 5MB.",
  },
  {
    id: "item-7",
    question: "How do I reset my password?",
    answer:
      "Click the 'Forgot Password' link on the login page and follow the instructions sent to your email.",
  },
  {
    id: "item-8",
    question: "How can I make my profile 100% complete?",
    answer:
      "Fill out all sections of your profile, including work history, education, skills, and upload a CV.",
  },
  {
    id: "item-9",
    question: "I'm facing an error when applying for a job. What should I do?",
    answer:
      "Try refreshing the page and applying again. If the error persists, check your internet connection and try using a different browser.",
  },
  {
    id: "item-10",
    question: "Can you suggest companies I should apply to?",
    answer:
      "Browse our featured employers section and use our job matching algorithm to find companies that match your skills and experience.",
  },
  {
    id: "item-11",
    question: "How can I know which job is better for me?",
    answer:
      "Review the job description, requirements, and company culture carefully. Consider factors like salary, location, and growth opportunities.",
  },
  {
    id: "item-12",
    question: "How can I get a job using atB?",
    answer:
      "Complete your profile, upload an updated CV, and actively apply for relevant positions. Use our job alerts feature to stay updated.",
  },
  {
    id: "item-13",
    question: "Can you apply for a job on my behalf?",
    answer:
      "No, all job applications must be submitted directly by the candidate to ensure accurate information and consent.",
  },
  {
    id: "item-14",
    question: "How can I receive job alerts on atB Jobs?",
    answer:
      "Set up job alerts in your profile settings by specifying your preferred job categories, locations, and other criteria.",
  },
];

const CandidateFAQ = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#3178C6] from-0% via-[#3178C6] via-[300px] to-white to-[301px] p-4 md:p-8">
      <div className="mx-auto max-w-4xl text-white pt-4 md:pt-8 mb-8">
        <div className="flex items-center gap-2 text-sm">
          <Link href={"/"}>
            <span>Home</span>
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-blue-300">For Candidate</span>
        </div>
      </div>

      <div className="mx-auto max-w-4xl rounded-xl bg-white p-6 md:p-8 shadow-2xl">
        <div className="mb-8 flex items-center gap-5">
          <span className="text-sm text-[#0179C0] bg-[#DCEFFF] p-2 rounded-md font-medium">
            FAQs
          </span>
          <h1 className="text-2xl font-bold text-[#0179C0] mt-1">
            For Candidates
          </h1>
        </div>

        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map(({ id, question, answer }) => (
            <AccordionItem
              key={id}
              value={id}
              className="border rounded-lg px-4"
            >
              <AccordionTrigger className="hover:no-underline font-bold">
                Q:{question}
              </AccordionTrigger>
              <AccordionContent className="p-4 text-gray-600 font-semi-bold">
                A:{answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default CandidateFAQ;
