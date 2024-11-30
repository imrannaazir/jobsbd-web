import { Button } from "@/components/ui/button";

const NewPostJobPage = () => {
  return (
    <section className="relative z-20">
      <div className="border rounded shadow-lg mt-8 px-4 py-5 bg-white">
        <div className="flex items-center justify-between">
        <h2 className="text-lg md:text-xl font-semibold">
        New Job Post
        </h2>
        <div className="flex gap-3">
            <Button className="bg-orange-500">PUBLISH</Button>
            <Button>SAVE</Button>
        </div>
        </div>
      </div>

      
    </section>
  );
};

export default NewPostJobPage;
