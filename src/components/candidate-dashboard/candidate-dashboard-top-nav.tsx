"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

type TNavItem = {
  name: string;
  href: string;
};
const CandidateDashboardTopNav = ({ navItems }: { navItems: TNavItem[] }) => {
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      const sections = navItems.map((item) => ({
        id: item.href.slice(1),
        offset: document.getElementById(item.href.slice(1))?.offsetTop || 0,
      }));

      const currentSection = sections.reduce((acc, section) => {
        if (scrollPosition >= section.offset - 100) {
          return section.id;
        }
        return acc;
      }, "");

      setActiveLink(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to set initial active link

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(link.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-white rounded border shadow fixed z-50 w-full">
      {navItems.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          onClick={(e) => handleClick(e, link.href)}
          className={`text-lg px-4 py-3 mr-2 inline-block ${
            activeLink === link.href.slice(1)
              ? "border-b-2 border-primary text-primary"
              : "text-gray-600 hover:text-primary"
          }`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default CandidateDashboardTopNav;
