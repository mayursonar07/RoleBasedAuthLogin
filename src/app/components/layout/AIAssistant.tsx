'use client'

const AIAssistant = () => {
    return (
      <div className="mt-6 bg-white bg-opacity-80 backdrop-blur-md shadow-lg rounded-2xl p-4 w-full max-w-lg mx-auto">
        <h3 className="text-purple-700 text-lg font-semibold">How can we help you today?</h3>
        <p className="text-gray-600 text-sm">Allow Quicc to find solutions to your everyday needs 🎉</p>
  
        {/* Chat Input */}
        <div className="mt-3 flex items-center border border-gray-300 rounded-full p-2 bg-white">
          <input
            type="text"
            placeholder="Tell us how we can help you today..."
            className="flex-1 bg-transparent outline-none px-3 text-sm text-gray-800"
          />
          <button className="bg-purple-700 text-white p-2 rounded-full hover:bg-purple-800 transition">
            ➜
          </button>
        </div>
      </div>
    );
  };
  
  export default AIAssistant;
  