import React, { useState } from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@heroui/react";
import "./ComponentStyles.css"

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar isBlurred={true} shouldHideOnScroll position="sticky" className="fixed top-0 left-0 z-50 text-[1.4em] pt-3 pb-3 w-full bg-white/30 backdrop-blur-sm">
      {/* Mobile Menu Button */}
      <div className="lg:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 text-gray-600 hover:text-gray-900"
        >
          <span className="material-symbols-rounded" style={{ fontSize: "2rem" }}>
            {isMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Desktop Navigation */}
      <NavbarContent className="hidden lg:flex space-x-8" justify="start">
        <NavbarItem className="whitespace-nowrap">
          <span className="material-symbols-rounded hover:text-white transform transition-all duration-200 hover:cursor-pointer" style={{ fontSize: "2rem" }}>home</span>
        </NavbarItem>

        <NavbarItem className="whitespace-nowrap hover:text-white transform transition-all duration-200">
          <Link color="foreground" href="#">
            Experience
          </Link>
        </NavbarItem>

        <NavbarItem isActive className="whitespace-nowrap hover:text-white transform transition-all duration-200">
          <Link aria-current="page" href="#">
            Explore
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="flex justify-center w-full" justify="center">
        <NavbarBrand>
          <p className="font-bold text-inherit text-center w-full">DSP Hotel</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden lg:flex space-x-8" justify="end">
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-sm py-4">
          <div className="flex flex-col items-center space-y-4">
            <NavbarItem className="whitespace-nowrap">
              <span className="material-symbols-rounded hover:text-gray-600 transform transition-all duration-200 hover:cursor-pointer" style={{ fontSize: "2rem" }}>home</span>
            </NavbarItem>

            <NavbarItem className="whitespace-nowrap hover:text-gray-600 transform transition-all duration-200">
              <Link color="foreground" href="#">
                Experience
              </Link>
            </NavbarItem>

            <NavbarItem className="whitespace-nowrap hover:text-gray-600 transform transition-all duration-200">
              <Link color="foreground" href="#">
                Explore
              </Link>
            </NavbarItem>

            <NavbarItem className="whitespace-nowrap hover:text-gray-600 transform transition-all duration-200">
              <Link color="foreground" href="#">
                Start Safari
              </Link>
            </NavbarItem>

            <NavbarItem className="whitespace-nowrap hover:text-gray-600 transform transition-all duration-200">
              <Button as={Link} color="primary" href="#" variant="flat">
                Enquire Now
              </Button>
            </NavbarItem>
          </div>
        </div>
      )}
    </Navbar>
  );
};

export default Header;
