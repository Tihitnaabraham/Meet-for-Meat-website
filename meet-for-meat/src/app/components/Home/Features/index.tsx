import React from "react";
import { FaMapMarkerAlt, FaUsers, FaDollarSign, FaCar, FaShareAlt } from "react-icons/fa";
import Image from "next/image";


export default function KirchaFeatures() {
  const steps = [
    {
      icon: <FaMapMarkerAlt className="text-red-600 w-8 h-8" />,
      step: "1",
      title: "Find Your Local Group",
      desc: "Connect with participants in your area who share the same goal of collective meat purchasing.",
    },
    {
      icon: <FaUsers className="text-red-600 w-8 h-8" />,
      step: "2",
      title: "Form a Circle",
      desc: "Join or create groups of 10 (full Kircha) or 20 (half Kircha) committed members.",
    },
    {
      icon: <FaDollarSign className="text-red-600 w-8 h-8" />,
      step: "3",
      title: "$35 Secure Payment",
      desc: "Contribute your share through our secure payment system. Truck other participants payment.",
    },
    {
      icon: <FaCar className="text-red-600 w-8 h-8" />,
      step: "4",
      title: "Professional Slaughter",
      desc: "We coordinate with certified professionals for ethical and hygienic processing.",
    },
    {
      icon: <FaShareAlt className="text-red-600 w-8 h-8" />,
      step: "5",
      title: "Equal Distribution",
      desc: "Receive your fair share of premium quality meat delivered to your location.",
    },
  ];


  return (
    <section
      id="features"
      className="w-full px-4 py-20 font-sans text-gray-900 overflow-visible "
    >
      <div className="text-center max-w-4xl mx-auto mb-24">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">How Kircha Works Today</h2>
        <p className="text-gray-700 max-w-xl mx-auto text-lg sm:text-xl leading-relaxed">
          A simple five-step process that brings traditional
          <br />
          community sharing into the digital age
        </p>
      </div>

      <div className="flex flex-wrap sm:flex-row items-center justify-center w-full gap-4 px-4">
        {steps.map(({ icon, step, title, desc }, index) => (
          <div key={index} className="flex flex-col items-center text-center max-w-xs px-4 sm:px-2">
            <div className="flex items-center w-full relative">
              {icon}
              <div className="sm:flex flex-grow relative h-1 bg-red-600 mx-1 items-center">
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 rounded-full bg-red-600 text-white font-bold w-6 h-6 flex items-center justify-center mb-3">
                  {step}
                </div>
              </div>
            </div>
            <h4 className="font-semibold mb-2 mt-8 text-xl sm:text-2xl">{title}</h4>
            <p className="text-gray-600 text-base sm:text-xl leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center max-w-4xl mx-auto mt-32 mb-16">
        <h3 className="text-2xl sm:text-3xl font-semibold mb-6">Modern Features for Traditional Values</h3>
        <p className="text-gray-700 max-w-md mx-auto text-base sm:text-xl leading-relaxed">
          Experience the convenience of digital coordination while maintaining the spirit of community sharing
        </p>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 w-full max-w-6xl mx-auto text-gray-700 px-4"
        style={{ alignItems: "stretch" }}
      >
        <div className="flex flex-col justify-between min-h-full space-y-12 md:space-y-20">
          <div className="flex flex-col items-center max-w-xs sm:max-w-sm md:max-w-md mx-auto space-y-6 min-h-[180px]">
            <h4 className="font-semibold text-xl sm:text-2xl mb-6">Location-Based Groups</h4>
            <p className="text-base sm:text-xl leading-relaxed text-center max-w-xs sm:max-w-sm md:max-w-md mx-auto whitespace-normal">
              Automatically matched with community members in your area for{" "}
              <br className="block sm:hidden" />
              convenient coordination and delivery.
            </p>
          </div>
          <div className="flex flex-col items-center max-w-xs sm:max-w-sm md:max-w-md mx-auto space-y-6 min-h-[150px]">
            <h4 className="font-semibold text-xl sm:text-2xl mb-6">Community Building</h4>
            <p className="text-base sm:text-xl leading-relaxed text-center max-w-xs sm:max-w-sm md:max-w-md mx-auto whitespace-normal">
              Strengthen collaboration while accessing quality meat{" "}
              <br className="block sm:hidden" />
              at affordable prices.
            </p>
          </div>
          <div className="flex flex-col items-center max-w-xs sm:max-w-sm md:max-w-md mx-auto space-y-6 min-h-[200px]">
            <h4 className="font-semibold text-xl sm:text-2xl mb-6">Organizer Benefits</h4>
            <p className="text-base sm:text-xl leading-relaxed text-center max-w-xs sm:max-w-sm md:max-w-md mx-auto whitespace-normal">
              Group organizers truck there group, buy oxen with affordable price{" "}
              <br className="block sm:hidden" />
              coordinating the slaughter process (campany managed/self-managed).
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between min-h-full space-y-20">
          <div className="max-w-xs sm:max-w-sm md:max-w-md mx-auto text-center space-y-6 min-h-[450px]">
            <h4 className="font-semibold text-xl sm:text-2xl mb-2">Flexible Payment</h4>
            <p className="text-base sm:text-xl leading-relaxed max-w-xs sm:max-w-sm md:max-w-md mx-auto whitespace-normal">
              Multiple payment options including mobile money,
              <br className="block sm:hidden" />
              bank transfers, and digital wallets.
            </p>


            <div className="my-17">
              <Image
                src="/meat.jpg"
                alt="Fresh Meat"
                width={150}
                height={100}
                className="block rounded-lg shadow-lg sm:w-64 md:w-96 h-auto mx-auto object-contain"
                style={{ display: "block", verticalAlign: "bottom" }}
              />
            </div>


            <div className="max-w-xs sm:max-w-sm md-max-w-md mx-auto text-center space-y-6 min-h-[150px]">
              <h4 className="font-semibold text-xl sm:text-2xl mb-6">Scheduled Delivery</h4>
              <p className="text-base sm:text-xl leading-relaxed max-w-xs sm:max-w-sm md-max-w-md mx-auto text-center whitespace-normal">
                Coordinated processing and delivery ensures fresh <br className="block sm:hidden" />
                meat reaches everyone simultaneously.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
