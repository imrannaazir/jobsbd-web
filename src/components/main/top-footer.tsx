import Link from "next/link";
import Container from "./Container";

const TopFooter = () => {
  return (
    <section className="bg-[#1F2131] py-14">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-5">
          <div className="text-white w-full">
            <p className="text-lg md:text-xl font-semibold">
              Looking for Your Dream Job?
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold my-4">
              JobsBD Where Your Success Journey Begins!
            </h2>
            <p className="text-lg md:text-xl font-semibold text-primary">
              Our goal is to make your job search as easy as possible.
            </p>
          </div>
          <div className="text-white flex flex-col lg:flex-row gap-5 w-full md:w-3/4 mx-auto">
            <Link href="/login" className="w-full">
              <button className="w-full md:px-10 py-3 rounded border border-white hover:border-[#6c6f71]">
                Sign In
              </button>
            </Link>
            <Link href="/candidate-register" className="w-full">
              <button className="w-full md:px-10 py-3 rounded bg-[#155EAD] hover:bg-primary">
                Register as Candidate
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TopFooter;
