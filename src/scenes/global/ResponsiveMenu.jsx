import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";

function ResponsiveMenu({ isMenuOpen, setIsMenuOpen }) {
  return (
    <div
      className={
        isMenuOpen === true
          ? "h-screen transition-height duration-200 ease-in-out flex justify-center items-center fixed inset-0 bg-purple-900 opacity-90 z-40"
          : "h-0 transition-height duration-200 ease-in-out flex justify-center items-center fixed inset-0 bg-purple-900 opacity-90 -z-40"
      }
    >
      <div className="relative flex flex-col">
        <AnchorLink
          href="#home"
          className="text-white font-outfit text-3xl transition-colors duration-200 ease-linear rounded-md px-2 py-1 hover:bg-purple-700 hover:text-white"
        >
          Home
        </AnchorLink>
        <AnchorLink
          href="#about"
          className="text-white font-outfit text-3xl transition-colors duration-200 ease-linear rounded-md px-2 py-1 hover:bg-purple-700 hover:text-white"
        >
          About
        </AnchorLink>
        <AnchorLink
          href="#projects"
          className="text-white font-outfit text-3xl transition-colors duration-200 ease-linear rounded-md px-2 py-1 hover:bg-purple-700 hover:text-white"
        >
          Projects
        </AnchorLink>
        <AnchorLink
          href="#contact"
          className="text-white font-outfit text-3xl transition-colors duration-200 ease-linear rounded-md px-2 py-1 hover:bg-purple-700 hover:text-white"
        >
          contact
        </AnchorLink>
      </div>
      <div className="absolute top-2 right-2">
        <IconButton onClick={() => setIsMenuOpen((prev) => !prev)}>
          <CloseIcon sx={{ color: "white", fontSize: "40px" }} />
        </IconButton>
      </div>
    </div>
  );
}

export default ResponsiveMenu;
