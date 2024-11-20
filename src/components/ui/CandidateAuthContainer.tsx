
import  { ReactNode } from "react";

const CandidateAuthContainer = ({ children }: { children: ReactNode }) => {
  return (
    <section>
      {/*a blank div for background image*/}
      <div className="bg-candidate-background"></div>
      <div className="bg-white relative -top-[300px] mx-4 lg:mx-auto lg:w-[800px] rounded-3xl shadow-2xl">
        {/* form container */}
        {children}
      </div>
    </section>
  );
};

export default CandidateAuthContainer;
