import { ReactNode } from "react";

const SectionTitle = ({
  component,
  label,
}: {
  label: string;
  component: ReactNode;
}) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white border-b">
      <h4 className="text-xl font-semibold">{label}</h4>
      {component}
    </div>
  );
};

export default SectionTitle;
