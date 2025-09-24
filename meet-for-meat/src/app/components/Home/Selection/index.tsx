import React from "react";
import Image from "next/image";

export default function KirchaPage() {
  const livestockItems = [
    {
      id: 1,
      imageSrc: "/ox1.jpg",
      name: "Quality-Ox",
      weightRange: "380-400",
      farm: "Alemu Farm",
      price: "60,000 ETB",
    },
    {
      id: 2,
      imageSrc: "/ox2.jpg",
      name: "Quality-Ox",
      weightRange: "390-400",
      farm: "Aebebe Farm",
      price: "90,000 ETB",
    },
    {
      id: 3,
      imageSrc: "/ox3.jpg",
      name: "Quality-Ox",
      weightRange: "350-400",
      farm: "Leul Farm",
      price: "80,000 ETB",
    },
  ];

  return (
    <main
      id="culture"
      className="max-w-7xl mx-auto px-4 py-20 font-sans text-gray-900 "
    >
      <section className="flex flex-col items-center md:flex-col  lg:flex-row md:space-x-0 lg:space-x-8 w-full mb-28 gap-30">
        <div className="flex-1 prose max-w-xl mb-16 md:mb-0 mx-auto md:mx-0  ">
          <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl">
            Honoring Our Heritage
          </h2>
          <p className="mt-2 mb-2 text-base sm:text-lg md:text-xl leading-relaxed">
            Kircha has been the cornerstone of our community for generations.
            This traditional practice of collective meat sharing strengthens
            bonds, ensures food security, and teaches our youth the value of
            cooperation and shared responsibility.
          </p>
          <p className="mb-1 text-base sm:text-lg font-semibold">Food Security</p>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed">
            Ensuring every family has access to quality protein through community
            support.
          </p>
          <p className="mb-1 text-base sm:text-lg font-semibold">Community Bonds</p>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed">
            Strengthening relationships between neighbors through shared goals and
            mutual support.
          </p>
          <p className="mb-1 text-base sm:text-lg font-semibold">Youth Engagement</p>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed">
            Encouraging younger generations to participate in and preserve our
            cultural traditions.
          </p>
        </div>
        <div className="flex-1 bg-red-700 text-white rounded-xl p-8 mx-auto md:mx-0">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-center">
            Why Kircha Matters
          </h2>
          <p className="mb-8 italic text-sm sm:text-base md:text-lg leading-relaxed">
            &quot;When we come together as a community to share our resources, we create
            something greater than the sum of our individual contributions. Kircha
            teaches us that abundance comes through unity.&quot;
          </p>
          <div className="bg-red-500 p-4 rounded text-xs sm:text-sm md:text-base">
            <p className="font-semibold">Traditional Impact:</p>
            <ol className="list-decimal list-inside space-y-1">
              <li>Reduced food costs for families</li>
              <li>Stronger community connections</li>
              <li>Preserved cultural knowledge</li>
              <li>Enhanced food quality assurance</li>
            </ol>
          </div>
        </div>
      </section>

      <section id="buy" className="text-center max-w-3xl mx-auto mb-28">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2">
          Quality Livestock Marketplace
        </h3>
        <p className="text-gray-700 text-base sm:text-lg md:text-xl">
          Browse verified sellers offering premium cattle for your Kircha group
        </p>
      </section>

      <div
        className="relative left-1/2 right-1/2 w-screen ml-[-50vw] mr-[-50vw] px-4  "
        style={{ maxWidth: "99.6vw" }}
      >
        <section className="flex flex-wrap w-full gap-6">
          {livestockItems.map(
            ({ id, imageSrc, name, weightRange, farm, price }) => (
              <div
                key={id}
                className="bg-white border border-gray-200 rounded-lg shadow-md flex-1"
              >
                <Image
                  className="rounded-t-lg object-cover w-full h-64"
                  src={imageSrc}
                  alt={name}
                  height={100}
                  width={150}
                  loading="lazy"
                />
                <div className="p-4 space-y-1">
                  <p className="text-sm ">{name}</p>
                  <p className="text-sm">
                    <span className="">Weight-</span>{" "}
                    <span className="text-red-600">{weightRange}</span>
                  </p>
                  <p className="text-sm">
                    <span className="">From-</span> {farm}
                  </p>

                  <div className="flex items-center justify-between mt-2">
                    <p className="text-sm font-bold text-red-600">{price}</p>
                    <button
                      className="bg-red-600 text-white text-xs px-3 py-1 rounded-md hover:bg-red-700 transition font-semibold"
                      type="button"
                    >
                      Select
                    </button>
                  </div>
                </div>
              </div>
            )
          )}
        </section>
      </div>

      <section className="text-center">
        <button className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition mt-20 font-semibold text-base sm:text-lg md:text-xl">
          View All Livestock
        </button>
      </section>
    </main>
  );
}
