import facebook from "@/assets/main/facebook.png";
import instagram from "@/assets/main/instagram.png";
import linkedin from "@/assets/main/linkedin.png";
import Image from "next/image";
import Link from "next/link";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import Container from "./Container";

const Footer = () => {
  const d = new Date();
  const year = d.getFullYear();
  return (
    <section className="bg-[#131525] py-10">
      <Container>
        <div className="py-10">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="footer-title">For Job Seekers</p>

              <div className="flex flex-col items-start mt-5 space-y-2 text-white">
                <Link href="/candidate-register" className="footer-link">
                  Register as Candidate
                </Link>
                <Link href="/login" className="footer-link">
                  Login
                </Link>
                <Link href="#" className="footer-link">
                  Find Jobs
                </Link>
              </div>
            </div>

            <div>
              <p className="footer-title">For Employers</p>

              <div className="flex flex-col items-start mt-5 space-y-2 text-white">
                <Link href="#" className="footer-link">
                  Post a Job
                </Link>
                <Link href="/employee-register" className="footer-link">
                  Register
                </Link>
                <Link href="/employee-login" className="footer-link">
                  Recruiter Login
                </Link>
              </div>
            </div>

            <div>
              <p className="footer-title">Quick Link</p>

              <div className="flex flex-col items-start mt-5 space-y-2 text-white">
                <Link href="#" className="footer-link">
                  About JobsBD
                </Link>
                <Link href="/contact-us" className="footer-link">
                  Get Support
                </Link>
                <Link href="/terms-conditions" className="footer-link">
                  Terms and Conditions
                </Link>
                <Link href="/privacy-policy" className="footer-link">
                  Privacy Policy
                </Link>
                <Link href="/refund-policy" className="footer-link">
                  Refund Policy
                </Link>
                <Link href="/candidate-faq" className="footer-link">
                  FAQs For Candidate
                </Link>
                <Link href="/employer-faq" className="footer-link">
                  FAQs For Company
                </Link>
              </div>
            </div>

            <div>
              <p className="font-bold text-primary text-lg md:text-xl uppercase">
                Contact Us
              </p>

              <div className="flex flex-col items-start mt-5 space-y-5">
                <p className="flex justify-center items-center gap-3">
                  <span className="text-primary bg-[#1D1E1B] p-3 rounded-full flex items-center justify-center">
                    <FaPhone className="size-5" />
                  </span>
                  <span className="text-lg font-semibold text-white">
                    +8801234567890
                  </span>
                </p>
                <p className="flex justify-center items-center gap-3">
                  <span className="text-primary bg-[#1D1E1B] p-3 rounded-full flex items-center justify-center">
                    <IoMdMail className="size-5" />
                  </span>
                  <span className="text-lg font-semibold text-white">
                    contact@jobsbd.vercel.app
                  </span>
                </p>
                <p className="flex justify-center items-center gap-3">
                  <span className="text-primary bg-[#1D1E1B] p-3 rounded-full flex items-center justify-center">
                    <FaLocationDot className="size-5" />
                  </span>
                  <span className="text-lg font-semibold text-white">
                    11th Floor, MMK-Aakash Avenue, Plot No. 12, Kamal Ataturk
                    Avenue, Gulshan-2, Dhaka-1212, Bangladesh
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="border-b border-gray-600"></div>
      <Container>
        <div className="pt-10">
          <div className="flex flex-col lg:flex-row gap-5 justify-between">
            <div>
              <p className="text-white">
                &copy; {year} Copyright,{" "}
                <Link href="/" className="text-primary">
                  jobsbd.vercel.app
                </Link>
                , All Rights Reserved.
              </p>
            </div>
            <div className="text-primary flex gap-3 items-center">
              <p>Follow us on :</p>
              <a href="https://www.facebook.com/">
                <Image src={facebook} width={28} height={28} alt="facebook" />
              </a>
              <a href="https://www.linkedin.com/">
                <Image src={linkedin} width={28} height={28} alt="linkedin" />
              </a>
              <a href="https://www.instagram.com/">
                <Image src={instagram} width={28} height={28} alt="instagram" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Footer;
