export type TRole = "CANDIDATE" | "EMPLOYER" | "ADMIN" | "SUPER_ADMIN";

export type TUser = {
  phoneNumber: string;
  email: string;
  role: TRole;
  id: string;
};
