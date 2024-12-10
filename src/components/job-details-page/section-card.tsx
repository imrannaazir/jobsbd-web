import React from "react";

type TSectionProps = {
  headline: string;
  description: string;
};

const SectionCard: React.FC<TSectionProps> = ({ headline, description }) => {
  return (
    <section>
      <h3 className="text-lg text-primary font-semibold mb-2">{headline}</h3>
      <div
        className="text-muted-foreground"
        dangerouslySetInnerHTML={{
          __html: description || "",
        }}
      ></div>
      {/* <p className="text-muted-foreground">{description}</p> */}
    </section>
  );
};

export default SectionCard;

// <section>
//             <h2 className="text-xl font-semibold text-primary mb-4">
//               Job Responsibilities
//             </h2>
//             <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
//               <li>
//                 টেকনো মোবাইলের সকল পণ্যের (স্মার্টফোন, এক্সেসরিজ, ফিচার,
//                 স্পেসিফিকেশন) ব্যাপারে গভীর জ্ঞান থাকা।
//               </li>
//               <li>
//                 সম্ভাব্য বিক্রয় ও সুবিধাভোগী গ্রাহকদের কাছে উপস্থাপন করা এবং
//                 বুঝিয়ে বলা।
//               </li>
//               <li>নতুন পণ্য এবং অফারগুলো ডিস্ট্রিবিউটর মাধ্যমে আপলোড করা।</li>
//               <li>
//                 গ্রাহকদের স্বতঃস্ফূর্তভাবে, তাদের প্রয়োজন বুঝে উপযুক্ত মোবাইল
//                 ফোন বা এক্সেসরিজ পরামর্শ দেওয়া।
//               </li>
//               <li>
//                 পণ্যের মূল্য, ওয়ারেন্টি এবং সার্ভিস সম্পর্কে বিস্তারিত তথ্য
//                 দেওয়া।
//               </li>
//               <li>
//                 গ্রাহকদের অভাব উত্তর দেওয়া এবং তাদের সন্তুষ্টি নিশ্চিত করা।
//               </li>
//               <li>
//                 মার্কেট এবং ব্যক্তি বিক্রির লক্ষ্য বৃদ্ধি এবং অর্জিকাম করা।
//               </li>
//               <li>
//                 বিক্রির সুযোগ সৃষ্টি করা, গ্রাহকদের সাথে সম্পর্ক মেইনটেইন করা
//                 এবং ডিস্ট্রিবিউটরকে রিজিওন কাভার করা।
//               </li>
//             </ul>
//           </section>
