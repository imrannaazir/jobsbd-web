import contactImg from "@/assets/contact-us-illustration.png";
import locationImg from "@/assets/location.png";
import messageImg from "@/assets/messege.png";
import phoneImg from "@/assets/mobile.png";
import Image from "next/image";

const ContactUs = () => {
  return (
    <div className="bg-bgColour border-1 border-blue-200 rounded-large p-12">
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
                11th Floor, ABC Avenue, Plot No. 12, EFG Avenue, Gulshan-2,
                Dhaka-1212, Bangladesh
              </p>
            </div>
            <div className="flex justify-start items-center mt-8">
              <Image src={messageImg} alt="message" />
              <p className="text-gray-500 lg:text-left text-center ml-4">
                contact@jobs-bd.com
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
