import Hero from "./Hero";
import LatestNews from "./LatestNews";
import UpcomingEvents from "./UpcomingEvents";
import QuickLinks from "./QuickLinks";
import SponsorLogos from "./SponsorLogos";

const Home = () => {
  return (
    <>
      <div className="bg-accent">
        <Hero />
        <LatestNews />
        <UpcomingEvents />
        <QuickLinks />
        <SponsorLogos />
      </div>
    </>
  );
};

export default Home;
