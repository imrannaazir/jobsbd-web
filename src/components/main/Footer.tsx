import Link from "next/link";
import Container from "./Container";
import Image from "next/image";
import facebook from "@/assets/main/facebook.png";
import instagram from "@/assets/main/instagram.png";
import linkedin from "@/assets/main/linkedin.png";

const Footer = () => {
  const d = new Date();
  const year = d.getFullYear();
  return (
    <section className="bg-[#131525] py-10">
      <Container>
        <div></div>
        <div>
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
