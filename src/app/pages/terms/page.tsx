'use client'
import HeaderWithoutAuth from "@/app/components/layout/HeaderWithoutAuth";
const TermsAndConditions = () => {
    return (
        <>
        <HeaderWithoutAuth />
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center">QUICC AI - Terms and Conditions</h1>
        <p className="text-center text-gray-500 text-sm mt-2">Effective Date: 20/02/2025</p>
        <p className="text-center text-gray-500 text-sm">Company Name: Agile Software Consultancy Ltd</p>
        <p className="text-center text-gray-500 text-sm">Registered Address: 232 Malpas Road, Newport, NP20 6GP</p>
        <p className="text-center text-gray-500 text-sm">Company Number: 11401370</p>
        <p className="text-center text-gray-500 text-sm">Website: <a href="https://www.quicc.ai" className="text-blue-500">www.quicc.ai</a></p>
        
        <div className="mt-6 space-y-6">
          <section>
            <h2 className="text-xl font-semibold">1. Introduction</h2>
            <p className="text-sm">Welcome to QUICC AI, a platform operated by Agile Software Consultancy Ltd. By accessing our website, mobile application, or services, you agree to these Terms and Conditions. If you do not agree with any part of these terms, you should not use QUICC AI.</p>
          </section>
  
          <section>
            <h2 className="text-xl font-semibold">2. Definitions</h2>
            <ul className="list-disc ml-6">
              <li className="text-sm"><strong>Platform</strong>: QUICC AI, including its website and mobile applications.</li>
              <li className="text-sm"><strong>User</strong>: Any individual or business accessing or using QUICC AI.</li>
              <li className="text-sm"><strong>Service Provider</strong>: Businesses and professionals offering their services through QUICC AI.</li>
              <li className="text-sm"><strong>Customer</strong>: Individuals using QUICC AI to search for, compare, and book services.</li>
              <li className="text-sm"><strong>Company</strong>: Agile Software Consultancy Ltd.</li>
            </ul>
          </section>
  
          <section>
            <h2 className="text-xl font-semibold">3. Services Provided</h2>
            <p className="text-sm">QUICC AI is a comparison and booking platform that allows users to:</p>
            <ul className="list-disc ml-6">
              <li className="text-sm">Compare prices, reviews, and availability of local service providers.</li>
              <li className="text-sm">Book services or products through the platform.</li>
              <li className="text-sm">Receive exclusive offers from businesses registered on QUICC AI.</li>
            </ul>
            <p className="text-sm">We do not provide services directly but act as an intermediary connecting customers with businesses.</p>
          </section>
  
          <section>
            <h2 className="text-xl font-semibold">4. Account Registration</h2>
            <ul className="list-disc ml-6">
              <li className="text-sm">Users can browse the platform without registration but must sign up to book services.</li>
              <li className="text-sm">Registration can be done via email, Google, Facebook, or Apple ID.</li>
              <li className="text-sm">Users must provide accurate and up-to-date information.</li>
            </ul>
          </section>
  
          <section>
            <h2 className="text-xl font-semibold">5. Service Provider Responsibilities</h2>
            <ul className="list-disc ml-6">
              <li className="text-sm">Businesses must provide accurate pricing, availability, and service details.</li>
              <li className="text-sm">Any offers or discounts listed on QUICC AI must be honored.</li>
              <li className="text-sm">Service providers are responsible for their own cancellations and refunds.</li>
            </ul>
          </section>
  
          <section>
            <h2 className="text-xl font-semibold">6. Payments and Fees</h2>
            <ul className="list-disc ml-6">
              <li className="text-sm">QUICC AI may charge a commission or referral fee for successful bookings.</li>
              <li className="text-sm">Payments are processed through third-party payment providers (e.g., Stripe, PayPal).</li>
              <li className="text-sm">Customers agree to the pricing and terms set by service providers before booking.</li>
            </ul>
          </section>
  
          <section>
            <h2 className="text-xl font-semibold">7. Cancellations and Refunds</h2>
            <ul className="list-disc ml-6">
              <li className="text-sm">Cancellations and refunds are handled by individual service providers.</li>
              <li className="text-sm">QUICC AI is not responsible for refund disputes between customers and providers.</li>
            </ul>
          </section>
  
          <section>
            <h2 className="text-xl font-semibold">8. Liability Disclaimer</h2>
            <p className="text-sm">QUICC AI is a marketplace and not responsible for the quality of services or products offered by providers.</p>
            <ul className="list-disc ml-6">
              <li className="text-sm">Users agree to use service providers at their own risk.</li>
              <li className="text-sm">QUICC AI is not liable for any losses, damages, or disputes arising from service use.</li>
            </ul>
          </section>
  
          <section>
            <h2 className="text-xl font-semibold">9. User Conduct</h2>
            <ul className="list-disc ml-6">
              <li className="text-sm">Users agree not to abuse the platform or its services.</li>
              <li className="text-sm">Not to provide false information or misleading reviews.</li>
              <li className="text-sm">To comply with all applicable laws and regulations.</li>
            </ul>
          </section>
  
          <section>
            <h2 className="text-xl font-semibold">10. Data Protection and Privacy</h2>
            <ul className="list-disc ml-6">
              <li className="text-sm">Personal data is processed in accordance with our Privacy Policy.</li>
              <li className="text-sm">Users can request data deletion at any time.</li>
            </ul>
          </section>
  
          <section>
            <h2 className="text-xl font-semibold">11. Changes to Terms</h2>
            <p className="text-sm">QUICC AI may update these Terms & Conditions at any time. Users will be notified of major changes.</p>
          </section>
  
          <section>
            <h2 className="text-xl font-semibold">12. Contact Information</h2>
            <p className="text-sm">For any questions or concerns, please contact:</p>
            <p className="text-sm">Email: <a href="mailto:info@quicc.ai" className="text-blue-500">info@quicc.ai</a></p>
            <p className="text-sm">Address: 232 Malpas Road, Newport, NP20 6GP</p>
          </section>
        </div>
      </div>
      </>
    );
  };
  
  export default TermsAndConditions;
  