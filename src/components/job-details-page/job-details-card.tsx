import {
  Heart,
  MapPin,
  Clock,
  Briefcase,
  Calendar,
  DollarSign,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import JobInfoItem from "./job-info-item";

export default function JobDetailsCard() {
  return (
    <Card className="flex-1">
      <CardContent className="p-6">
        {/* Job Header */}
        <div className="flex justify-between items-start mb-6">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold">সেলসম্যান-কিশোরগঞ্জ</h1>
            <div className="inline-block bg-blue-50 text-sm px-3 py-1 rounded-full">
              <span className="text-red-500">Application Deadline:</span>{" "}
              December 12th 2024
            </div>
          </div>
          <div className="flex gap-2">
            <Button className="bg-green-500 hover:bg-green-600">
              Apply Now
            </Button>
            <Button variant="outline" size="icon">
              <Heart className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Job Info Grid */}
        <div className="bg-[#F8F8F8] grid grid-cols-1 md:grid-cols-5 gap-4 mb-8 p-4 border">
          <JobInfoItem
            icon={DollarSign}
            title="Salary : Negotiable"
            subtitle="Monthly Salary in Taka"
          />
          <JobInfoItem icon={Clock} title="N/A" subtitle="Experience" />
          <JobInfoItem
            icon={Briefcase}
            title="Full time"
            subtitle="Employment Type"
          />
          <JobInfoItem icon={Calendar} title="N/A" subtitle="Age" />
          <JobInfoItem icon={MapPin} title="N/A" subtitle="Location" />
        </div>

        <div className="space-y-6">
          {/* Job Description */}
          <section>
            <h2 className="text-xl font-semibold text-primary mb-4">
              Job Description
            </h2>
            <h3 className="text-lg font-semibold mb-2">Company Overview</h3>
            <p className="text-muted-foreground">
              টেকনো মোবাইল বাংলাদেশ অত্র ট্রান্সশন টেকনোলজি একটি সম্মানক
              প্রতিষ্ঠান, যা একটি চীনা মোবাইল ফোন প্রস্তুতকারী কোম্পানি। টেকনো
              বিশ্বব্যাপী তার সামগ্রী মূল্যে উৎপাদনে মাইলফলক সরবরাহের জন্য, যা
              ব্যাজেট-conscious গ্রাহকদের চাহিদা মেটাতে সক্ষম, একই সাথে
              প্রযুক্তি হস্তান্তর জন্য প্রিমিয়াম মডেলও প্রদান করে। বাংলাদেশে
              টেকনো মোবাইলের একটি শক্তিশালী উপস্থিতি রয়েছে, যেখানে এটি
              প্রতিযোগিতামূলক মূল্যে আধুনিক প্রযুক্তি এবং ফীচারিং মোবাইল ডিভাইস
              সরবরাহের লক্ষ্য নিয়ে অগ্রজ হয়েছে।
            </p>
          </section>

          {/* Job Responsibilities */}
          <section>
            <h2 className="text-xl font-semibold text-primary mb-4">
              Job Responsibilities
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>
                টেকনো মোবাইলের সকল পণ্যের (স্মার্টফোন, এক্সেসরিজ, ফিচার,
                স্পেসিফিকেশন) ব্যাপারে গভীর জ্ঞান থাকা।
              </li>
              <li>
                সম্ভাব্য বিক্রয় ও সুবিধাভোগী গ্রাহকদের কাছে উপস্থাপন করা এবং
                বুঝিয়ে বলা।
              </li>
              <li>নতুন পণ্য এবং অফারগুলো ডিস্ট্রিবিউটর মাধ্যমে আপলোড করা।</li>
              <li>
                গ্রাহকদের স্বতঃস্ফূর্তভাবে, তাদের প্রয়োজন বুঝে উপযুক্ত মোবাইল
                ফোন বা এক্সেসরিজ পরামর্শ দেওয়া।
              </li>
              <li>
                পণ্যের মূল্য, ওয়ারেন্টি এবং সার্ভিস সম্পর্কে বিস্তারিত তথ্য
                দেওয়া।
              </li>
              <li>
                গ্রাহকদের অভাব উত্তর দেওয়া এবং তাদের সন্তুষ্টি নিশ্চিত করা।
              </li>
              <li>
                মার্কেট এবং ব্যক্তি বিক্রির লক্ষ্য বৃদ্ধি এবং অর্জিকাম করা।
              </li>
              <li>
                বিক্রির সুযোগ সৃষ্টি করা, গ্রাহকদের সাথে সম্পর্ক মেইনটেইন করা
                এবং ডিস্ট্রিবিউটরকে রিজিওন কাভার করা।
              </li>
            </ul>
          </section>
        </div>
        
      </CardContent>
    </Card>
  );
}


