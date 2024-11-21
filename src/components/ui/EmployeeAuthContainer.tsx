
import  { ReactNode } from "react";

const EmployeeAuthContainer = ({ children }: { children: ReactNode }) => {
  return (
    <section>
      {/*a blank div for background image*/}
      <div className="bg-employee-background"></div>
      <div className="bg-white relative bottom-[400px] lg:-top-[350px] mx-4 lg:mx-auto lg:w-[580px] rounded-3xl shadow-2xl">
        {/* form container */}
        {children}
      </div>
    </section>
  );
};

export default EmployeeAuthContainer;
