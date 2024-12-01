type TJobTitle = {
  title: string;
  description: string;
};

const JobTitle = ({ title, description }: TJobTitle) => {
  return (
    <div className="border-b-2 mb-5">
      <h2 className="font-bold">{title}</h2>
      <p className="mb-3">{description}</p>
    </div>
  );
};

export default JobTitle;
