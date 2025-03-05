'use client'

const Footer = () => {
    return (
      <footer className="bg-gray-100 text-gray-700 py-6 mt-auto">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center md:text-left">
            {/* Company Info */}
            <div>
              <h2 className="font-semibold text-lg">Company</h2>
              <ul className="mt-2 space-y-2">
                <li><a href="/pages/about" className="hover:underline">About Us</a></li>
                <li><a href="/pages/terms" className="hover:underline">Terms & Conditions</a></li>
                <li><a href="/pages/privacy" className="hover:underline">Privacy Policy</a></li>
                <li><a href="/pages/contact" className="hover:underline">Contact Us</a></li>
              </ul>
            </div>
  
            {/* For Customers */}
            {/* <div>
              <h2 className="font-semibold text-lg">For Customers</h2>
              <ul className="mt-2 space-y-2">
                <li><a href="/reviews" className="hover:underline">UC Reviews</a></li>
                <li><a href="/categories" className="hover:underline">Categories Near You</a></li>
                <li><a href="/blog" className="hover:underline">Blog</a></li>
                <li><a href="/contact" className="hover:underline">Contact Us</a></li>
              </ul>
            </div> */}
  
            {/* Social Links */}
            <div className="">
              <h2 className="font-semibold text-lg">Follow Us</h2>
              <div className="flex justify-center md:justify-start mt-2 space-x-4">
                <a href="#" className="hover:text-blue-600">🐦 Twitter</a>
                <a href="#" className="hover:text-red-600">📷 Instagram</a>
                <a href="#" className="hover:text-blue-800">🔗 LinkedIn</a>
              </div>
              <div className="mt-4 flex justify-center md:justify-start space-x-2">
                <a href="#" className="hover:opacity-80">
                  <img src="/app-store.png" alt="App Store" className="h-10" />
                </a>
                <a href="#" className="hover:opacity-80">
                  <img src="/google-play.png" alt="Google Play" className="h-10" />
                </a>
              </div>
            </div>
          </div>
  
          {/* Copyright */}
          <div className="text-center text-sm mt-6 border-t pt-4">
            © 2025 Quicc. All rights reserved.
            {/* © {new Date().getFullYear()} Quicc. All rights reserved. */}
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  