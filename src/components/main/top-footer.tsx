import Container from "./Container";

const TopFooter = () => {
  return (
    <section className="bg-[#1F2131] py-14">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-5">
          <div className="text-white w-full">
            <p className="text-lg md:text-xl font-semibold">
              Are you looking for a job?
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold my-4">
              JobsBD is Your Gateway to Success Starts Here!
            </h2>
            <p className="text-lg md:text-xl font-semibold text-primary">
              Our goal is to make your job search as easy as possible.
            </p>
          </div>
          <div className="text-white flex flex-col lg:flex-row gap-5 w-full md:w-3/4 mx-auto">
            <button className="w-full md:px-10 py-3 rounded border border-white hover:border-[#6c6f71]">
              Sign In
            </button>
            <button className="w-full md:px-10 py-3 rounded bg-[#155EAD] hover:bg-primary">
              Register as Candidate
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TopFooter;
