import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close, logoImage } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("'");

  return (
    <nav
      className={`
    ${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logoImage}
            alt="logo"
            style={{
              width: '300px',  // Define a largura da imagem
              height: '300px', // Define a altura da imagem
              objectFit: 'contain', // Ajusta a imagem para manter suas proporções
              borderRadius: '8px',
            }}
          />
          <p className="text-white text-[18px] font-bold cursor-pointer">
            Mikael <span className="sm:block hidden">| Web Developer</span>
          </p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
