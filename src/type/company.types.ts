import { TAddress } from "./address.types";
import { TUser } from "./user.types";

export type TCompany = {
  id: string;
  address: TAddress;
  userId: string;
  user?: TUser;
  companyName: string;
  websiteLink?: string;
  foundedDate?: Date;
  businessType?: string;
  numberOfEmployees?: number;
  numberOfOffices?: number;
  image?: string;
  companyDetails?: string;
  createdAt: Date;
  updatedAt: Date;
};
