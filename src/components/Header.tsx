import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@heroui/react";

const Header: React.FC = () => {
  return (
      <Navbar isBlurred={true} shouldHideOnScroll position="sticky" className="fixed top-0 left-0 z-50 text-[1.25em] p-4 w-full bg-white/30 backdrop-blur-sm">
        <NavbarContent className="hidden sm:flex" justify="start">
          <NavbarItem>
            <span className="material-symbols-rounded">home</span>
          </NavbarItem>

          <NavbarItem>
            <Link color="foreground" href="#">
              Experience
            </Link>
          </NavbarItem>

          <NavbarItem isActive>
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

        <NavbarContent justify="end">
          <NavbarItem>
            <Link color="foreground" href="#">
              Start Safari
            </Link>
          </NavbarItem>

          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="flat">
              Enquire Now
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
  );
};

export default Header;
