import { Outlet } from "react-router-dom";

import ScrollToTop from "@/hooks/ScrollToTop";
import NavBar from "../components/partials/header/NavBar";
import Footer from "../components/partials/footer/Footer";

export default function MainLayout() {
  return (
    <>
      <ScrollToTop />
      <NavBar />
      <main className="min-h-screen pt-16">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
