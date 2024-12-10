import contactImg from "@/assets/contact-us-illustration.png";
import locationImg from "@/assets/location.png";
import messageImg from "@/assets/messege.png";
import phoneImg from "@/assets/mobile.png";
import Image from "next/image";

const ContactUs = () => {
  return (
    <div className="bg-bgColour border border-1 border-gray-300 rounded-[20px] p-12">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-12">
        {/* Contact Information */}
        <div className="lg:col-span-1 ">
          <h1 className="text-center font-bold text-4xl">Contact Us</h1>
          <p className="text-center text-xl text-gray-500 mt-8">
            If you have any queries, feel free to reach out to us.
          </p>
          <div className="text-2xl">
            {/* Address */}
            <div className="flex justify-start items-center mt-8">
              <Image src={locationImg} alt="location" />
              <p className="text-gray-500 lg:text-left text-center ml-4">
              9th Floor, Zenith Infinity Tower, Plot No. 45, Nova Crescent Road, Eclipse Square, Dhaka-1209, Bangladesh
              </p>
            </div>
            <div className="flex justify-start items-center mt-8">
              <Image src={messageImg} alt="message" />
              <p className="text-gray-500 lg:text-left text-center ml-4">
              contact@jobsbd.vercel.app
              </p>
            </div>
            <div className="flex justify-start items-center mt-8">
              <Image src={phoneImg} alt="phone" />
              <p className="text-gray-500 lg:text-left text-center ml-4">
                +8801234567899
              </p>
            </div>
          </div>{" "}
        </div>

        {/* Illustration */}
        <div className="lg:col-span-1 flex justify-center">
          <Image
            src={contactImg}
            alt="Contact us illustration"
            width={700}
            height={300}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
