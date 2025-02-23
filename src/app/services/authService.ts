// import api from "@/app/utils/axiosInstance";


// export const loginUser = async (email: string, password: string) => {
//   try {
//     const response = await api.post("/verify-user", { email, password });

//     if (response.data) {
//       return {
//         token: response.data.token,
//         user: {
//           customerid: response.data.data.customerid,
//           fullname: response.data.data.fullname,
//           role: response.data.data.role || "user",
//         },
//       };
//     }
//   } catch (error) {
//     console.error("Login failed:", error);
//     throw new Error("Invalid credentials");
//   }
// };

// export const loginSP = async (email: string, password: string) => {
//   try {
//     const response = await api.post("/verify-provider", { email, password });

//     if (response.data) {
//       return {
//         token: response.data.token,
//         serviceProvider: {
//           customerid: response.data.data.customerid||"",
//           fullname: response.data.data.fullname||"",
//           role: response.data.data.role || "serviceProvider",
//         },
//       };
//     }
//   } catch (error) {
//     console.error("Login failed:", error);
//     throw new Error("Invalid credentials");
//   }
// };

// export const getCurrentUser = async () => {
//   try {
//     const response = await api.get("/auth/me");
//     return response.data.user;
//   } catch {
//     console.error("Session expired, please log in again.");
//     return null;
//   }
// };


// export const logoutUser = () => {
//   localStorage.removeItem("token");
//   localStorage.removeItem("user");
// };
