import { useState } from "react";

import Hero from "./Hero";
import LatestNews from "./LatestNews";
import UpcomingEvents from "./UpcomingEvents";
import QuickLinks from "./QuickLinks";
import SponsorLogos from "./SponsorLogos";

import Drawer from "../../components/ui/Drawer";

const Home = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="bg-accent">
        <Hero />
        <LatestNews />
        <UpcomingEvents />
        <QuickLinks />
        <SponsorLogos />
        <div className="p-10">
          <button
            onClick={() => setOpen(true)}
            className="text-white bg-blue-700 px-5 py-2 rounded-lg"
          >
            Show Drawer
          </button>

          <Drawer
            title="My Drawer"
            isOpen={open}
            onClose={() => setOpen(false)}
          >
            <p className="text-gray-700 dark:text-gray-300">
              You can put any content here.
            </p>
          </Drawer>
        </div>
      </div>
    </>
  );
};

export default Home;
