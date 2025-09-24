import { FaUsers, FaCrown, FaStar } from "react-icons/fa";

export default function Type() {
  return (
    <div id="pricing"
      className="min-h-screen bg-white flex flex-col items-center p-6 overflow-x-hidden  "
      
    >
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 relative">
        <div className="border border-gray-400 rounded-md p-8 flex flex-col items-center text-center">
          <div className="mb-4 text-red-600 text-4xl font-bold flex flex-col items-center">
            <FaUsers className="mb-2" size={40} />
            Half Kircha
          </div>
          <p className="mb-6  px-4 text-xl leading-relaxed">
            Perfect for smaller families or those wanting to try the experience
          </p>
          <div className="text-4xl font-extrabold mb-2 flex items-baseline space-x-1">
            <span className="text-red-600" style={{ fontSize: "32px" }}>
              50%
            </span>
            
            <span className="text-black font-normal text-xl">share</span>
          </div>
          <ul className="list-decimal list-inside pl-4 text-base  mb-6 leading-tight space-y-1 max-w-xs mx-auto text-left">
            <li>20 members per group</li>
            <li>20 community members</li>
            <li>Half portion per member</li>
            <li>Local area coordination</li>
            <li>Secure payment processing</li>
            <li>Fresh meat guarantee</li>
          </ul>
          <button className="border border-red-600 text-red-600 px-6 py-3 rounded hover:bg-red-600 hover:text-white transition font-semibold text-base">
            Join Half Kircha Group
          </button>
        </div>
        <div className="border-2 border-red-600 rounded-md p-8 flex flex-col items-center text-center relative">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 bg-white rounded-md px-3 py-1 shadow text-base">
            <FaStar className="text-red-600" />
            <span className="text-red-600 font-semibold">Most popular</span>
          </div>
          <div className="mb-4 text-red-600 text-4xl font-bold flex flex-col items-center">
            <FaCrown className="mb-2" size={40} />
            Full Kircha
          </div>
          <p className="mb-6 px-4 text-xl leading-relaxed">
            Traditional full sharing for families with higher meat consumption
          </p>
          <div className="text-4xl font-extrabold mb-2 flex items-baseline space-x-1">
            <span className="text-red-600" style={{ fontSize: "32px" }}>
              100%
            </span>
            
            <span className="text-black font-normal text-xl">share</span>
          </div>
          <ul className="list-decimal list-inside pl-4 text-base mb-6 leading-tight space-y-1 text-left max-w-xs mx-auto">
            <li>10 members per group</li>
            <li>Full portion per member</li>
            <li>Priority group formation</li>
            <li>Premium cut selection</li>
            <li>Express coordination</li>
            <li>Cultural ceremony inclusion</li>
          </ul>
          <button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition font-semibold text-base">
            Join Full Kircha Group
          </button>
        </div>
      </div>
      <div className="w-screen bg-red-600 text-white py-12 text-center -mx-6  px-6 ">
        <h2 className="text-4xl font-bold mb-4">
          Special Organizer Benefits
        </h2>
        <p className="max-w-xl mx-auto mb-6 text-xl leading-relaxed">
          Step up as a group organizer and collect your family and relatives for
          fresh meat and minimize slaughter process or purchase healthy livestocks.
        </p>
        <button className="bg-white text-red-600 font-semibold px-8 py-3 rounded-lg hover:bg-red-800 transition text-xl">
          Become an Organizer
        </button>
      </div>
    </div>
  );
}
