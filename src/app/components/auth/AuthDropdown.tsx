'use client'

const AuthDropdown = ({ openUserModal, openProviderModal }: { openUserModal: () => void; openProviderModal: () => void }) => {
    return (
      <div className="relative">
        <button className="bg-purple-700 text-white px-4 py-2 rounded-md">Register / Login</button>
  
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
          <button onClick={openUserModal} className="w-full px-4 py-2 hover:bg-gray-100">
            Register/Login as User
          </button>
          <button onClick={openProviderModal} className="w-full px-4 py-2 hover:bg-gray-100">
            Register/Login as Service Provider
          </button>
        </div>
      </div>
    );
  };
  
  export default AuthDropdown;
  