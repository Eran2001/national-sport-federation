import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-primary via-secondary to-third text-text overflow-hidden">
      {/* Top Section */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-8 py-16 px-6 md:px-12 lg:px-24">
        <div className="flex flex-col items-start gap-6">
          <div className="text-light text-2xl font-bold tracking-tight">
            LOGO
          </div>
          <p className="text-border text-sm leading-relaxed max-w-xs">
            A stunning footer UI for React explicitly designed for websites,
            featuring an eye-catching gradient background.
          </p>
          <ul className="flex gap-4">
            {["facebook", "twitter", "instagram", "linkedin"].map((social) => (
              <li key={social}>
                <a
                  href={`#${social}`}
                  className="text-light hover:text-third transition-colors duration-300 ease-in-out"
                  aria-label={social}
                >
                  <svg className="w-6 h-6" fill="currentColor">
                    {/* Placeholder for social icons; replace with actual SVGs or icon library */}
                    <rect width="24" height="24" rx="4" />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-start gap-6">
          <h3 className="text-light text-lg font-semibold">Company</h3>
          <ul className="text-border flex flex-col gap-3 text-sm">
            {[
              "About company",
              "Company services",
              "Job opportunities",
              "Creative people",
            ].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="hover:text-third transition-colors duration-300 ease-in-out"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-start gap-6">
          <h3 className="text-light text-lg font-semibold">Customer</h3>
          <ul className="text-border flex flex-col gap-3 text-sm">
            {[
              "Client support",
              "Latest news",
              "Company story",
              "Pricing packages",
            ].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="hover:text-third transition-colors duration-300 ease-in-out"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-start gap-6">
          <h3 className="text-light text-lg font-semibold">Additional</h3>
          <ul className="text-border flex flex-col gap-3 text-sm">
            {["Our story", "Who we are", "Our process", "Latest news"].map(
              (item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="hover:text-third transition-colors duration-300 ease-in-out"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      </div>

      <hr className="relative z-10 border-t border-border opacity-50 mx-6 md:mx-12 lg:mx-24" />

      {/* Bottom Section */}
      <div className="relative z-10 max-w-7xl mx-auto py-8 flex flex-col md:flex-row justify-between items-center px-6 md:px-12 lg:px-24 gap-6">
        <ul className="flex flex-wrap justify-center items-center gap-6">
          {["Privacy policy", "Legal notice", "Terms of service"].map(
            (item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-light hover:text-third text-sm font-medium transition-colors duration-300 ease-in-out"
                >
                  {item}
                </a>
              </li>
            )
          )}
        </ul>
        <p className="text-light text-sm opacity-80">
          © {new Date().getFullYear()} Eran Hasareli
        </p>
      </div>

      {/* Decorative Circles */}
      <div className="absolute top-0 -left-[320px] w-[640px] h-[640px] rounded-full bg-gradient-to-br from-primary via-secondary to-transparent backdrop-blur-xl z-0 opacity-70"></div>
      <div className="absolute -bottom-[150px] -right-[100px] w-[320px] h-[320px] rounded-full bg-gradient-to-tr from-primary via-secondary to-transparent backdrop-blur-xl z-0 opacity-70"></div>
    </footer>
  );
};

export default Footer;
