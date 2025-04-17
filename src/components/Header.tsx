import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@heroui/react";
import "./ComponentStyles.css"

const Header: React.FC = () => {
  return (
      <Navbar isBlurred={true} shouldHideOnScroll position="sticky" className="fixed top-0 left-0 z-50 text-[1.4em] p-7 w-full bg-white/30 backdrop-blur-sm">
        <NavbarContent className="hidden sm:flex space-x-8" justify="start">
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

        <NavbarContent className="flex space-x-8" justify="end">
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
      </Navbar>
  );
};

export default Header;
