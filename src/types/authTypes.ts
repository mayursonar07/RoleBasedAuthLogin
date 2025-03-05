export interface User {
    customerid: string;
    fullname: string;
    role: "admin" | "user" | "serviceProvider";
  }
  
  export interface AuthContextType {
    user: User | null;
    registerUser: (userData: RegisterUserData) => Promise<boolean>;
    registerSP: (serviceProviderData: RegisterSPData) => Promise<boolean>;
    updateUserProfile: (profileData: UpdateUserData) => Promise<boolean>;
    updateSPProfile: (profileData: UpdateUserData) => Promise<boolean>;
    loading: boolean;
    login: (email: string, password: string) => Promise<boolean>;
    loginForSP: (email: string, password: string) => Promise<boolean>;
    logout: () => void;
  }
  
export interface UpdateUserData {
    phonenumber: string;
    address: string;
    preferredcontactmethod: string;
}

export interface RegisterUserData {
  email: string;
  password: string;
  fullname: string;
}
export interface RegisterSPData {
  email: string;
  password: string;
  fullname: string;
  businessname: string;
}
