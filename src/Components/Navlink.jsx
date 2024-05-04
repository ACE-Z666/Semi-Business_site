/* eslint-disable no-undef */
import React, { useState } from "react";

function MyNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-black bg-opacity-50 backdrop-blur-5 transition duration-300 ease-in-out z-10 ${
        isScrolled ? "bg-black bg-opacity-100" : ""
      }`}
    >
      {/* Your navbar content */}
    </nav>
  );
}

export default MyNavbar;
