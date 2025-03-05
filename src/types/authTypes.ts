export interface User {
  customerid: string;
  fullname: string;
  role: "admin" | "user" | "serviceProvider";
}

export interface AuthContextType {
  user: User | null;
  loading: boolean;
  callChatService: (message: string) => Promise<ChatResponse>;
  registerUser: (userData: RegisterUserData) => Promise<RegisterAPIResponse>;
  registerSP: (serviceProviderData: RegisterSPData) => Promise<RegisterAPIResponse>;
  updateUserProfile: (profileData: UpdateUserData) => Promise<boolean>;
  updateSPProfile: (profileData: UpdateUserData) => Promise<boolean>;

  login: (email: string, password: string) => Promise<boolean>;
  loginForSP: (email: string, password: string) => Promise<boolean>;
  logout: (email: string) => Promise<void>;
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

// API responses
export interface ChatResponse {
response: {
  data: string;
};
};

export interface RegisterAPIResponse {
status: number;
message: string;
}
