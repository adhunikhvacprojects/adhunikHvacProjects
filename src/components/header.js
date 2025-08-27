"use client"

import { useCallback, useEffect, useRef, useState } from 'react';

import Fuse from "fuse.js";
import { useRouter } from "next/navigation";

import { Dropdown, DropdownItem } from "flowbite-react";

import Link from 'next/link';

import Image from "next/legacy/image";

import { usePathname } from 'next/navigation';



function Header() {


  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (dropdownIndex) => {
    setOpenDropdown(openDropdown === dropdownIndex ? null : dropdownIndex);
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  const links = [

    { href: '/overview', text: 'Overview' },

    { href: '/our-quality-service', text: 'Our Quality Service' },

    { text: 'Our  Projects', href: '/our-projects' },

    { text: 'Our  Clients', href: '/our-clients'},

    { href: '/blog', text: 'Blogs' },

    { text: 'Contact Us', href: '/support-form' },
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
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pathname = usePathname();
  const [logoSrc, setLogoSrc] = useState('https://res.cloudinary.com/ddkyx2jhh/image/upload/v1755068273/LOGO_s_2_dwogzo.png');
  const [logoSize, setLogoSize] = useState({ width: '150', height: '60' });

  useEffect(() => {
    if (pathname) {
      if (pathname === '/fire&safety'  || pathname === '/glow-signage-&-emergency-lights' || pathname === '/fire-tubing-system' || pathname === '/fire-VESDA-system' ) {
        setLogoSrc('https://res.cloudinary.com/ddkyx2jhh/image/upload/v1755068273/LOGO_s_2_dwogzo.png');
        setLogoSize({ width: '150', height: '60' });

      } else {
        setLogoSrc('https://res.cloudinary.com/ddkyx2jhh/image/upload/v1755068273/LOGO_s_2_dwogzo.png');
        setLogoSize({ width: '150', height: '60' });
      }

    }
  }, [pathname]);


  const menuItems = [
    {
      label: "Overview",
      href: "/overview"
    },
    {
      label: "Our Quality Service",
      href: "/our-quality-service"
    },

    {
      label: "Our Projects",
      href: "/our-projects"
    },

     { label: 'Our  Clients', href: '/our-clients'},
    
    {
      label: "Blogs",
      href: "/blog"
    },

    {
      label: "Contact Us",
      href: "/support-form"
    },
  ];


  const handleLinkClick = (href) => {
    closeMobileMenu();
    router.push(href);
  };


  const searchBarRef = useRef(null);

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const router = useRouter();
  const handleSearch = (e) => {
    const input = e.target.value;
    setQuery(input);

    if (input.trim() === "") {
      setResults([]);
    } else {
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
      if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
        setShowSearch(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (

    <nav className={` fixed   h-[6.1rem] md:h-[7.5rem]  z-20 w-full top-0 transition-all duration-300 ${isScrolled ? " bg-gray-100 text-black shadow-md" : " bg-gradient-to-b from-black  text-white"
      }`}
    >
      <div className=" md:mx-2 md:px-4">

        <div className="flex lg:flex-row items-center xl:flex-row justify-between p-4" >

          <div className="flex space-x-4">
            <div className="row flex  md:flex-col lg:flex-row ">

              <Link href='/'>

                {pathname && (
                  <Image
                    src={logoSrc}
                    width={logoSize.width}
                    height={logoSize.height}
                    alt="Picture"
                    className="md:h-[60px] md:w-auto my-3"
                    style={{ width: `${logoSize.width}px`, height: `${logoSize.height}px` }}

                  />
                )}


              </Link>

            </div>


          </div>


          <div className="row flex-col  lg:flex lg:px-4  ">


            <div className="col">


              <div className="row text-right flex flex-row justify-end items-center">

                <div className="row flex gap-8 md:gap-0   flex-row md:flex-row justify-center items-center">
    <div
                    className=" hidden lg:block col text-left text-[12px] ps-3  "

                    style={{ cursor: 'pointer' }} // Optional styling for pointer and color
                  >


                    <a
                      href="/project-catalogue.pdf"
                      download="project-catalogue"
                      className={`relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group ${isScrolled
                        ? " text-black hover:text-black border-black"
                        : " text-white hover:text-black "
                        }`}
                    >
                      <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-gray-200 opacity-[3%]"></span>
                      <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56  -translate-y-24 bg-white opacity-100 group-hover:-translate-x-2"></span>
                      <span className=" text-center relative w-full flex justify-center items-center   ">
                     <svg   xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 mr-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
                       Project Catalogue
                     

                      </span>
                  

                      <span className="absolute inset-0  rounded-full"></span>
                    </a>

                  </div>
 <hr className='rotate-90 w-10  relative hidden lg:block' />

                  <div className="col pb-2 md:pb-0  ps-5  md:ps-0">

                    <svg onClick={() => window.location.href = "mailto:info@adhunikhvacproject.com"} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>

                  </div>

                  <div
                    className="col text-left text-[12px] ps-3 hidden md:block"
                    onClick={() => window.location.href = "mailto:info@adhunikhvacproject.com"}
                    style={{ cursor: 'pointer' }}
                  >
                    <p className="font-sans font-thin">Drop Us An Email</p>
                    <p>info@adhunikhvacproject.com</p>
                  </div>


                  <hr className='rotate-90 w-10  relative hidden md:block' />

                  <div className="col pb-2 md:pb-0 ">
                   

<svg onClick={() => window.location.href = "tel:9810216907"} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
</svg>

                  </div>

                  <div
                    className="col text-left text-[12px] ps-2 hidden md:block"
                    onClick={() => window.location.href = "tel:9810216907"}
                    style={{ cursor: 'pointer' }}
                  >
                    <p className="font-sans font-thin">Contact Number</p>
                    <p>98xxxxxxxx</p>
                  </div>


                </div>
                <div className="row flex flex-col  md:flex-row">
                  <div className="col flex justify-center items-center">     <i className="px-2 fa-solid fa-magnifying-glass" onClick={() => setShowSearch(!showSearch)}></i>
                  </div>


                </div>


              </div>

              <div className=" flex w-full  py-3 items-center rounded-full">
                <div className="flex-1 border-b border-gray-300"></div>
              </div>


            </div>


            <div className="col">
              <div className="hidden xl:flex items-center space-x-1">

                <ul className="flex   flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:space-x-6 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                  {menuItems.map((item, index) => (
                    <li className=" md:px-3 after:content-[''] after:block after:w-full after:h-[3px] after:bg-gradient-to-r after:from-teal-500 after:to-teal-700 after:scale-x-0   after:origin-left after:transition-transform after:duration-250 after:ease-in-out hover:after:scale-x-100 " key={index}>
                      {item.dropdown ? (


                        <Dropdown label="Projects" inline>

                          <DropdownItem>
                            <Link href='/'>
                          Project 1
                            </Link>
                          </DropdownItem>

                      


                        </Dropdown>


                      ) : (
                        <Link href={item.href || "#"} onClick={() => handleLinkClick(item.href)}>
                          {item.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>

              </div>

            </div>

          </div>



          <div className="xl:hidden flex items-center">
            <button
              className="mobile-menu-button"
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (

                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (

                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>


        </div>
      </div>



      <div className={`mobile-menu xl:hidden  ${isMobileMenuOpen ? 'mobile-menu-open py-2 bg-gray-100 text-black border-teal-300 border-b-[1px]' : 'mobile-menu-closed'}`}>
        {isMobileMenuOpen && links.map((link, index) => (
          <div key={index} className="mx-7 mb-2 border-b-[1px] border-teal-600 ">
            {link.dropdownItems ? (
              <div>
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleDropdown(index)}
                >
                  <Link
                    href={link.to || '/'}
                    className="block py-2 px-4 text-sm hover:bg-gray-200"

                  >
                    {link.text}
                  </Link>
                  <div className="transition-transform duration-300 transform">
                    <svg
                      className={`w-4 h-4 ml-2 ${openDropdown === index ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>

                {openDropdown === index && (
                  <div className="ml-2">
                    {link.dropdownItems.map((dropdownItem, i) => (
                      <div key={i}>
                        {dropdownItem.dropdownItems ? (
                          <div>
                            <div
                              className="flex items-center justify-between cursor-pointer"
                              onClick={() => toggleNestedDropdown(i)}
                            >
                              <Link
                                href={dropdownItem.href || '/'}
                                className="block py-2 px-4 text-sm hover:bg-gray-200"

                              >
                                {dropdownItem.label}
                              </Link>
                              <div className="transition-transform duration-300 transform">
                                <svg
                                  className={`w-4 h-4 ml-2 ${nestedDropdown === i ? 'rotate-180' : ''}`}
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >

                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                  />
                                </svg>
                              </div>
                            </div>

                            {nestedDropdown === i && (
                              <div className="ml-4">
                                {dropdownItem.dropdownItems.map((subItem, j) => (
                                  <Link
                                    key={j}
                                    href={subItem.href || '/'}
                                    className="block py-2 px-4 text-sm hover:bg-gray-200"
                                    onClick={() => handleLinkClick(subItem.href)}
                                  >
                                    {subItem.label}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ) : (
                          <Link
                            href={dropdownItem.href || '/'}
                            className="block py-2 px-4 text-sm hover:bg-gray-200"
                            onClick={() => handleLinkClick(dropdownItem.href)}
                          >
                            {dropdownItem.label}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                href={link.href || '/'}
                className="block py-2 px-4 text-sm hover:bg-gray-200"
                onClick={() => handleLinkClick(link.href)}
              >
                {link.text}
              </Link>
            )}
          </div>
        ))}


      </div>

      <div className="search-bar-container">


        <div className="logo-section">

        </div>


        {showSearch && (
          <div className="search-bar p-5" ref={searchBarRef}>
            <input
              type="text"
              value={query}
              onChange={handleSearch}
              placeholder="Search products..."


              className={`search-input ${isScrolled
                ? " text-black hover:text-black border-black "
                : " text-black hover:text-black "
                }`}
            />
            {results.length > 0 && (
              <ul
                className={`search-results ${isScrolled
                  ? " text-black hover:text-black border-black "
                  : " text-black hover:text-black "
                  }`}

              >
                {results.map((item) => (
                  <li
                    key={item.id}
                    className="search-item"
                    onClick={() => handleSelect(item.link)}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}



      </div>


    </nav>

  );
}

export default Header;


