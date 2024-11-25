export type User = {
  id: string;
  name?: string;
  companyName?: string;
  avatar: string;
  email: string;
  mobileNumber: string;
  isActive: boolean;
  companyId?: number;
};

export type DetailsProps = {
  user: User;
};

// Define the type for a single user
export type Company = {
  id: string;
  companyName: string;
  avatar: string;
  email: string;
  mobileNumber: string;
  isActive: boolean;
};
