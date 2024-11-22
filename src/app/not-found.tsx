import Container from "@/components/main/Container";
import notFoundImage from "@/assets/404.png";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/main/Navbar";

const NotFound = () => {
  return (
    <>
    <Navbar />
    <section className="h-[90vh] my-20">
      <Container className="h-full">
        <div className="flex flex-col items-center justify-center gap-4 h-full">
          <Image
            src={notFoundImage}
            width={400}
            height={100}
            alt="Not found"
          />
          <h2 className="text-2xl md:text-4xl font-semibold">Page Not Found</h2>
          <p className="text-lg">
            The page you are looking is not available. Please check the url and
            try again
          </p>
          <Link
            href="/contact-us"
            className="nav-link bg-[#155EAD] text-white hover:bg-primary"
          >
            Back To Home
          </Link>
        </div>
      </Container>
    </section>
    </>
  );
};

export default NotFound;
