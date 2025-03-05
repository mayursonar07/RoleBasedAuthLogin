'use client'
import HeaderWithoutAuth from "@/app/components/layout/HeaderWithoutAuth";

const PrivacyPolicy = () => {
    return (
    <>
      <HeaderWithoutAuth/>
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center">QUICC AI - Privacy Policy</h1>
        <p className="text-center text-gray-500 text-sm mt-2">Effective Date: 20/02/2025</p>
        <p className="text-center text-gray-500 text-sm">Company Name: Agile Software Consultancy Ltd</p>
        <p className="text-center text-gray-500 text-sm">Registered Address: 232 Malpas Road, Newport, NP20 6GP</p>
        <p className="text-center text-gray-500 text-sm">Company Number: 11401370</p>
        <p className="text-center text-gray-500 text-sm">Website: <a href="https://www.quicc.ai" className="text-blue-500">www.quicc.ai</a></p>
        
        <div className="mt-6 space-y-6">
          <section>
            <h2 className="text-xl font-semibold">1. Introduction</h2>
            <p className="text-sm">At QUICC AI, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you use our website, mobile application, or services. By accessing or using QUICC AI, you consent to the practices described in this policy.</p>
          </section>
  
          <section>
            <h2 className="text-xl font-semibold">2. Information We Collect</h2>
            <h3 className="text-lg font-semibold">2.1 Information You Provide</h3>
            <ul className="list-disc ml-6 text-sm">
              <li>Name, email address, phone number, and account login details when registering.</li>
              <li>Payment information when booking services.</li>
              <li>Location details (if provided) for finding local service providers.</li>
              <li>Any messages, reviews, or feedback submitted on the platform.</li>
            </ul>
            <h3 className="text-lg font-semibold">2.2 Information We Collect Automatically</h3>
            <ul className="list-disc ml-6 text-sm">
              <li>IP address, browser type, and device information when accessing our website.</li>
              <li>Usage data such as searches, bookings, and interactions with service providers.</li>
              <li>Cookies and tracking technologies to enhance user experience.</li>
            </ul>
            <h3 className="text-lg font-semibold">2.3 Information from Third-Party Services</h3>
            <ul className="list-disc ml-6 text-sm">
              <li>If you register via Google, Facebook, or Apple, we collect basic account details (name, email).</li>
              <li>Payment providers may share transaction data necessary for processing payments.</li>
            </ul>
          </section>
  
          <section>
            <h2 className="text-xl font-semibold">3. How We Use Your Information</h2>
            <ul className="list-disc ml-6 text-sm">
              <li>To provide and improve our comparison and booking services.</li>
              <li>To match users with service providers based on location, price, and availability.</li>
              <li>To process bookings and facilitate payments.</li>
              <li>To communicate important notifications, such as booking confirmations and updates.</li>
              <li>To send promotional offers, if you opt-in to receive them.</li>
              <li>To improve AI-based recommendations for services and deals.</li>
              <li>To prevent fraud, enhance security, and comply with legal obligations.</li>
            </ul>
          </section>
  
          <section>
            <h2 className="text-xl font-semibold">4. How We Share Your Information</h2>
            <ul className="list-disc ml-6 text-sm">
              <li>Service Providers: When you book a service, your contact details are shared with the selected provider.</li>
              <li>Payment Processors: Securely process transactions (e.g., Stripe, PayPal).</li>
              <li>Third-Party Analytics Tools: To monitor website performance and improve services.</li>
              <li>Law Enforcement or Regulators: If required by law or to prevent fraudulent activities.</li>
            </ul>
          </section>
  
          <section>
            <h2 className="text-xl font-semibold">5. Cookies and Tracking Technologies</h2>
            <p className="text-sm">We use cookies and similar tracking tools to:</p>
            <ul className="list-disc ml-6 text-sm">
              <li>Remember user preferences and login sessions.</li>
              <li>Analyze website traffic and improve service offerings.</li>
              <li>Deliver personalized recommendations and promotions.</li>
            </ul>
            <p className="text-sm">You can manage cookie preferences via browser settings. Disabling cookies may affect certain platform functionalities.</p>
          </section>
  
          <section>
            <h2 className="text-xl font-semibold">6. Data Retention and Security</h2>
            <ul className="list-disc ml-6 text-sm">
              <li>We retain personal data only as long as necessary for service provision and compliance with legal obligations.</li>
              <li>Data is stored securely using encryption and access controls.</li>
              <li>Users can request data deletion at any time by contacting us.</li>
            </ul>
          </section>
  
          <section>
            <h2 className="text-xl font-semibold">7. Your Rights</h2>
            <ul className="list-disc ml-6 text-sm">
              <li>Access their data and request a copy of personal information stored.</li>
              <li>Request corrections to inaccurate or incomplete data.</li>
              <li>Opt-out of marketing communications at any time.</li>
              <li>Request data deletion under applicable laws.</li>
            </ul>
          </section>
  
          <section>
            <h2 className="text-xl font-semibold">8. Contact Us</h2>
            <p className="text-sm">For any privacy-related inquiries or data requests, please contact us at:</p>
            <p className="text-sm">Email: <a href="mailto:info@quicc.ai" className="text-blue-500">info@quicc.ai</a></p>
            <p className="text-sm">Address: 232 Malpas Road, Newport, NP20 6GP</p>
          </section>
        </div>
      </div>
      </>
    );
  };
  
  export default PrivacyPolicy;
  