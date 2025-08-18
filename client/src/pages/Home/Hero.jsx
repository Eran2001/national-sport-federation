import React, { useEffect } from "react";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import Typed from "typed.js";

const Hero = () => {
  useEffect(() => {
    const typed = new Typed("#typed-text", {
      strings: [
        "WHERE SPORTS AND SPIRITS COLLIDE!",
        "JOIN THE ULTIMATE SPORTS EXPERIENCE!",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="relative pt-16 pb-12 overflow-hidden">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            className="w-full h-full object-cover opacity-30"
          >
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-stadium-light-beams-1338-large.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Text Content */}
            <div className="relative h-full z-10 text-center lg:text-left">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold uppercase mb-6">
                <span
                  id="typed-text"
                  className="block bg-gradient-to-r from-yellow-500 to-red-600 bg-clip-text text-transparent"
                ></span>
              </h1>
              <p className="mt-4 text-xl text-gray-200 max-w-lg mx-auto lg:mx-0 leading-relaxed animate-fadeIn delay-500">
                Experience the electric vibe where live sports, crafted drinks,
                and great company create unforgettable moments. Join the
                celebration!
              </p>
              <div className="mt-6 flex justify-center lg:justify-start gap-4 animate-fadeIn delay-600">
                <Button
                  text="Contact Us"
                  className="bg-yellow-600 text-black font-semibold text-lg px-8 py-3 rounded-full transform hover:scale-110 hover:shadow-xl hover:bg-yellow-400 transition-all duration-300"
                />
                <Button
                  text="Get Involved"
                  className="bg-transparent border-2 border-yellow-600 text-yellow-600 font-semibold text-lg px-8 py-3 rounded-full transform hover:scale-110 hover:bg-yellow-600 hover:text-black transition-all duration-300"
                />
              </div>
              {/* Floating Social Media Bar */}
              <div className="mt-8 flex justify-center lg:justify-start gap-3 animate-fadeIn delay-700">
                {[
                  {
                    href: "https://whatsapp.com",
                    icon: "simple-icons:whatsapp",
                  },
                  {
                    href: "https://facebook.com",
                    icon: "simple-icons:facebook",
                  },
                  {
                    href: "https://instagram.com",
                    icon: "simple-icons:instagram",
                  },
                  {
                    href: "https://linkedin.com",
                    icon: "simple-icons:linkedin",
                  },
                  { href: "https://github.com", icon: "simple-icons:github" },
                ].map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-yellow-600 hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    <Icon icon={item.icon} className="text-white w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Image with Parallax */}
            <div className="relative">
              <div
                className="w-full h-[50vh] sm:h-[60vh] lg:h-[80vh] bg-cover bg-center rounded-xl shadow-2xl animate-fadeIn delay-800"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1517649763966-29db5e9c0a5a?q=80&w=2070&auto=format&fit=crop')",
                  backgroundAttachment: "fixed",
                  boxShadow: "inset 0 0 30px #d09a13",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
