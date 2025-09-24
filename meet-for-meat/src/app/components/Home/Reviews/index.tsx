import React from "react";
import { FaStar } from "react-icons/fa";
import Image from "next/image";

const testimonials = [
  {
    stars: 5,
    text: `"Our family saves almost 40% on meat costs through Kircha groups. My children are learning about community cooperation while we ensure food security for our household."`,
    name: "Lamesgin Hailu",
    role: "Father of 4, Addis Ababa",
    avatar: "lame.jpg",
  },
  {
    stars: 5,
    text: `"Meet for Meat has made organizing our community Kircha so much easier. The digital payments and coordination have eliminated all the traditional hassles while keeping the cultural spirit alive."`,
    name: "Tihitna Yohannes",
    role: "Group Organizer, Bole",
    avatar: "titi.jpg",
  },
  {
    stars: 5,
    text: `"As a young person, I thought Kircha was old-fashioned. This app showed me how beautiful our traditions can be when combined with modern convenience. I'm proud to participate now."`,
    name: "Bezawit Enawgaw",
    role: "Young Professional, Hawassa",
    avatar: "beza.jpg",
  },
];

export default function Review() {
  return (
    <main id="reviews"
      className="min-h-screen flex flex-col items-center bg-white text-gray-900 overflow-x-hidden  "
    >
      <section className="max-w-7xl w-full px-0 py-5 mb-20">
        <h1 className="text-3xl sm:text-4xl font-semibold text-center mb-2">
          Community Voices
        </h1>
        <p className="text-center text-base sm:text-lg text-gray-600 mb-12">
          Hear from families and organizers who have embraced modern Kircha
        </p>

        <div className="flex flex-col md:flex-col md:items-center gap-20 justify-center 2xl:flex-row xl:flex-row lg:flex-row">
          {testimonials.map(({ stars, text, name, role, avatar }, i) => (
            <article
              key={i}
              className="flex flex-col items-center max-w-sm text-center space-y-4"
            >
              <div className="text-9xl text-red-600 leading-none">“</div>
              <div className="text-yellow-400 flex justify-center space-x-1">
                {Array.from({ length: stars }).map((_, idx) => (
                  <FaStar key={idx} className="w-5 h-5" />
                ))}
              </div>
              <p className="text-gray-800 font-medium text-base sm:text-lg leading-relaxed">
                {text}
              </p>
              <div className="flex items-center space-x-3">
                <Image
  src={avatar.startsWith('http') ? avatar : `/${avatar}`}
  alt={name}
  className="w-12 h-12 rounded-full object-cover"
  height={100}
  width={150}
/>

                <div className="text-left">
                  <p className="font-semibold text-gray-900 text-lg sm:text-xl">
                    {name}
                  </p>
                  <p className="text-sm sm:text-base text-gray-600">{role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="w-screen bg-red-600 text-white py-16 flex flex-col items-center -mx-6 px-6  mr-3 ml-3">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-center">
          Ready to Join the Modern Kircha Movement?
        </h2>
        <p className="max-w-md text-center text-sm sm:text-base mb-10 px-4 leading-relaxed">
          Download Meet for Meat today and connect with your community for
          traditional sharing with modern convenience. Your journey toward
          cultural preservation and food security starts here.
        </p>

        <div className="bg-red-400 max-w-3xl w-full px-10 py-8 rounded-md text-white text-center">
          <h3 className="text-lg sm:text-xl font-semibold mb-6">
            Get Started in 3 Easy Steps
          </h3>
          <div className="flex flex-col md:flex-row justify-between gap-6 text-sm sm:text-base font-medium">
            {[
              {
                number: "1",
                title: "Download & Register",
                description: "Create your account and verify your location",
              },
              {
                number: "2",
                title: "Find Your Group",
                description: "Join existing groups or create your own",
              },
              {
                number: "3",
                title: "Enjoy Fresh Meat",
                description: "Receive your share and build community",
              },
            ].map(({ number, title, description }) => (
              <div
                key={number}
                className="flex flex-col items-center md:w-1/3 px-3"
              >
                <div className="bg-white text-red-600 rounded-full w-8 h-8 flex items-center justify-center mb-2 font-bold text-lg sm:text-xl">
                  {number}
                </div>
                <p className="font-semibold">{title}</p>
                <p className="text-xs sm:text-sm font-normal mt-1 leading-snug">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
