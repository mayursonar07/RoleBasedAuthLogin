// src/app/about/page.tsx
'use client'
import HeaderWithoutAuth from "@/app/components/layout/HeaderWithoutAuth";

const AboutPage = () => {
  return (
    <>
    <HeaderWithoutAuth/>
    <div className="max-w-6xl mx-auto p-6 text-center">
      <h1 className="text-3xl font-bold">About Us</h1>
      <div className="mt-6 p-6 bg-white shadow-sm rounded-md">
        <h2 className="text-2xl font-semibold">Who we are</h2>
        <p className="text-gray-700 text-sm mt-4">
          QUICC AI is a technology platform offering a variety of services at home. Customers use our platform to book services such as beauty treatments, haircuts, massage therapy, cleaning, plumbing, carpentry, appliance repair, painting, etc. These services are delivered in the comfort of their home and at a time of their choosing.
        </p>
        <p className="text-gray-700 text-sm mt-2">
          We promise our customers a high-quality, standardized, and reliable service experience. To fulfill this promise, we work closely with our hand-picked service partners, enabling them with technology, training, products, tools, financing, insurance, and branding, helping them succeed and deliver on this promise.
        </p>
        <p className="text-gray-700 text-sm mt-2 font-semibold">
          Our Vision: Deliver home services and solutions like never experienced before.
        </p>
      </div>
      
      {/* Stats Section */}
      {/* <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div>
          <h3 className="text-xl font-bold">50,000+</h3>
          <p className="text-gray-600 text-sm">Trained Professionals</p>
        </div>
        <div>
          <h3 className="text-xl font-bold">12 Million+</h3>
          <p className="text-gray-600 text-sm">Happy Customers</p>
        </div>
        <div>
          <h3 className="text-xl font-bold">60</h3>
          <p className="text-gray-600 text-sm">Cities</p>
        </div>
        <div>
          <h3 className="text-xl font-bold">4</h3>
          <p className="text-gray-600 text-sm">Countries</p>
        </div>
      </div> */}
    </div>

    </>
  );
};

export default AboutPage;
