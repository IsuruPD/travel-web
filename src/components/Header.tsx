import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@heroui/react";
import { Menu, X } from "lucide-react";
import "./ComponentStyles.css";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      isBlurred
      shouldHideOnScroll
      position="sticky"
      className="fixed top-0 left-0 z-50 text-[1.4em] pt-3.5 pb-3.5 w-full bg-white/30 backdrop-blur-sm"
    >
      {/* Left content (desktop) */}
      <NavbarContent className="hidden lg:flex space-x-8 list-none" justify="start">
      <NavbarItem className="whitespace-nowrap">
        <span
        className="material-symbols-rounded hover:text-white transform transition-all duration-200 hover:cursor-pointer"
        style={{ fontSize: "2rem" }}
        >
        home
        </span>
      </NavbarItem>

      <NavbarItem className="whitespace-nowrap hover:text-white transform transition-all duration-200">
        <Link color="foreground" href="#">
        Experience
        </Link>
      </NavbarItem>

      <NavbarItem
        isActive
        className="whitespace-nowrap hover:text-white transform transition-all duration-200"
      >
        <Link aria-current="page" href="#">
        Explore
        </Link>
      </NavbarItem>
      </NavbarContent>

      {/* Centered Brand (Always Visible) */}
      <NavbarContent className="flex justify-center w-full lg:w-auto" justify="center">
      <NavbarBrand>
        <p className="font-bold text-inherit text-center">DSP Hotel</p>
      </NavbarBrand>
      </NavbarContent>

      {/* Right content (desktop) */}
      <NavbarContent className="hidden lg:flex space-x-8 list-none" justify="end">
      <NavbarItem className="whitespace-nowrap hover:text-white transform transition-all duration-200">
        <Link color="foreground" href="#">
        Start Safari
        </Link>
      </NavbarItem>

      <NavbarItem className="whitespace-nowrap hover:text-white transform transition-all duration-200">
        <Button as={Link} color="primary" href="#" variant="flat">
        Enquire Now
        </Button>
      </NavbarItem>
      </NavbarContent>

      {/* Hamburger Menu Button (mobile only) */}
      <div className="lg:hidden absolute right-4 top-1/2 -translate-y-1/3">
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="text-base hover:text-forest-light focus:outline-none hover:cursor-pointer"
      >
        {isMenuOpen ? (
      <X className="w-8 h-8" />
        ) : (
      <Menu className="w-8 h-8" />
        )}
      </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
      <div className="lg:hidden absolute top-full left-0 w-full bg-black/80 backdrop-blur-xl py-4 z-50 shadow-md mt-3.5 backdrop-filter text-white">
        <div className="flex flex-col items-center space-y-4 px-4 list-none">
        <NavbarItem>
          <Link color="foreground" href="#" className="hover:text-gray-300">
          Experience
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link color="foreground" href="#" className="hover:text-gray-300">
          Explore
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link color="foreground" href="#" className="hover:text-gray-300">
          Start Safari
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link color="foreground" href="#" className="hover:text-gray-300">
          Enquire Now
          </Link>
        </NavbarItem>
        </div>
      </div>
      )}
    </Navbar>
  );
};

export default Header;
