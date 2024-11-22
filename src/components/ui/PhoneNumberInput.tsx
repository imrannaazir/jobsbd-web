import React from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const PhoneNumberInput = ({
  phone,
  setPhone,
}: {
  phone: string;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <PhoneInput
      defaultCountry="bd"
      value={phone}
      onChange={(phone: string) => setPhone(phone)}
      required
    />
  );
};

export default PhoneNumberInput;
