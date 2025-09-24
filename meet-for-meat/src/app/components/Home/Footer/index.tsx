import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="text-white py-10 px-6 w-full overflow-x-hidden "
      style={{ backgroundColor: "#441010"}}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between space-y-10 md:space-y-0 md:space-x-8 px-4  ">
        <div className="md:w-1/3 flex flex-col items-start space-y-4">
          <div className="flex items-center space-x-2 ">
            <Image
              src="/logo.png"
              alt="Meet for Meat logo"
              className="w-24 h-20 object-contain"
              height={100}
              width={50}
            />
          </div>
          <p className="text-base sm:text-lg text-white max-w-full leading-relaxed">
            Modernizing traditional Kircha practices to strengthen communities,
            ensure food security, and preserve cultural heritage for future generations.
          </p>
        </div>
        <nav className="md:w-1/3 flex flex-col space-y-3 text-base sm:text-lg text-white">
          <h3 className="font-semibold mb-2 text-2xl">Quick Links</h3>
          <Link href="#how" className="hover:text-white transition">
            How It Works
          </Link>
          <Link href="#features" className="hover:text-white transition">
            Features
          </Link>
          <Link href="#buy" className="hover:text-white transition">
          Buy Livestocks
          </Link>
          <Link href="#culture" className="hover:text-white transition">
            Our Culture
          </Link>
          <Link href="#pricing" className="hover:text-white transition">
            Buy Kircha
          </Link>
        </nav>
        <div className="md:w-1/3 text-base sm:text-lg text-white">
          <h3 className="font-semibold mb-2 text-2xl">Contact Us</h3>
          <p>info@meetformeat.et</p>
          <p className="mt-1">+251 911 123 456</p>
          <p className="mt-1">Addis Ababa, Ethiopia</p>
        </div>
      </div>
      <div className="border-t border-white mt-10 pt-6 text-center text-sm sm:text-base text-white">
        © 2025 Meet for Meat. All rights reserved
      </div>
    </footer>
  );
}
