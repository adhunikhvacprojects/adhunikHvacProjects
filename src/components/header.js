"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Fuse from "fuse.js";
import { useRouter, usePathname } from "next/navigation";
import { Dropdown, DropdownItem } from "flowbite-react";
import Link from "next/link";
import Image from "next/image"; // ✅ updated (removed legacy import)

function Header() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const toggleDropdown = (dropdownIndex) => {
    setOpenDropdown(openDropdown === dropdownIndex ? null : dropdownIndex);
  };

  const stopPropagation = (e) => e.stopPropagation();

  const links = [
    { href: "/our-company", text: "ABOUT US" },
    { href: "/overview", text: "HVAC OVERVIEW" },
    { href: "/our-quality-service", text: "OUR QUALITY SERVICE" },
    { text: "OUR PROJECTS", href: "/our-projects" },
    { text: "OUR CLIENTS", href: "/our-clients" },
    { href: "/blog", text: "BLOGS" },
    { text: "CONTACT US", href: "/support-form" },
  ];

  const [nestedDropdown, setNestedDropdown] = useState(null);
  const toggleNestedDropdown = (index) => {
    setNestedDropdown(nestedDropdown === index ? null : index);
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pathname = usePathname();
  const [logoSrc, setLogoSrc] = useState(
    "https://res.cloudinary.com/dxenuee4n/image/upload/v1756884652/LOGO_r3gl55.webp"
  );

  // ✅ Logo path logic (kept same)
  useEffect(() => {
    if (pathname) {
      setLogoSrc(
        "https://res.cloudinary.com/dxenuee4n/image/upload/v1756884652/LOGO_r3gl55.webp"
      );
    }
  }, [pathname]);

  const menuItems = [
    { label: "ABOUT US", href: "/our-company" },
    { label: "HVAC OVERVIEW", href: "/overview" },
    { label: "OUR QUALITY SERVICE", href: "/our-quality-service" },
    { label: "OUR PROJECTS", href: "/our-projects" },
    { label: "OUR CLIENTS", href: "/our-clients" },
    { label: "BLOGS", href: "/blog" },
    { label: "CONTACT US", href: "/support-form" },
  ];

  const router = useRouter();
  const handleLinkClick = (href) => {
    closeMobileMenu();
    router.push(href);
  };

  const searchBarRef = useRef(null);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [showSearch, setShowSearch] = useState(false);

  const handleSearch = (e) => {
    const input = e.target.value;
    setQuery(input);
    if (input.trim() === "") setResults([]);
    else {
      const searchResults = fuse.search(input).map((result) => result.item);
      setResults(searchResults);
    }
  };

  const handleSelect = (link) => {
    router.push(link);
    setShowSearch(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchBarRef.current &&
        !searchBarRef.current.contains(event.target)
      ) {
        setShowSearch(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      className={`fixed h-[6.1rem] md:h-[7.5rem] z-20 w-full top-0 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-100 text-black shadow-md"
          : "bg-gradient-to-b from-black text-white"
      }`}
    >
      <div className="md:mx-2 md:px-4">
        <div className="flex lg:flex-row items-center xl:flex-row justify-between p-4">
          {/* ✅ Logo (fixed version) */}
          <div className="flex space-x-4">
            <div className="row flex md:flex-col lg:flex-row">
              <Link href="/">
                <div className="relative w-[150px] h-[60px] my-3">
                  <Image
                    src={logoSrc}
                    alt="Adhunik HVAC Projects Logo"
                    fill
                    sizes="(max-width: 768px) 120px, 150px"
                    className="object-contain"
                    priority
                  />
                </div>
              </Link>
            </div>
          </div>

          {/* ---------------- Rest of your header content (unchanged) ---------------- */}
          <div className="row flex-col lg:flex lg:px-4">
            <div className="col">
              <div className="row text-right flex flex-row justify-end items-center">
                <div className="row flex gap-8 md:gap-0 flex-row md:flex-row justify-center items-center">
                  <div
                    className="hidden lg:block col text-left text-[12px] ps-3"
                    style={{ cursor: "pointer" }}
                  >
                    <a
                      href="/Adhunik-HVAC-PROJECTS.pdf"
                      download="Adhunik-HVAC-PROJECTS"
                      className={`relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group ${
                        isScrolled
                          ? "text-black hover:text-black border-black"
                          : "text-white hover:text-black"
                      }`}
                    >
                      <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-gray-200 opacity-[3%]"></span>
                      <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-2"></span>
                      <span className="text-center relative w-full flex justify-center items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-6 mr-2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                          />
                        </svg>
                        Project Catalogue
                      </span>
                      <span className="absolute inset-0 rounded-full"></span>
                    </a>
                  </div>
                  <hr className="rotate-90 w-10 relative hidden lg:block" />

                  {/* Contact Info — same as before */}
                  {/* ... (keep rest of your contact + nav menu code unchanged) ... */}
                </div>
              </div>

              <div className="flex w-full py-3 items-center rounded-full">
                <div className="flex-1 border-b border-gray-300"></div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="col">
              <div className="hidden xl:flex items-center space-x-1">
                <ul className="flex font-semibold flex-col text-sm p-4 md:p-0 mt-4 border rounded-lg md:space-x-6 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                  {menuItems.map((item, index) => (
                    <li
                      key={index}
                      className="md:px-3 after:content-[''] after:block after:w-full after:h-[3px] after:bg-gradient-to-r after:from-teal-500 after:to-teal-700 after:scale-x-0 after:origin-left after:transition-transform after:duration-250 after:ease-in-out hover:after:scale-x-100"
                    >
                      <Link
                        href={item.href || "#"}
                        onClick={() => handleLinkClick(item.href)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center">
            <button
              className="mobile-menu-button"
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (unchanged) */}
      {/* Keep rest of mobile dropdown & search bar code same */}
    </nav>
  );
}

export default Header;