'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
import { FaUsers, FaArrowLeft } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#how'); 

  return (
    <section id="how"
      className="w-full px-4 font-sans text-gray-900 overflow-x-hidden  "
    >
      <header className="w-full mb-8 ">
        <div className="flex flex-col items-center md:flex-row md:justify-between md:items-center ">
          <div className="flex justify-between items-center w-full md:w-auto">
            <Image
              src="/logo.png"
              alt="Meet for Meat logo"
              width={120}
              height={40}
              priority
              className="mt-2 max-sm:w-28 max-sm:ml-3 max-xl:w-30"
            />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline lg:hidden text-red-700 hover:text-red-800 focus:outline-none absolute top-4 right-4 z-50"
              aria-label="Toggle menu"
            >
              {menuOpen ? <HiX className="w-8 h-8" /> : <HiMenu className="w-8 h-8" />}
            </button>
          </div>

          <nav
            className={`${
              menuOpen
                ? 'fixed inset-0 h-screen bg-white z-50 p-8  flex flex-col space-y-6 text-left'
                : 'hidden lg:flex lg:space-x-20 lg:items-center lg:static lg:h-auto lg:p-0 lg:overflow-visible lg:flex-row lg:space-y-0 lg:text-center'
            } text-gray-900 font-medium w-full lg:w-auto lg:mt-0`}
         
          >
            {menuOpen && (
              <button
                onClick={() => setMenuOpen(false)}
                className="  top-4 right-4 z-60 text-red-700 hover:text-red-900 focus:outline-none"
                aria-label="Close menu"
              >
                <HiX className="w-8 h-8" />
              </button>
            )}

            {[
              { href: '#how', label: 'How It Works' },
              { href: '#features', label: 'Features' },
              { href: '#culture', label: 'Our Culture' },
              { href: '#buy', label: 'Pricing' },
              {href: '#reviews',label: 'Voices'},
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => {
                  setMenuOpen(false);
                  setActiveLink(href);
                }}
                className={`block px-4 py-2 lg:px-0 lg:py-0 whitespace-nowrap text-sm md:text-base lg:text-lg xl:text-xl hover:text-red-700 border-b-2 transition ${
                  activeLink === href ? 'border-red-600 text-red-700' : 'border-transparent'
                }`}
              >
                {label}
              </Link>
            ))}

            <button className="hidden lg:inline bg-red-600 text-white px-8 py-3 rounded-lg ml-6 font-semibold text-xl shadow hover:bg-red-700 transition whitespace-nowrap">
              Download app
            </button>

            {menuOpen && (
              <button
                onClick={() => setMenuOpen(false)}
                className="lg:hidden w-full bg-red-600 text-white px-8 py-3 rounded-lg font-semibold text-xl shadow hover:bg-red-700 transition"
              >
                Download app
              </button>
            )}
          </nav>
        </div>
      </header>

      <main className="w-full text-center mt-10 px-4 max-w-full ">
        <small className="block text-sm text-gray-500 tracking-widest uppercase mb-3">
          Traditional Values, Modern Solutions
        </small>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-4 leading-tight">
          Meet for Meat
        </h1>
        <h2 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] text-red-600 mb-6 font-normal">
          Modernizing Kircha
        </h2>
        <p className="text-[16px] sm:text-[18px] md:text-[19px] lg:text-[20px] text-gray-600 mb-10 text-center max-w-xl mx-auto leading-relaxed">
          Connect with your community to collectively purchase and share quality meat through our digital platform that honors traditional Kircha practices while ensuring food security and cultural preservation.
        </p>
        <div className="flex flex-wrap justify-center gap-8 mb-10">
          <button className="bg-red-600 text-white text-lg sm:text-xl px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-semibold hover:bg-red-700 transition shadow">
            Join a Group
          </button>
          <button className="border-2 border-red-700 text-red-700 text-lg sm:text-xl px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-semibold hover:bg-red-50 transition shadow">
            Learn More
          </button>
        </div>
      </main>

      <section className="text-center mt-20 mb-28 px-4 sm:px-0 w-full max-w-full ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 justify-center md:grid-cols-2 ">
         
          <div className="border border-gray-300 p-16 text-center rounded-lg hover:shadow-lg transition">
            <FaUsers className="mx-auto mb-6 w-12 h-12 text-red-700" />
            <h4 className="font-semibold mb-3 text-[16px] sm:text-[20px] md:text-[22px] lg:text-[24px]">
              Community Driven
            </h4>
            <p className="text-gray-600 leading-relaxed text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]">
              Connect with 10-20 participants <br /> to form buying groups
            </p>
          </div>

          <div className="border border-gray-300 p-16 text-center rounded-lg hover:shadow-lg transition">
            <AiFillHeart className="mx-auto mb-6 w-12 h-12 text-red-700" />
            <h4 className="font-semibold mb-3 text-[16px] sm:text-[20px] md:text-[22px] lg:text-[24px]">
              Cultural Heritage
            </h4>
            <p className="text-gray-600 leading-relaxed text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]">
              Preserving traditional Kircha practices<br /> for future generations
            </p>
          </div>

          <div className="border border-gray-300 p-16 text-center rounded-lg hover:shadow-lg transition">
            <FaArrowLeft className="mx-auto mb-6 w-12 h-12 text-red-700" />
            <h4 className="font-semibold mb-3 text-[16px] sm:text-[20px] md:text-[22px] lg:text-[24px]">
              Modern Convenience
            </h4>
            <p className="text-gray-600 leading-relaxed text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]">
              Digital payments and coordination, finding<br /> Partner made simple
            </p>
          </div>
           <div className="my-17 hidden md:block lg:hidden xl:hidden 2xl:hidden">
<Image
  src="/collaborate.jpeg"
  alt="Fresh Meat"
  width={150}   
  height={100}  
  className="rounded-lg shadow-lg md:w-50 h-auto mx-auto object-contain"
  style={{ verticalAlign: "bottom" }}
/>

            </div>
        </div>
      </section>
    </section>
  );
}
