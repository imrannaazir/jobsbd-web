import { MdOutlineWorkHistory } from "react-icons/md";
import SectionTitle from "../section-title";
import ProfileEditModal from "./profile-edit-modal";
import ProfileIconInfo from "./profile-icon-info";
import { LiaBinocularsSolid } from "react-icons/lia";
import { FaBriefcase } from "react-icons/fa6";
import { TbMoneybag } from "react-icons/tb";

const BasicDetails = () => {
  const data = [
    {
      icon: <MdOutlineWorkHistory />,
      label: "Work Experience",
    },
    {
      icon: <TbMoneybag />,
      label: "Present Salary",
    },
    {
      icon: <TbMoneybag />,
      label: "Expected Salary",
    },
    {
      icon: <FaBriefcase />,
      label: "Employment Type",
    },
    {
      icon: <LiaBinocularsSolid />,
      label: "Looking For",
    },
  ];
  return (
    <>
      <div id="details" className="section-design">
        {/* headline */}
        <SectionTitle label="Basic Details" component={<ProfileEditModal />} />
        {/* details info */}
        <div className="grid grid-cols-4 items-center justify- gap-5 p-4">
          {data.map((item, index) => (
            <ProfileIconInfo key={index} icon={item.icon} label={item.label} />
          ))}
        </div>
      </div>
    </>
  );
};

export default BasicDetails;
