import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/certifications", label: "Credentials" },
  { to: "/contact", label: "Contact" },
];

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  border-bottom: 1px solid ${({ theme, $scrolled }) => ($scrolled ? theme.colors.line : "transparent")};
  background: ${({ theme, $scrolled }) => ($scrolled ? `${theme.colors.base}e6` : "transparent")};
  backdrop-filter: blur(10px);
  transition: background 0.2s ease, border-color 0.2s ease;
`;

const Bar = styled.div`
  max-width: 1152px;
  margin: 0 auto;
  padding: 0 20px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0 32px;
  }
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
`;

const Dot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary};
  box-shadow: 0 0 8px ${({ theme }) => theme.colors.primary};
`;

const DesktopNav = styled.nav`
  display: none;
  gap: 32px;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    align-items: center;
  }
`;

const NavItem = styled(NavLink)`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: ${({ theme }) => theme.colors.muted};
  transition: color 0.2s ease;

  &:hover { color: ${({ theme }) => theme.colors.text}; }
  &.active { color: ${({ theme }) => theme.colors.primary}; }
`;

const MenuButton = styled.button`
  display: block;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const MobileNav = styled(motion.nav)`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px 20px 20px;
  border-top: 1px solid ${({ theme }) => theme.colors.line};
  background: ${({ theme }) => theme.colors.base};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const MobileNavItem = styled(NavLink)`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: ${({ theme }) => theme.colors.muted};
  &.active { color: ${({ theme }) => theme.colors.primary}; }
`;

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Header $scrolled={scrolled}>
      <Bar>
        <Logo to="/">
          <Dot />
          <span>webghost.eth</span>
        </Logo>

        <DesktopNav>
          {LINKS.map((l) => (
            <NavItem key={l.to} to={l.to} end={l.to === "/"}>
              {l.label}
            </NavItem>
          ))}
        </DesktopNav>

        <MenuButton onClick={() => setOpen((v) => !v)} aria-label={open ? "Close menu" : "Open menu"}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </MenuButton>
      </Bar>

      <AnimatePresence>
        {open && (
          <MobileNav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            {LINKS.map((l) => (
              <MobileNavItem key={l.to} to={l.to} end={l.to === "/"} onClick={() => setOpen(false)}>
                {l.label}
              </MobileNavItem>
            ))}
          </MobileNav>
        )}
      </AnimatePresence>
    </Header>
  );
}
