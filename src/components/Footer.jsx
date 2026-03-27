import React from "react";

function Footer() {
  return (
    <footer className="w-full border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Left */}
          <p className="text-xs text-white/60 text-center md:text-left">
            © {new Date().getFullYear()} Hamza Farooq. All rights reserved.
          </p>

          {/* Right */}
          <div className="flex items-center gap-4 text-xs text-white/60">
            <a
              href="#"
              className="hover:text-white transition-colors"
            >
              Terms & Conditions
            </a>

            <span className="hidden md:block w-px h-4 bg-white/20" />

            <a
              href="#"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;