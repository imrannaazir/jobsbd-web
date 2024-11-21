import Image from "next/image";
import Container from "../Container";
import jobSearch from "@/assets/main/job-search.png";

const PostJobSection = () => {
  return (
    <section className="bg-[#00457C] py-10">
      <Container>
        <div className="flex flex-col-reverse md:flex-row gap-10 items-center justify-between">
          <div className="text-white">
            <p className="text-xl font-semibold">
              The REAL candidates you seek, are REALLY looking for YOU!
            </p>
            <h2 className="text-4xl md:text-6xl font-bold my-5 md:my-7">
              Post your vacancy today.
            </h2>
            <p className="text-xl font-semibold mb-7">
              Quick Results. Real People. Completely Free.
            </p>
            <button className="nav-link bg-[#155EAD] hover:bg-primary text-lg text-white px-20">
              Post Job For Free
            </button>
          </div>
          <div>
            <Image
              src={jobSearch}
              width={400}
              height={350}
              alt="Image"
              className=""
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PostJobSection;
