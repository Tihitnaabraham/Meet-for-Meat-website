// import Image from "next/image";
import KirchaFeatures from "./components/Home/Features";
import LandingPage from "./components/Home/LandingPage";
import KirchaMarketplaceSection from "./components/Home/Selection";
import Types from "./components/Home/Types";
import Review from "./components/Home/Reviews";
import Footer from "./components/Home/Footer";

export default function Home() {
  return (
    <>
      <LandingPage />
      <KirchaFeatures />
      <KirchaMarketplaceSection />
      <Types/>
      <Review/>
      <Footer/>
    </>
  );
}
