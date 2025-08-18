import { Outlet, useLocation } from "react-router-dom";

import ScrollToTop from "@/hooks/ScrollToTop";
import NavBar from "@/components/partials/header/NavBar";
import Footer from "@/components/partials/footer/Footer";

export default function MainLayout() {
  const location = useLocation();

  const isHeroPage = location.pathname === "/";
  return (
    <>
      <ScrollToTop />
      <NavBar />
      <main className={`min-h-screen ${!isHeroPage ? "pt-20" : ""}`}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
