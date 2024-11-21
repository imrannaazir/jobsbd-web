import {
  BarChart,
  BookOpen,
  Briefcase,
  Building2,
  Calculator,
  Code,
  Headphones,
  User,
  UserCheck,
  Warehouse,
} from "lucide-react";
import { FaBalanceScale } from "react-icons/fa";
import { MdEngineering } from "react-icons/md";
import Container from "../Container";

const categories = [
  {
    name: "Others",
    count: 2670,
    icon: <User size={40} className="text-blue-400" />,
  },
  {
    name: "Sales",
    count: 1213,
    icon: <BarChart size={40} className="text-blue-400" />,
  },
  {
    name: "Education & Training",
    count: 625,
    icon: <BookOpen size={40} className="text-blue-400" />,
  },
  {
    name: "Accounting & Finance",
    count: 377,
    icon: <Calculator size={40} className="text-blue-400" />,
  },
  {
    name: "Engineering",
    count: 366,
    icon: <MdEngineering size={40} className="text-blue-400" />,
  },
  {
    name: "Warehouse Management",
    count: 345,
    icon: <Warehouse size={40} className="text-blue-400" />,
  },
  {
    name: "Operations Management",
    count: 272,
    icon: <Building2 size={40} className="text-blue-400" />,
  },
  {
    name: "IT & Software Development",
    count: 236,
    icon: <Code size={40} className="text-blue-400" />,
  },
  {
    name: "Call Center & Customer Service",
    count: 207,
    icon: <Headphones size={40} className="text-blue-400" />,
  },
  {
    name: "Human Resources",
    count: 197,
    icon: <UserCheck size={40} className="text-blue-400" />,
  },
  {
    name: "Legal Services",
    count: 181,
    icon: <FaBalanceScale size={40} className="text-blue-400" />,
  },
  {
    name: "Business Development",
    count: 173,
    icon: <Briefcase size={40} className="text-blue-400" />,
  },
];

const ExploreByCategory = () => {
  return (
    <section className="py-10">
      <Container>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-semibold">Explore By Category</h2>
          <button className="hidden lg:block px-5 py-2 text-base font-semibold rounded border text-primary border-primary hover:bg-[#DCEFFF]">
            EXPLORE ALL
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((category) => (
            <div
              key={category.name}
              className="flex items-center p-8 border-b-2 border-l-[0.5px] border-gray-300 rounded-lg"
            >
              <div className="p-3 bg-[#E9F5FF] rounded-full">
                {category.icon}
              </div>
              <div className="ml-4">
                <h3 className="text-lg">{category.name}</h3>
                <p className="text-sm font-bold text-primary">
                  [{category.count}]
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center my-5">
          <button className="lg:hidden px-5 py-2 text-base font-semibold rounded border text-primary border-primary hover:bg-[#DCEFFF]">
            EXPLORE ALL
          </button>
        </div>
      </Container>
    </section>
  );
};

export default ExploreByCategory;
