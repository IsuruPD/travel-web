"use client";
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@heroui/react";
import "./designModule.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <Navbar>
      <NavbarBrand>
        <AcmeLogo />
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link aria-current="page" href="#">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
      {/* <div className="headerContent">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=home" />
        
        <nav className="navLinks">
          <a href="#experience" className="navLink">
            EXPERIENCE
          </a>
          <a href="#explore" className="navLink">
            EXPLORE
          </a>
          <a href="#discover" className="navLink">
            DISCOVER
          </a>
        </nav>

        <h1 className="brandName ">DSP Hotel</h1>

        <p className="navLink">START MY SAFARI</p>

        <button className="enquireButton">Enquire Now</button>
      </div>

      <p className="familyOwned">FAMILY OWNED&RUN SINCE 2025</p> */}
    </header>
  );
};

export default Header;
