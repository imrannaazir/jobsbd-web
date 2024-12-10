export type TExperience = {
    id: string;
    designation: string;
    companyName: string;
    startDate: Date;
    endDate?: Date;
    isWorking?: boolean;
    district: string;
    addressLine: string;
    industryId: string;
    jobResponsibilities: string;
    departmentId: string;
    employmentType: string;
  };