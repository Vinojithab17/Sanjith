"use client";

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const Nav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: rgba(10, 25, 47, 0.85);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 0 25px;
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #64ffda;
  cursor: pointer;
`;

const NavLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.button`
  background: none;
  border: none;
  color: #ccd6f6;
  font-size: 0.9rem;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: #64ffda;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #64ffda;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  display: none;
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  background-color: #112240;
  padding: 2rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileNavLink = styled(motion.button)`
  display: block;
  background: none;
  border: none;
  color: #ccd6f6;
  font-size: 1.2rem;
  padding: 1rem 0;
  text-align: center;
  cursor: pointer;

  &:hover {
    color: #64ffda;
  }
`;

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
  };

  const navVariants = { hidden: { y: -100 }, visible: { y: 0 } };
  const menuVariants = { closed: { opacity: 0, y: -20 }, open: { opacity: 1, y: 0 } };

  return (
    <>
      <Nav
        variants={navVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
        style={{
          boxShadow: isScrolled ? "0 10px 30px -10px rgba(2,12,27,0.7)" : "none",
        }}
      >
        {/* Logo */}
        <Logo onClick={() => scrollToSection("about")}>S</Logo>

        {/* Centered nav links */}
        <NavLinksContainer>
          <NavLinks>
            <NavLink onClick={() => scrollToSection("home")}>Home</NavLink>
            <NavLink onClick={() => scrollToSection("resume")}>Resume</NavLink>
            <NavLink onClick={() => scrollToSection("projects")}>Projects</NavLink>
            <NavLink onClick={() => scrollToSection("tools")}>Tools</NavLink>
            <NavLink onClick={() => scrollToSection("contact")}>Contact</NavLink>
          </NavLinks>
        </NavLinksContainer>

        {/* Mobile menu button */}
        <MobileMenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? "✕" : "☰"}
        </MobileMenuButton>
      </Nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu initial="closed" animate="open" exit="closed" variants={menuVariants}>
            <MobileNavLink onClick={() => scrollToSection("home")} whileHover={{ x: 10 }}>
              About
            </MobileNavLink>
            <MobileNavLink onClick={() => scrollToSection("resume")} whileHover={{ x: 10 }}>
              Resume
            </MobileNavLink>
            <MobileNavLink onClick={() => scrollToSection("projects")} whileHover={{ x: 10 }}>
              Projects
            </MobileNavLink>
            <MobileNavLink onClick={() => scrollToSection("tools")} whileHover={{ x: 10 }}>
              Tools
            </MobileNavLink>
            <MobileNavLink onClick={() => scrollToSection("contact")} whileHover={{ x: 10 }}>
              Contact
            </MobileNavLink>
          </MobileMenu>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
