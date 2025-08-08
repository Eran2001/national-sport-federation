import { useEffect } from "react";

import Notification from "@/components/ui/Notification";

const Home = () => {
  useEffect(() => {
    Notification.success("Yes");
  }, []);
  return <div>Home</div>;
};

export default Home;
