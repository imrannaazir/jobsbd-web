import { FaAngleRight } from "react-icons/fa6";

const CommonLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="w-full min-h-screen">
      <div className=" bg-primary h-[300px]"></div>
      <div className="grid grid-cols-1 lg:grid-cols-4 -mt-[200px] mb-[100px] mx-[80px] gap-8">
        <div className="bg-white shadow-md rounded-md shadow-slate-900-500 py-12 lg:h-[420px]">
          <button className="btn w-full flex items-center align-middle justify-between px-6 py-3 mb-4  text-gray-500">
            <span className="font-bold text-lg">Terms and Conditions</span>
            <FaAngleRight className="font-light text-3xl" />
          </button>
          <button className="btn w-full flex items-center align-middle justify-between px-6 py-3 mb-4  text-gray-500">
            <span className="font-bold text-lg">Privacy Policy</span>
            <FaAngleRight className="font-light text-3xl" />
          </button>
          <button className="btn w-full flex items-center align-middle justify-between px-6 py-3 mb-4  text-gray-500">
            <span className="font-bold text-lg">Refund Policy</span>
            <FaAngleRight className="font-light text-3xl" />
          </button>
        </div>
        <div className="lg:col-span-3 bg-white shadow-md rounded-md shadow-slate-900-500">
          {children}
        </div>
      </div>
    </div>
  );
};

export default CommonLayout;
