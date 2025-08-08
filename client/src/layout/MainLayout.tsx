import { Outlet } from "react-router-dom";

import ScrollToTop from "../routes/ScrollToTop";

export default function MainLayout() {
  return (
    <>
      <ScrollToTop />
      <main className="min-h-screen">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </>
  );
}
