export  interface User {
  id: number;
  organisation: string;
  status: string;
  username: string;
  phone: string;
  dateJoined: string;
  email: string;
  bvn: number;
  imgClick: string;
  gender: string;
  marital_status: string;
  children: number;
  type_of_residence: string;
  level_of_education: string;
  employment_status: string;
  sector_of_employment: string;
  duration_of_employment: string;
  monthly_income: string;
  loan_repayment: string;
  twitter: string;
  facebook: string;
  instagram: string;
  guarantor: {
    first_name: string;
    last_name: string;
    number: string;
    email: string;
    relationship: string;
  };
  bank_name: string;
  balance: string;
  img_path: string;
}
