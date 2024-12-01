import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import story from "../../../assets/candidate-dashboard/story.png";

const OurStory = () => {
  return (
    <div className="min-h-screen bg-white ">
      {/* Hero Section */}
      <div
        className="relative h-[300px] md:h-[400px] bg-gradient-to-r from-sky-100 to-blue-100"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/1783965059/photo/close-up-on-spreadsheet-businesss-data-dashboard-on-paper-for-a-meeting-of-business-financial.webp?a=1&b=1&s=612x612&w=0&k=20&c=zMuy68xk39ESm7TvE-8Z6dsIO1p0TfJ2Y3U4fNKrEzs=')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-white/50">
          <div className="container mx-auto px-4 h-full flex items-center justify-center">
            <h1 className="text-2xl md:text-4xl font-bold text-navy-900 text-center">
              We strive for high quality job satisfaction levels.
            </h1>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="py-12 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-[#0A2558] text-white">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4 mt-4 text-center">
                Mission
              </h2>
              <p className="text-center text-sm mb-8">
                Through us, we make both companies and individuals smile. This
                will be a job-matching website where you can feel more of your
                potential and more of your company&apos;s potential.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-[#3B82F6] text-white">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4 mt-4 text-center">
                Vision
              </h2>
              <p className="text-center text-sm mb-8">
                We will create an HR portal that you will want to check every
                day. It will be a product that both businesses and individuals
                will say &quot;WAAAO is the NO.1 job matching site.&quot;
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Who We Are Section */}
      <div className="bg-[#2A363B] text-white  max-w-5xl mx-auto rounded-2xl">
        <div className="container mx-auto px-4">
          <Card className="bg-transparent border-none shadow-none">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-bold mb-6 text-white">
                    WHO WE ARE?
                  </h2>
                  <p className="text-gray-200">
                    We have been working with Japanese companies in Bangladesh
                    since 2019 on development projects with Japanese
                    companies.As we enter 2022, we have started the product
                    development of dX.jobs because we want to create a global
                    standard job matching website with DX orientation.
                  </p>
                </div>
                <div className="flex justify-center">
                  <Image
                    src={story}
                    alt="Team illustration"
                    width={400}
                    height={300}
                    className="max-w-full h-auto"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Core Strengths Section */}
      <div className="mt-16 mb-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center md:mb-24">
            CORE STRENGTHS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:mr-10 md:ml-10">
            <div className="flex flex-col items-center text-center">
              <div className="w-48 h-48 mb-6 text-[#259EF5]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-full h-full"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <p className="text-2xl ">
                Development experience with several Japanese companies and
                global standards.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-48 h-48 mb-6 text-[#259EF5]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-full h-full"
                >
                  <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <p className="text-2xl ">
                Interviews conducted with over 200 recruiters. The product was
                developed with their input.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-48 h-48 mb-6 text-[#259EF5]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-full h-full"
                >
                  <path d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              </div>
              <p className="text-2xl">
                Job matching as well as headhunting and detailed screening.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-48 h-48 mb-6 text-[#259EF5]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-full h-full"
                >
                  <path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <p className="text-2xl ">
                Native Japanese, English and Bengali speaking workers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
