import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import ResponsiveMenu from "./ResponsiveMenu";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="fixed left-0 right-0 flex justify-between items-center p-4 z-40 bg-white md:justify-around">
      <div className="font-francois font-bold text-purple-700 text-3xl">
        WANG
      </div>
      <div className="md:hidden">
        <IconButton onClick={() => setIsMenuOpen((prev) => !prev)}>
          <MenuIcon sx={{ color: "purple", fontSize: "40px" }} />
        </IconButton>
      </div>
      <div className="hidden gap-4 items-center md:flex">
        <AnchorLink
          href="#home"
          className="text-purple-900 font-outfit text-xl transition-colors duration-200 ease-linear rounded-md px-2 py-1 hover:bg-purple-700 hover:text-white"
        >
          Home
        </AnchorLink>
        <AnchorLink
          href="#about"
          className="text-purple-900 font-outfit text-xl transition-colors duration-200 ease-linear rounded-md px-2 py-1 hover:bg-purple-700 hover:text-white"
        >
          About
        </AnchorLink>
        <AnchorLink
          href="#projects"
          className="text-purple-900 font-outfit text-xl transition-colors duration-200 ease-linear rounded-md px-2 py-1 hover:bg-purple-700 hover:text-white"
        >
          Projects
        </AnchorLink>
        <AnchorLink
          href="#contact"
          className="text-purple-900 font-outfit text-xl transition-colors duration-200 ease-linear rounded-md px-2 py-1 hover:bg-purple-700 hover:text-white"
        >
          contact
        </AnchorLink>
      </div>
      <ResponsiveMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
    </nav>
  );
}

export default Navbar;
