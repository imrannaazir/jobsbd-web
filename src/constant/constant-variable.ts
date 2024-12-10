export const bangladeshDistricts = [
  { id: "bagerhat", name: "Bagerhat" },
  { id: "bandarban", name: "Bandarban" },
  { id: "barguna", name: "Barguna" },
  { id: "barisal", name: "Barisal" },
  { id: "bhola", name: "Bhola" },
  { id: "bogra", name: "Bogra" },
  { id: "brahmanbaria", name: "Brahmanbaria" },
  { id: "chandpur", name: "Chandpur" },
  { id: "chattogram", name: "Chattogram" },
  { id: "chuadanga", name: "Chuadanga" },
  { id: "comilla", name: "Comilla" },
  { id: "coxsbazar", name: "Cox's Bazar" },
  { id: "dhaka", name: "Dhaka" },
  { id: "dinajpur", name: "Dinajpur" },
  { id: "faridpur", name: "Faridpur" },
  { id: "feni", name: "Feni" },
  { id: "gaibandha", name: "Gaibandha" },
  { id: "gazipur", name: "Gazipur" },
  { id: "gopalganj", name: "Gopalganj" },
  { id: "habiganj", name: "Habiganj" },
  { id: "jamalpur", name: "Jamalpur" },
  { id: "jashore", name: "Jashore" },
  { id: "jhenaidah", name: "Jhenaidah" },
  { id: "joypurhat", name: "Joypurhat" },
  { id: "khagrachari", name: "Khagrachari" },
  { id: "khulna", name: "Khulna" },
  { id: "kishoreganj", name: "Kishoreganj" },
  { id: "kurigram", name: "Kurigram" },
  { id: "kushtia", name: "Kushtia" },
  { id: "lakshmipur", name: "Lakshmipur" },
  { id: "lalmonirhat", name: "Lalmonirhat" },
  { id: "madaripur", name: "Madaripur" },
  { id: "magura", name: "Magura" },
  { id: "manikganj", name: "Manikganj" },
  { id: "meherpur", name: "Meherpur" },
  { id: "moulvibazar", name: "Moulvibazar" },
  { id: "munshiganj", name: "Munshiganj" },
  { id: "mymensingh", name: "Mymensingh" },
  { id: "narail", name: "Narail" },
  { id: "narayanganj", name: "Narayanganj" },
  { id: "narsingdi", name: "Narsingdi" },
  { id: "natore", name: "Natore" },
  { id: "netrokona", name: "Netrokona" },
  { id: "nilphamari", name: "Nilphamari" },
  { id: "noakhali", name: "Noakhali" },
  { id: "pabna", name: "Pabna" },
  { id: "panchagarh", name: "Panchagarh" },
  { id: "patuakhali", name: "Patuakhali" },
  { id: "pirojpur", name: "Pirojpur" },
  { id: "rajbari", name: "Rajbari" },
  { id: "rajshahi", name: "Rajshahi" },
  { id: "rangamati", name: "Rangamati" },
  { id: "rangpur", name: "Rangpur" },
  { id: "satkhira", name: "Satkhira" },
  { id: "shariatpur", name: "Shariatpur" },
  { id: "sherpur", name: "Sherpur" },
  { id: "sirajganj", name: "Sirajganj" },
  { id: "sunamganj", name: "Sunamganj" },
  { id: "sylhet", name: "Sylhet" },
  { id: "tangail", name: "Tangail" },
  { id: "thakurgaon", name: "Thakurgaon" },
] as const;

export const EmploymentType = [
  { id: "FULL_TIME", name: "Full-Time" },
  { id: "PART_TIME", name: "Part-Time" },
  { id: "INTERNSHIP", name: "Internship" },
];

export const jobLevel = [
  { id: "FRESHER", name: "Fresher" },
  { id: "MID_LEVEL", name: "Mid-Level" },
  { id: "SENIOR", name: "Senior" },
];

export const medicalAllowance = [
  { id: "yes", label: "Yes" },
  { id: "no", label: "No" },
];

export const subOffices = [
  { id: "yes", label: "Yes" },
  { id: "no", label: "No" },
];

export const userRole = {
  CANDIDATE: "CANDIDATE",
  EMPLOYER: "EMPLOYER",
  ADMIN: "ADMIN",
  SUPER_ADMIN: "SUPER_ADMIN",
} as const;

export const NotificationType = {
  APPLIED: "APPLIED",
  FOLLOWED: "FOLLOWED",
  SAVED_JOB: "SAVED_JOB",
  SORT_LISTED: "SORT_LISTED",
  ACCEPTED: "ACCEPTED",
  REJECTED: "REJECTED",
  SAVED_PROFILE: "SAVED_PROFILE",
};
export const jobStatus = {
  APPLIED: "APPLIED",
  SHORTLISTED: "SHORTLISTED",
  REJECTED: "REJECTED",
  ACCEPTED: "ACCEPTED",
  HIRED: "HIRED",
} as const;
