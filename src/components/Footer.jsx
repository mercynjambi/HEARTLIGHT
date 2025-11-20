const Footer = () => {
  return (
    <>
      {/* Top Border Line */}
      <div className="w-full border-t border-[var(--color-primary)]"></div>

      <footer className="text-gray-600 bg-white pt-10 px-6 md:px-16 lg:px-24 xl:px-32">
        <div className="flex flex-wrap justify-between gap-12 md:gap-6">
          
          {/* Brand */}
          <div className="max-w-80">
            {/* <img
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/dummyLogo/dummyLogoColored.svg"
              alt="HeartLight Logo"
              className="mb-4 h-10"
            /> */}

            <h1 className="mb-4 text-3xl font-extrabold text-[var(--color-primary)]">
  Heart<span className="text-[var(--color-secondary)]">Light</span>
</h1>

            <p className="text-sm">
              HeartLight Services—strength in unity.  
              We walk with you during life’s toughest moments by providing
              welfare and support when you need it most.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-4 text-[var(--color-primary)]">
              {/* Instagram */}
              <svg className="w-6 h-6 cursor-pointer hover:text-[var(--color-secondary)] transition">
                <path fill="currentColor" d="M7.75 2A5.75..." />
              </svg>

              {/* Facebook */}
              <svg className="w-6 h-6 cursor-pointer hover:text-[var(--color-secondary)] transition">
                <path fill="currentColor" d="M13.5 9H15..." />
              </svg>

              {/* Twitter */}
              <svg className="w-6 h-6 cursor-pointer hover:text-[var(--color-secondary)] transition">
                <path fill="currentColor" d="M22 5.92..." />
              </svg>

              {/* LinkedIn */}
              <svg className="w-6 h-6 cursor-pointer hover:text-[var(--color-secondary)] transition">
                <path fill="currentColor" d="M4.98 3.5..." />
              </svg>
            </div>
          </div>

          {/* Company */}
          <div>
            <p className="text-lg text-[var(--color-primary)] font-semibold">COMPANY</p>
            <ul className="mt-3 flex flex-col gap-2 text-sm">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Our Plans</a></li>
              <li><a href="#">Register</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <p className="text-lg text-[var(--color-primary)] font-semibold">SUPPORT</p>
            <ul className="mt-3 flex flex-col gap-2 text-sm">
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Safety Information</a></li>
              <li><a href="#">Claims & Benefits</a></li>
              <li><a href="#">Support Channels</a></li>
              <li><a href="#">Accessibility</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="max-w-80">
            <p className="text-lg text-[var(--color-primary)] font-semibold">STAY UPDATED</p>
            <p className="mt-3 text-sm">
              Join our mailing list for welfare updates and member benefits.
            </p>

            <div className="flex items-center mt-4">
              <input
                type="text"
                className="bg-white rounded-l border border-gray-300 h-9 px-3 outline-none"
                placeholder="Your email"
              />
              <button className="flex items-center justify-center bg-[var(--color-secondary)] h-9 w-10 rounded-r">
                <svg className="w-4 h-4 text-white">
                  <path d="M19 12H5m14 0-4 4m4-4-4-4" stroke="currentColor" strokeWidth="2" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-[var(--color-primary)] mt-8 opacity-40" />

        <div className="flex flex-col md:flex-row gap-3 items-center justify-between py-5 text-sm">
          <p>© {new Date().getFullYear()} HeartLight Services. All rights reserved.</p>
          <ul className="flex items-center gap-4">
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Sitemap</a></li>
          </ul>
        </div>
      </footer>

      {/* Bottom Border Line */}
      <div className="w-full border-t border-[var(--color-primary)]"></div>

      {/* Powered by */}
      <div className="py-4 text-center text-sm text-gray-500">
        Powered by <span className="text-[var(--color-secondary)] font-semibold">InkDot Solutions</span>
      </div>
    </>
  );
};

export default Footer;
