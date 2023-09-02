"use client";
import { Navbar, Button } from "flowbite-react";
import { DarkThemeToggle } from "flowbite-react";
import { Pattaya } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";


import React from "react";

const Header = () => {
  const pathname = usePathname()
  return (
    <>
      <Navbar className="bg-zinc-100 py-5 px-5" fluid>
        <div>
            <Navbar.Brand as={Link} href="/">
              <img
                alt="Flowbite React Logo"
                className="mr-3 h-6 sm:h-9"
                src="/images/ubilogo.png"
              />
            </Navbar.Brand>
        </div>
        <div className="flex md:order-2">
          <DarkThemeToggle className="mx-2" />

          <Button>Get started</Button>
          {/* <Navbar.Toggle /> */}
        </div>
        <Navbar.Collapse>
          <Navbar.Link as={Link} active={pathname === "/"} href="/">
            <p>Home</p>
          </Navbar.Link>
          <Navbar.Link as={Link} active={pathname === "/products"} href="/products">
            Products
          </Navbar.Link>

          {/* <Navbar.Link href="#">Services</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link> */}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
