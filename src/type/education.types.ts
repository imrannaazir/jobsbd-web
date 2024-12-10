export type TEducation = {
    id: string;
    degree: string;
    instituteName: string;
    currentlyStudying?: boolean | null | undefined;
    fieldOfStudy: string;
    description?: string;
    grade: number;
    startDate: Date;
    endDate?: Date;
  };
  