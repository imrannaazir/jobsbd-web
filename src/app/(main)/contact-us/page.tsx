import contactHeroImg from "@/assets/contact-us-herro-bg.jpg";
import waveImg from "@/assets/wave.png";
import ContactUs from "@/components/ui/ContactUs";
import SendUsMessage from "@/components/ui/SendUsMessage";
import Image from "next/image";

const ContactUsPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="min-h-screen flex items-center justify-center relative"
        style={{
          backgroundImage: `url(${contactHeroImg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[rgba(208,239,255,0.8)]"></div>

        {/* Content */}
        <h1 className="relative text-center font-bold text-[42px] text-secondary z-10">
          24/7 Customer Care Support for our valued Clients.
        </h1>
      </div>

      {/* Wave Image */}
      <div className="relative w-full hidden lg:block">
        <Image
          src={waveImg.src}
          alt="Decorative wave graphic"
          width={1920}
          height={200}
          className="w-full absolute bottom-0 "
          priority
        />
      </div>
      <div className="w-full max-w-[1400px] mx-auto px-[20px] mt-6 mb-[100px]">
        <ContactUs />
      </div>
      <div className="w-full max-w-[1400px] mx-auto px-[20px] mt-6 mb-[100px]">
        <SendUsMessage />
      </div>
    </div>
  );
};

export default ContactUsPage;
