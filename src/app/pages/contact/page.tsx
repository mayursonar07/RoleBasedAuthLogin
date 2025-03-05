// src/app/contact/page.tsx
'use client'

const ContactUs = () => {
    return (
    <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center">QUICC AI - Contact Us</h1>
      <div className="max-w-6xl mx-auto p-6 flex flex-col md:flex-row gap-6">
        {/* Contact Form */}
        <div className="w-full md:w-2/3 p-6 border  rounded-lg shadow-sm">
          <h1 className="text-2xl font-bold">Contact us</h1>
          <form className="mt-4 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input type="text" placeholder="Enter full name" className="w-full p-2 border rounded-md" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input type="email" placeholder="Enter your email address" className="w-full p-2 border rounded-md" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Enter Phone Number</label>
              <div className="flex">
                <select className="border rounded-md p-2">
                  <option value="+91">+91</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                </select>
                <input type="text" placeholder="Phone Number" className="w-full p-2 border rounded-md ml-2" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Enter Message</label>
              <textarea placeholder="Enter message" className="w-full p-2 border rounded-md" rows={4}></textarea>
            </div>
            <button type="submit" className="bg-purple-600 text-white py-2 px-4 rounded-md">Submit</button>
          </form>
        </div>
  
        {/* Support Information */}
        <div className="w-full md:w-1/3 space-y-4">
          <div className="p-4 border rounded-md shadow-sm">
            <h2 className="font-semibold">Need help?</h2>
            <p className="text-sm text-gray-600">For any immediate help regarding your bookings, please log in and visit our Help Center.</p>
            <a href="#" className="text-blue-600 font-medium">Open Help Center →</a>
          </div>
          <div className="p-4 border rounded-md shadow-sm">
            <h2 className="font-semibold">Still facing issues?</h2>
            <p className="text-sm text-gray-600">If you have already tried chatting with us and are not satisfied, email us at resolve@quicc.ai.</p>
          </div>
          <div className="p-4 border rounded-md shadow-sm">
            <h2 className="font-semibold">Media inquiries</h2>
            <p className="text-sm text-gray-600">For media inquiries, send us an email on press@quicc.ai.</p>
          </div>
          <div className="p-4 border rounded-md shadow-sm">
            <h2 className="font-semibold">What is our helpline number?</h2>
            <p className="text-sm text-gray-600">We have switched from phone-based support to chat-based support. Open our Help Center to chat with us.</p>
          </div>
        </div>
      </div>
    </div>

    );
  };
  
  export default ContactUs;
  