// import Hero from "../../../Components/UserComponents/homeComponents/Hero/Hero";



// import About from "../../../Components/UserComponents/homeComponents/About/About";
// import Footer from "../../../Components/UserComponents/homeComponents/Footer/Footer";
// import About from "../../../Components/UserComponents/homeComponents/About/About";
import Hero from "../../../Components/UserComponents/homeComponents/Hero/Hero";
import AboutSection from "../../../Components/UserComponents/homeComponents/lagngath/AboutSection";
import ProfileSteps from "../../../Components/UserComponents/homeComponents/profilestep/ProfileSteps";
import StatsSection from "../../../Components/UserComponents/homeComponents/StatsSection/StatsSection";
import MatchedByMatrimony from "../../../Components/UserComponents/homeComponents/MatchedByMatrimony/MatchedByMatrimony"
import WhatsAppButton from "../../../Components/UserComponents/Buttons/WhatsAppButton";
import Circle_pro from "../../../Components/UserComponents/homeComponents/Circle_properties/Circle_pro";
function HomePage() {
  return (
    <div>
      <Hero />
      <ProfileSteps />
      <Circle_pro/>
      <AboutSection />
      <StatsSection />
     
      <MatchedByMatrimony />
      <WhatsAppButton/>




    </div>
  );
}

export default HomePage;


