
'use client';

import Head from 'next/head';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import { lazy, useEffect, useRef, useState } from 'react';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Link from 'next/link';

import { CldImage } from 'next-cloudinary';

export default function HeroPage() {

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);  
    return () => clearInterval(interval);
  }, [currentIndex]);



  const images3 = [
    {
      original: "/awi/cooler.webp",
      thumbnail: "/awi/cooler.webp",
      originalAlt: "HVAC System Image",
      thumbnailAlt: "HVAC System Image",
      originalHeight: 600,
      originalWidth: 600,
      loading: "lazy",
      thumbnailHeight: 150,
      thumbnailWidth: 150,
      thumbnailLoading: "lazy",
    },

    {
      original: "https://res.cloudinary.com/ddkyx2jhh/image/upload/v1738841648/airwasher_n0a5gw.webp",
      thumbnail: "https://res.cloudinary.com/ddkyx2jhh/image/upload/v1738841648/airwasher_n0a5gw.webp",
      originalAlt: "Cooling Equipment Image",
      thumbnailAlt: "Cooling Equipment Image",
      originalHeight: 600,
      originalWidth: 600,
      loading: "lazy",
      thumbnailHeight: 150,
      thumbnailWidth: 150,
      thumbnailLoading: "lazy",
    },
    {
      original: "https://res.cloudinary.com/ddkyx2jhh/image/upload/v1738841648/9_f9bq6x_onl4kf.webp",
      thumbnail: "https://res.cloudinary.com/ddkyx2jhh/image/upload/v1738841648/9_f9bq6x_onl4kf.webp",
      originalAlt: "Cooling Equipment Image",
      thumbnailAlt: "Cooling Equipment Image",
      originalHeight: 600,
      originalWidth: 600,
      loading: "lazy",
      thumbnailHeight: 150,
      thumbnailWidth: 150,
      thumbnailLoading: "lazy",
    },
    {
      original: "https://res.cloudinary.com/ddkyx2jhh/image/upload/v1738841648/8_l2toyp_naoo5o.webp",
      thumbnail: "https://res.cloudinary.com/ddkyx2jhh/image/upload/v1738841648/8_l2toyp_naoo5o.webp",
      originalAlt: "Air Handling Unit Image",
      thumbnailAlt: "Air Handling Unit Image",
      originalHeight: 600,
      originalWidth: 600,
      loading: "lazy",
      thumbnailHeight: 150,
      thumbnailWidth: 150,
      thumbnailLoading: "lazy",
    },
    {
      original: "https://res.cloudinary.com/ddkyx2jhh/image/upload/v1738841647/7_xjguld_hnctpy.webp",
      thumbnail: "https://res.cloudinary.com/ddkyx2jhh/image/upload/v1738841647/7_xjguld_hnctpy.webp",
      originalAlt: "Industrial Air Cooling System Image",
      thumbnailAlt: "Industrial Air Cooling System Image",
      originalHeight: 600,
      originalWidth: 600,
      loading: "lazy",
      thumbnailHeight: 150,
      thumbnailWidth: 150,
      thumbnailLoading: "lazy",
    },
    {
      original: "https://res.cloudinary.com/ddkyx2jhh/image/upload/v1738841647/3_hlacmx_t3cosf.webp",
      thumbnail: "https://res.cloudinary.com/ddkyx2jhh/image/upload/v1738841647/3_hlacmx_t3cosf.webp",
      originalAlt: "Ventilation Fans Image",
      thumbnailAlt: "Ventilation Fans Image",
      originalHeight: 600,
      originalWidth: 600,
      loading: "lazy",
      thumbnailHeight: 150,
      thumbnailWidth: 150,
      thumbnailLoading: "lazy",
    },
    {
      original: "https://res.cloudinary.com/ddkyx2jhh/image/upload/v1738841647/2_pxs9ab_tp70du.webp",
      thumbnail: "https://res.cloudinary.com/ddkyx2jhh/image/upload/v1738841647/2_pxs9ab_tp70du.webp",
      originalAlt: "Panel Air Conditioners Image",
      thumbnailAlt: "Panel Air Conditioners Image",
      originalHeight: 600,
      originalWidth: 600,
      loading: "lazy",
      thumbnailHeight: 150,
      thumbnailWidth: 150,
      thumbnailLoading: "lazy",
    },
    {
      original: "https://res.cloudinary.com/ddkyx2jhh/image/upload/v1738841647/1_vmsg3f_aqwufc.webp",
      thumbnail: "https://res.cloudinary.com/ddkyx2jhh/image/upload/v1738841647/1_vmsg3f_aqwufc.webp",
      originalAlt: "Chiller Oil Water Coolant Image",
      thumbnailAlt: "Chiller Oil Water Coolant Image",
      originalHeight: 600,
      originalWidth: 600,
      loading: "lazy",
      thumbnailHeight: 150,
      thumbnailWidth: 150,
      thumbnailLoading: "lazy",
    },
  ];



  const logos = [
    { src: '/projects/1.webp', alt: 'Asahi-India-Glass-Ltd', width: 176, height: 112 },
    { src: '/projects/2.webp', alt: 'Bajaj', width: 126, height: 100 },
    { src: '/projects/3.webp', alt: 'Bajaj', width: 176, height: 112 },
    { src: '/projects/4.webp', alt: 'Bajaj', width: 176, height: 112 },
    { src: '/projects/5.webp', alt: 'Bajaj', width: 176, height: 112 },
    { src: '/projects/6.webp', alt: 'Bajaj', width: 176, height: 112 },
    { src: '/projects/7.webp', alt: 'Bajaj', width: 176, height: 112 },
    { src: '/projects/8.webp', alt: 'Bajaj', width: 176, height: 112 },
    { src: '/projects/9.webp', alt: 'Bajaj', width: 176, height: 112 },
    { src: '/projects/10.webp', alt: 'Bajaj', width: 176, height: 112 },
    { src: '/projects/10.png', alt: 'Bajaj', width: 176, height: 112 },
    { src: '/projects/101.webp', alt: 'Bajaj', width: 176, height: 112 },
  ];



  const handleButtonClick = (buttonText) => {
    console.log('Button clicked:', buttonText);  
    if (buttonText === 'Request A Quote') {
      window.location.href = '/support-form';  
    }
    else {
      console.log('Please chordo');
      window.location.href = 'tel:8287885885';  
    }
  };

   const slides = [

    {
      id: 1,
      img: 'https://videos.pexels.com/video-files/28750728/12466936_2560_1440_30fps.mp4',
      img2: 'https://videos.pexels.com/video-files/28750728/12466936_2560_1440_30fps.mp4',
     
      alt:"adhunik hvac projects"
    },

    


  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const containerRef = useRef(null);


  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000); // Auto-play every 5 seconds

    return () => clearInterval(slideInterval); // Clean up on unmount
  }, [slides.length]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartPos(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const currentPos = e.clientX;
    const diff = startPos - currentPos;

    // If the user drags left
    if (diff > 50) {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
      setIsDragging(false);
    }

    // If the user drags right
    if (diff < -50) {
      setCurrentSlide((prevSlide) =>
        prevSlide === 0 ? slides.length - 1 : prevSlide - 1
      );
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  const images4 = [

    {

      src: 'https://res.cloudinary.com/ddkyx2jhh/image/upload/v1743493133/india_qejhxm.webp',
      alt: 'India',
      label: 'India',


    }
    ,

    {
      src: 'https://res.cloudinary.com/ddkyx2jhh/image/upload/v1743498724/nepal_mp0pkh.webp',
      alt: 'Nepal',
      label: 'Nepal',

    },

    {
      src: 'https://res.cloudinary.com/ddkyx2jhh/image/upload/v1743494131/bangladesh_rtj40y.webp',
      alt: 'Bangladesh',
      label: 'Bangladesh',

    },
    {
      src: 'https://res.cloudinary.com/ddkyx2jhh/image/upload/v1743499150/uae_wtdhma.webp',
      alt: 'UAE',
      label: 'UAE',

    },
    {
      src: 'https://res.cloudinary.com/ddkyx2jhh/image/upload/v1743499081/saudi_ml8qgc.webp',
      alt: 'Saudi Arab',
      label: 'Saudi Arab',

    },
    {
      src: 'https://res.cloudinary.com/ddkyx2jhh/image/upload/v1743494762/iraq_x29kze.webp',
      alt: 'Iraq',
      label: 'Iraq',

    },

  ];

  const images6 = [
    { src: '/l1.webp', alt: 'pics', width: 120, height: 120 },
    { src: '/l2.webp', alt: 'pics', width: 150, height: 150 }, // Custom size
    { src: '/GEM.webp', alt: 'pics', width: 220, height: 220 },
    { src: '/RL.webp', alt: 'pics', width: 200, height: 100 }, // Custom size
    { src: '/l3.webp', alt: 'pics', width: 120, height: 120 },
    { src: '/NHWC.webp', alt: 'pics', width: 120, height: 120 },
    { src: '/NTIC2.webp', alt: 'pics', width: 120, height: 120 },

  ];

  const images7 = [
    { src: '/l1.webp', alt: 'pics', width: 50, height: 50 },
    { src: '/l2.webp', alt: 'pics', width: 50, height: 50 },
    { src: '/GEM.webp', alt: 'pics', width: 50, height: 50 },
    { src: '/RL.webp', alt: 'pics', width: 50, height: 50 },
    { src: '/l3.webp', alt: 'pics', width: 120, height: 50 },
    { src: '/NHWC.webp', alt: 'pics', width: 119, height: 119 },
    { src: '/NTIC2.webp', alt: 'pics', width: 120, height: 120 },

  ];


  const reviewBoxes = [
    {
      id: "indiamart",
      content: (
        <a
          className="rounded-xl"
          href="https://www.indiamart.com/adhunik-cooling-system-limited/"
          rel="nofollow"
        >
          <img
            src="/indiamartreview.webp"
            width="150"
  height="150"
            loading="lazy"
            alt="4.5 out of 5 indiamart ratings of adhunik powertech"
          />
        </a>
      ),
      classes: "border-2 rounded-xl",
    },

    {
      id: "google-widget",
      content: (
        <a
          className="rounded-xl"
          href="https://www.indiamart.com/adhunik-cooling-system-limited/"
          rel="nofollow"
        >
          <img
            src="/googlereview.webp"
            width="150"
  height="150"
            loading="lazy"
            alt="4.5 out of 5 indiamart ratings of adhunik powertech"
          />
        </a>
      ),
      classes: "border-2 rounded-xl",

    },

    {
      id: "ambitionbox",
      content: (
        <a href="https://www.ambitionbox.com/overview/adhunik-powertech-private-limited-overview?utm_source=employer-dashboard&utm_campaign=adhunik-powertech-private-limited&utm_medium=badges">
          <img
            src="https://employer.ambitionbox.com/api/badge/225936?badge-type=ratings"
            alt="AmbitionBox rating badge"
            loading='lazy'
             width="150"
  height="150"
          />
        </a>
      ),
      classes: "border-2 rounded-xl",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviewBoxes.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviewBoxes.length - 1 : prevIndex - 1
    );
  };


  const [imageSizes, setImageSizes] = useState({});

  const handleImageLoad = (index, event) => {
    const { naturalWidth, naturalHeight } = event.target;
    setImageSizes((prev) => ({
      ...prev,
      [index]: { width: naturalWidth, height: naturalHeight },
    }));
  };




  const products = [
    {
      src: "awb_y87hai_edmbck",
      alt: "Air Washer",
      title: "Air Washer",
      content: "Elevate your well-being with our air washers for cleaner, cooler, and fresher air!",
      link: "/air-washer",
      linkText: " Explore More",

    },
    {
      src: "ductedaircooler_tgibhs",
      alt: "Ducted Air Coolers",
      title: "Ducted Air Coolers",
      content: "Experience the flexibility of our ducted air coolers, which offer optimal cooling solutions tailored to any space.",
      link: "/ducted-air-cooler",
      linkText: "Explore More",
    },

    {
      src: "ventilationfan_ey4ush",
      alt: "Ventlilation Exhaust Fan",
      title: "Ventlilation Exhaust Fan",
      content: " Transform your indoor environment with our powerful ventilation fans, ensuring superior air quality and unmatched comfort. ",
      link: "/ventilation-fans",
      linkText: "Explore More",
    },
    // Add more items if needed
  ];

  const products2 = [
    {
      src: "panel_bgfupm",
      alt: "PANEL AIR CONDITIONER",
      title: "PANEL AIR CONDITIONER",
      content: " Protect your valuable equipment from overheating with our wide range of panel air conditioners. ",
      link: "/panel-air-conditioners",
      linkText: "Explore More",
    },

    {
      src: "OC__koeafw",
      alt: "OIL AND COOLANT CHILLER UNIT",
      title: "OIL AND COOLANT CHILLER ",
      content: "Maximize the performance of your machinery and enhance its lifespan with our advanced oil chillers.",
      link: "/chiller-oil-water-coolant",
      linkText: "Explore More",
    },

    {
      src: "https://res.cloudinary.com/ddkyx2jhh/image/upload/v1738750082/Air_Shower2__of10ut.webp",
      alt: "AIR SHOWER",
      title: "AIR SHOWER",
      content: "Ensure the safety of your workspace and personnel from contamination with our efficient air showers.",
      link: "/air-shower",
      linkText: "Explore More",
    },
    {
      src: "AHU1_lab7sl_ccwn9d",
      alt: "Air Handling Unit",
      title: "Air Handling Unit",
      content: "Experience unparalleled air quality, precise temperature control, and exceptional energy efficiency with our advanced air handling unit.",
      link: "/air-handling-unit",
      linkText: "Explore More",
    },
    // Add more items if needed
  ];


 
  const paragraphs = [
    <>

      Adhunik Powertech Private Limited delivers high-quality, personalized HVAC services  across  <strong>Delhi, Gurugram, Noida, Faridabad, Ghaziabad, Sonipat, Greater Noida, Meerut, Rohtak, Muzaffarnagar, Jaipur, Chandigarh, and the entire NCR </strong> region, as well as executing turnkey HVAC projects pan-India. With over 19 years of industry expertise, we exceed client expectations by providing comprehensive solutions from expert HVAC consulting and design, encompassing Engineering and Procurement, to detailed engineering focusing on energy-efficient and cost-effective cooling systems with minimal maintenance for industrial, institutional, commercial, and residential projects. <br />


      Our commitment extends to meticulous HVAC project execution , adhering to  <strong>NBC, CPWD, NABH</strong> guidelines, and following  <strong>ISHRAE, ASHRAE, and ISO</strong> standards, ensuring safety, precise measurements, and stringent precautions throughout the project. We specialize in turnkey HVAC projects, offering tailored solutions that prioritize efficiency and client satisfaction, both regionally and nationally.
      
    </>
  ];

 


  
  const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "additionalType": "http://schema.org/Manufacturer",
      "@id": "https://adhunikpowertech.com/#organization",
      "name": "Adhunik Powertech Private Limited",
      "url": "https://adhunikpowertech.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.adhunikpowertech.com/we.svg",
        "caption": "Adhunik Powertech Private Limited Logo"
      },
      "description": "Founded in 2005, Adhunik Powertech Private Limited is a leading Indian manufacturer and global provider of comprehensive HVAC solutions. We specialize in designing, manufacturing, and installing energy-efficient cooling, ventilation, and fire safety systems for industrial, commercial, and residential clients.",
      "foundingDate": "2005-09-22",
      "founder": {
        "@type": "Person",
        "name": "Sanjay Chauhan"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "DCG1-0102, Tower-1, DLF CORPORATE GREENS, Sector 74A",
        "addressLocality": "Gurugram",
        "addressRegion": "Haryana",
        "postalCode": "122004",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "8287885885",
        "contactType": "Customer Service",
        "areaServed": "IN",
        "availableLanguage": "en"
      },
      "sameAs": [
        "https://www.facebook.com/adhunikpowertech",
        "https://www.instagram.com/adhunikpowertech/",
        "https://x.com/AdhunikCooling",
        "https://www.linkedin.com/company/adhunikpowertech/"
      ],
      "award": [
        "Most Innovative Brand for HVAC Projects 2024-25",
        "India Business Award 2025",
        "Award for Best Quality Standards & Services in HVAC Industry"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Product Catalog",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Air Washer" } },
          { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Ducted Air Coolers" } },
          { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Ventilation & Exhaust Fans" } },
          { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Panel Air Conditioner" } },
          { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Oil and Coolant Chiller" } },
          { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Air Shower" } },
          { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Air Handling Unit (AHU)" } }
        ]
      }
    },
    {
      "@type": "HVACBusiness",
      "@id": "https://adhunikpowertech.com/#localbusiness",
      "name": "Adhunik Powertech Private Limited",
      "image": "https://www.adhunikpowertech.com/we.svg",
      "url": "https://adhunikpowertech.com/",
      "telephone": "8287885885",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "DCG1-0102, Tower-1, DLF CORPORATE GREENS, Sector 74A",
        "addressLocality": "Gurugram",
        "addressRegion": "Haryana",
        "postalCode": "122004",
        "addressCountry": "IN"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
          "opens": "09:00",
          "closes": "18:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Sunday",
          "opens": "00:00",
          "closes": "00:00"
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.6",
        "ratingCount": "85"
      },
      "makesOffer": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "HVAC Contracting Services" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "HVAC Design and Consultation" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Professional HVAC Installation" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "HVAC Repair and Maintenance" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Industrial HVAC Solutions" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Energy-Efficient HVAC Upgrades" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Indoor Air Quality Solutions" } }
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://adhunikpowertech.com/#website",
      "url": "https://adhunikpowertech.com/",
      "name": "Adhunik Powertech",
      "publisher": { "@id": "https://adhunikpowertech.com/#organization" },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://adhunikpowertech.com/?s={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      },
      "inLanguage": "en-IN"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.adhunikpowertech.com/our-Company",
      "url": "https://www.adhunikpowertech.com/our-Company",
      "name": "About Us - HVAC & Manufacturing Experts in Gurugram - Adhunik Powertech",
      "isPartOf": { "@id": "https://adhunikpowertech.com/#website" },
      "about": { "@id": "https://adhunikpowertech.com/#organization" },
      "inLanguage": "en-IN"
    },
	{
      "@type": "WebPage",
      "@id": "https://www.adhunikpowertech.com/product-overview",
      "url": "https://www.adhunikpowertech.com/product-overview",
      "name": "HVAC & Industrial Cooling Products India | Global - Adhunik Powertech",
      "isPartOf": { "@id": "https://adhunikpowertech.com/#website" },
      "inLanguage": "en-IN"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.adhunikpowertech.com/top-HVAC-Contractor-in-Delhi-NCR-&-India",
      "url": "https://www.adhunikpowertech.com/top-HVAC-Contractor-in-Delhi-NCR-&-India",
      "name": "Top HVAC Contractor in Delhi NCR & India - Adhunik Powertech",
	  "description": "Adhunik Powertech is a trusted HVAC contractor in Delhi NCR and across India, offering expert services in HVAC design, installation, repair, and maintenance for industrial and commercial clients.",
      "isPartOf": { "@id": "https://adhunikpowertech.com/#website" },
      "inLanguage": "en-IN"
    }
  ]
};
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta charSet="UTF-8" />

        <link rel="icon" type="image/svg+xml" href="/d.svg" />
        <meta name="application-name" content="Adhunik Powertech" />
        <meta name="google-site-verification" content="ZZcgUmCTYjVHPEYAV2XPTWfgp_PXc7M2GOEgeg6kYW0" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Adhunik Powertech" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta httpEquiv="X-UA-Compatible" content="IE=EmulateIE7" />
        <meta name="twitter:site" content="@adhunikpowertech" />
        <meta name="twitter:image" content="https://adhunikpowertech.com/img/logo.png" />
        <meta name="twitter:image:alt" content="Adhunik Powertech" />
        <meta property="og:image" content="https://adhunikpowertech.com/img/logo.png" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1"></meta>
        <meta name="bingbot" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1"></meta>
        <meta name="author" content="Adhunik Powertech"></meta>
        <meta httpEquiv="Accept-CH" content="DPR, Viewport-Width, Width, Save-Data" />
        <meta property="og:title" content="Top & Best HVAC Companies in India - Adhunik Powertech" />
        <meta name="twitter:title" content="Top & Best HVAC Companies in India - Adhunik Powertech" />
        <meta name="twitter:description" content="Searching for the top HVAC companies in India? Adhunik Powertech, Delhi's trusted HVAC contractor, manufacturer & supplier, offers expert cooling solutions across India. Contact us now & Get a Free Quote!" />
        <meta name="keywords" content="HVAC solutions, industrial cooling, air washers, air handling units, ventilation systems, energy-efficient cooling, Adhunik Powertech" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://adhunikpowertech.com/" />
        <meta property="og:site_name" content="Adhunik Powertech" />
        <meta name="twitter:card" content="summary" />

      </Head>

      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

 


      <div className="row   h-auto w-full relative font-sans" >


           <div
          className="relative w-full h-screen overflow-hidden"
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
            >
              <div

                className="w-full h-full object-cover"
                style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}

              >

                     <video

                autoPlay
                loop
                muted
                poster="/mv2.webp"
                playsInline
                type="video/mp4"
                className="w-full h-full object-cover"
                style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }}

              >
                <source src={slide.img} type="video/mp4" />

                {slide.alt}

              </video>

                
              </div>


              <div className="  flex items-center h-screen bg-black bg-opacity-40">


              </div>


            </div>
          ))}


          <div className="absolute bottom-4 z-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-5 h-1 rounded-sm ${index === currentSlide ? 'bg-[#FC6C1E]' : 'bg-gray-400'}`}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === currentSlide ? "true" : undefined}
              />
            ))}
          </div>


        </div>



 


        <div className="row mt-7">

          <section className="bg-white ">

            <div className=" gap-7 md:gap-16   items-center flex  flex-wrap-reverse pt-0 mt-0 py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2  lg:px-6">

              <div className="font-light text-gray-700 text-[15px]  md:text-[16px] text-center md:text-left">

                <h1 className="mb-4 text-[20px] md:text-3xl  font-bold  text-gray-800 ">

                  Adhunik Powertech: 19+ Years of HVAC Excellence – Contact Us Today!

                </h1>


                <p className="mb-2 text-justify  font-light font-sans  ">
                  Founded in 2005, Adhunik Powertech has established itself as a leader in the HVAC industry. We deliver innovative and efficient solutions, driven by our strong commitment to quality, reliability, and exceptional customer satisfaction.

                  We are proud to receive the <strong>India Business Award 2025</strong>  for the  <strong>  Best Quality Standards and Services in the HVAC Industry.</strong>

                </p>

                <p className=' mb-2 text-justify  font-light font-sans'>
                  Our extensive range of <strong>
                    air cooling and air conditioning products
                  </strong>  meets various needs, catering to commercial and industrial environments. We focus on comfort and energy efficiency in every solution. Additionally, our comprehensive <strong>HVAC project services —including design, installation, and maintenance</strong>—ensure that our clients receive the best possible support from start to finish.


                </p>

                <p className=' pb-8 text-justify  font-light font-sans'>

                  Experience the  <strong>Adhunik Difference and Explore Our Solutions Today!</strong>

                </p>

                <Link
                  aria-label="Learn more about HVAC solutions and air cooling systems"
                  title="Learn more about HVAC solutions and air cooling systems"

                  href='/our-Company'
                  className=' bg-[#0177C8] font-normal font-sans relative text-white text-[14px] px-4 py-3 md:px-12 md:py-4 rounded-full  uppercase'>
                  Know More About Us
                </Link>

              </div>

              <div className="  flex justify-center w-full h-full   ">

                <CldImage
                  className="w-full h-full object-center   object-cover rounded-3xl"
                  src="https://res.cloudinary.com/ddkyx2jhh/image/upload/v1743500674/indiaawards_k0es0f.webp"
                  alt="Adhunik Powertech Private Limited has been honored with the India Business Award 2025 Presented by Actress Bipasha Basu"
                  width="600"
                  height="960"
                />

              </div>
            </div>

          </section>

        </div>


        <div className="inline-flex items-center justify-center w-full mx-auto mt-4 my-3">
          <hr className="w-[90%] h-px my-8 bg-gray-300 border-0 " />
          <h2 className="absolute px-3  text-gray-700 -translate-x-1/2 bg-white left-1/2  text-lg   text-center  md:text-3xl text-1xl capitalize font-extrabold font-sans" >Our Projects </h2>
        </div>

        <section className="row ">
          <div className="col">
            <div className="  justify-center">
              <div className="row">
                <div className="col py-4">
                  <div className="items-center justify-center h-full">
                    <div className=' flex-row flex  flex-wrap justify-center items-center gap-3'>
                      {products.map((item, index) => (
                        <div key={index} className="  md:w-[30%]  w-80">
                          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-xl">
                            <div className="w-auto">
                              <div className="w-full object-cover transition-transform duration-500 group-hover:scale-125 rounded-xl">
                                <CldImage
                                  width="960"
                                  height="600"
                                  src={item.src}
                                  sizes="100vw"
                                  alt={item.alt}
                                  fetchPriority="high"
                                  decoding="async"
                                  className="h-96 w-full object-center object-contain"
                                  effect="blur"
                                />
                              </div>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                            <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                              <h2 className="font-sans font-normal text-[18px] uppercase text-white">
                                {item.title}
                              </h2>
                              <p className="mb-3 pt-2 text-[12px] italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                {item.content}
                              </p>
                              <Link
                                href={item.link}
                                className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"
                              >
                                {item.linkText}
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>


                <div className="col py-4">
                  <div className="items-center justify-center h-full">
                    <div className=' flex-row flex-wrap flex justify-center items-center gap-3'>
                      {products2.map((item, index) => (
                        <div key={index} className="   w-80">
                          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-xl">
                            <div className="w-auto">
                              <div className="w-full object-cover transition-transform duration-500 group-hover:scale-125 rounded-xl">

                                <CldImage
                                  width="960"
                                  height="600"
                                  src={item.src} // Assuming item.src contains the Cloudinary public ID
                                  sizes="100vw"
                                  alt={item.alt} // Assuming item.alt contains the alt description
                                  fetchPriority="high"
                                  decoding="async"
                                  className="h-96 w-full object-center object-fill"
                                  effect="blur"
                                />
                              </div>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                            <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                              <h2 className="font-sans  font-normal text-[16px]   uppercase  text-white">
                                {item.title}
                              </h2>
                              <p className="mb-3 pt-2 text-[12px] italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                {item.content}
                              </p>
                              <Link
                                href={item.link}
                                className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"
                              >
                                {item.linkText}
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>


            </div>






          </div>
        </section>

        <div className="inline-flex items-center justify-center w-full mx-auto my-4">
          <hr className="w-[90%] h-px my-8 bg-gray-300 border-0 " />
          <h2 className="absolute px-2 md:px-3  text-gray-700 -translate-x-1/2 bg-white left-1/2  text-center text-[20px]  md:text-3xl text-1xl capitalize font-extrabold font-sans"> Serving WorldWide
          </h2>
        </div>


        <div className="row flex flex-col md:flex-row ">
          <div className="col w-full md:w-6/12">
            <div className="row">

              <div className="bg-white   ">
                <div className="mx-auto  max-w-screen-md px-4 md:px-8">

                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8 ">
                    {images4.map((image, index) => (

                      <div key={index}

                        className={`group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg ${index === 0 || index === 3 || index == 4 ? 'md:col-span-2' : ''} md:h-44`}
                      >
                        <Image
                          src={image.src}
                          width={600}
                          height={600}
                          alt={image.alt}
                          loading='lazy'
                          className="absolute h-full inset-0  object-cover object-center transition duration-200 group-hover:scale-110"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                        <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                          {image.label}
                        </span>
                      </div>

                    ))}
                  </div>
                </div>
              </div>


            </div>
          </div>
          <div className="col w-full md:w-6/12 items-center justify-center flex  my-auto mx-auto">

            <section className="bg-white ">

              <div className=" md:p-9 py-8 px-5 ">
                <div className="font-light text-gray-700 text-[15px]  md:text-[16px] text-center ">
                  <h2 className="mb-4 text-[20px] md:text-3xl  font-bold  text-gray-700 ">

                    From the Heart of India to  the Far  Corners of the World  <span className='  text-[10px] lg:text-[18px] '> </span>
                  </h2>
                  <p className="mb-3 text-[12px]  text-justify  lg:text-[14px] font-sans font-light">
                    At Adhunik Powertech, we believe everyone deserves the comfort and efficiency of reliable cooling solutions. That's why we're dedicated to delivering our innovative air conditioning and air cooling products to customers across the globe.


                  </p>
                  <p className=' mb-4 text-[12px] lg:text-[14px] text-justify font-sans font-light'>
                    Our <strong>global reach</strong>  extends far beyond the borders of our home country, <strong>India</strong> . We've established a strong presence in diverse regions, from the bustling metropolises of <strong>Asia</strong> to the high-rise buildings of the  <strong>Middle East</strong>. No matter where you are, we're here to provide you with the cooling solutions you need.


                  </p>

                  <p className=' text-[12px] lg:text-[14px] text-justify  font-sans font-light'>When you choose Adhunik Powertech, you're choosing a company dedicated to providing innovative, reliable, and sustainable cooling solutions. Our focus on quality, customer satisfaction, and global reach sets us apart as a leading provider in the industry.</p>


                </div>
                <div className="container flex  justify-center pt-3">
                  <Link aria-label=" learn more about HVAC Solutions and Air Cooling Systems product page" href='/product-overview' className=' bg-[#0177C8] relative text-white text-[14px] px-4 py-3 md:px-12 md:py-4 rounded-full  uppercase font-normal  font-sans'>
                    Product Overview
                  </Link>
                </div>


              </div>
            </section>

          </div>


        </div>

        <div className="row">


          <div className="inline-flex items-center justify-center w-full mx-auto my-4">

          </div>



          <section className="relative   py-20  bg-body overflow-hidden bg-black text-white">
            <div className="relative container mx-auto px-4">

              <div className="absolute top-0 right-0 -mr-52 -mt-64 w-186 h-186 bg-gradient-to-t from-purple-600 via-darkBlue-900 rounded-full filter blur-4xl"></div>
              <div className="relative  h-full w-full mx-auto lg:mx-0 mb-7 text-center">
                <h2 className="font-heading text-4xl font-medium  tracking-tight mb-6">Our Quality Services</h2>
                <p className="  text-gray-400 tracking-tight capitalize">
                  <span className='  text-center '> we offer high-quality, personalized services that ensure a  great experience and <br /> exceed your expectations.</span>
                </p>
              </div>


              <div className="relative max-w-md lg:max-w-none mx-auto">
                <div className="flex flex-wrap -mx-4 text-center md:text-left">
                  {[
                    {
                      icon: 'cad__bvhdns',
                      title: 'Consultancy & Design',
                      content: 'Adhunik Powertech provides (Engineering, Procurement, and Construction) HVAC Solutions to clients of various industries, executing turnkey HVAC Projects all over India.',
                    },
                    {
                      icon: 'de__xjfjdj',
                      title: 'Detailed Engineering',
                      content: "We have over 19+ years of experience in the HVAC Industry. Our focus while system designing & selection is to provide energy-efficient & cost-effective cooling solutions with near 'zero' maintenance that is for large industrial, institutional, commercial as well as residential premises"
                    },
                    {
                      icon: 'Project_Exe_mptvqx',
                      title: 'Project Execution',
                      content: " We execute all the projects under NBC, CPWD & NABH guidelines. We also follow ISHRAE, ASHRAE & ISO Standards. We are committed to safety, measurement & precautions during the execution of the work."
                    },
                  ].map((service, index) => (
                    <div key={index} className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
                      <div
                        className="group block h-auto xl:h-128 p-8 border-2 border-white border-opacity-10 hover:border-opacity-200 rounded-3xl transition duration-200 cursor-pointer"

                      >
                        <div className="flex h-full flex-col items-start">
                          <div className="flex w-full mb-12 items-center justify-between">

                            <CldImage
                              width="960"
                              height="400"
                              src={service.icon}
                              className="block w-full rounded-lg h-52 object-cover object-center"
                              alt="services"
                              fetchPriority="high"
                              decoding="async"
                            />

                          </div>
                          <div className="mt-auto ">
                            <h2 className="text-3xl sm:text-4xl mb-2 font-medium  group-hover:text-cyan-500">{service.title}</h2>
                            <p className="text-gray-400 tracking-tight leading-5  ">{service.content}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>


            </div>
          </section>


        </div>

        <section className="pb-24 pt-14 relative">

          <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
            <div className="w-full flex flex-col-reverse lg:flex-row justify-start items-center gap-12">

              <div className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
                <div className="   flex-col gap-5 items-center md:items-end  pt-24 lg:justify-center sm:justify-end justify-start   flex">
                  <Image
                    width={300}
                    height={200}
                    className="rounded-xl  object-cover  "
                    src="/tophvac2.webp"
                    alt="about Us image"
                    loading='lazy'
                  />

                </div>
                <div className="flex-col flex gap-5">
                  <Image
                    width={300}
                    height={200}
                    className="sm:ml-0 ml-auto rounded-xl object-cover "
                    src="/tophvac1.webp"
                    alt="about Us image"
                    loading='lazy'
                  />
                </div>

              </div>


              <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex transition-colors duration-500 ease-in-out hover:border-cyan-500 border-2 border-gray-300 rounded-xl px-6  py-6">
                <div className="w-full flex-col justify-center items-start gap-8 flex">
                  <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                    <h2 className="text-gray-700 text-xl font-semibold font-manrope w-full leading-normal  text-center">
                      Top HVAC Services in Delhi NCR & India : Design, Engineering, Installation
                    </h2>
                    <div className=" text-base  leading-relaxed   space-y-4">
                      {paragraphs.map((paragraph, index) => (
                        <p className="font-sans  text-sm font-thin  text-justify " key={index}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </section>

        <div className="row">
          <div className="inline-flex items-center justify-center w-full mx-auto my-4">
            <hr className="w-[90%] h-px my-8 bg-gray-300 border-0 " />
            <h2 className="absolute px-3  text-gray-700 -translate-x-1/2 bg-white left-1/2   md:text-3xl   capitalize font-bold text-center font-sans">Our Premier Product Selection</h2>
          </div>

          <div className="row flex flex-row flex-wrap-reverse  mb-3 justify-evenly items-center">
            <div className=" w-full h-full md:w-5/12 px-3">

              <h2 className=" font-manrope uppercase  font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600 text-2xl lg:text-4xl text-black mb-9 max-lg:text-center relative ">
Our Product Range 
                </h2>

              <p className="font-light font-sans text-justify text-[16px] leading-8 text-gray-500   max-w-2xl mx-auto">
                We pride ourselves on offering a <strong>diverse and innovative product range</strong> designed to meet the specific needs of our clients across various industries. Our portfolio includes high-quality, cutting-edge solutions that are engineered for  <strong>performance, durability, and efficiency.</strong> Whether you require advanced HVAC systems, specialized ducting, or customized components, our products are meticulously crafted to deliver exceptional results, ensuring that every project is executed to the highest standards.
              </p>
            </div>

            <div className=" w-full h-full md:w-5/12 my-5  ">
              <ImageGallery items={images3} className="rounded-lg " />
            </div>
          </div>

        </div>


        <div className="inline-flex  py-6 items-center justify-center w-full mx-auto my-4 mt-8">
          <hr className="w-[90%] h-px  bg-gray-300 border-0 " />
          <h2 className="absolute px-5 text-gray-700  -translate-x-1/2 bg-white left-1/2   md:text-3xl text-1xl capitalize font-extrabold   text-center font-sans">Member of</h2>
        </div>

        <div className="row  hidden md:block">

          <section className=' '>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mb-4 text-center">
                <h2 className="text-2xl  text-center font-medium"></h2>
              </div>

              <div className="   grid justify-center gap-14  sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 xl:flex">
                {images6.map((image, index) => (
                  <div key={index} className="flex items-center  justify-center">
                    <Image src={image.src} width={image.width} height={image.height} alt={image.alt} loading='lazy' />
                  </div>
                ))}
              </div>

            </div>
          </section>

        </div>


        <div className="row">
          <div className="relative w-full max-w-xl mx-auto block md:hidden">
            <div className="overflow-hidden">


              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {images7.map((image, index) => (
                  <div
                    key={index}
                    className="min-w-full flex justify-center items-center"

                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      className="w-auto h-auto object-contain"
                      loading='lazy'
                      width={300}
                      height={300}
                    />
                  </div>
                ))}
              </div>

            </div>

            <button
              onClick={handlePrev}
              className="absolute top-1/2 left-2 transform -translate-y-1/2   text-black px-3 py-2 rounded-lg"
            >
              &#8249;
            </button>

            <button
              onClick={handleNext}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-transparent text-black px-3 py-2 rounded-lg"
            >
              &#8250;
            </button>
          </div>
        </div>


        <div className="row  py-6">
          <div className="  inline-flex mb-4  items-center justify-center w-full mx-auto mt-3 ">

            <hr className="w-[90%] h-px my-8 bg-gray-300 border-0  " />

            <h2 className="absolute   px-3  text-gray-700 -translate-x-1/2 bg-white left-1/2  md:text-3xl text-1xl capitalize font-extrabold text-center font-sans" > Proudly We Serve
            </h2>

          </div>

          <div className="w-full py-5 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            {[...Array(2)].map((_, index) => (
              <ul
                key={index}
                className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
                aria-hidden={index === 1 ? 'true' : 'false'}
              >
                {logos.map((image, index) => (
                  <li key={index}>
                    <Image loading='lazy' src={image.src} width={image.width} height={image.height} alt={image.alt} />
                  </li>
                ))}
              </ul>
            ))}

          </div>

          <div className="  inline-flex mb-4  items-center justify-center w-full mx-auto mt-3 ">

            <hr className="w-[90%] h-px my-8 bg-gray-300 border-0  " />

            <h2 className="absolute   px-3  text-gray-700 -translate-x-1/2 bg-white left-1/2  md:text-3xl text-1xl capitalize font-extrabold text-center font-sans" > Ratings from Leading Platforms

            </h2>

          </div>







          <section className="hidden md:flex flex-col px-4 flex-wrap md:flex-row justify-evenly items-center gap-9 pt-6">
            <div className="box w-fit md:w-4/12 lg:w-2/12 border-2 rounded-xl">
              <a
                className="rounded-xl"
                href="https://www.indiamart.com/adhunik-cooling-system-limited/"
                rel="nofollow"
              >
                <img
                  src="/indiamartreview.webp"
                        width="300"
  height="300"
                  loading="lazy"
                  alt="4.5 out of 5 indiamart ratings of adhunik powertech"
                />
              </a>
            </div>

            <div className="box w-fit md:w-4/12 lg:w-2/12 border-2 rounded-xl">

              <Link href="https://g.page/r/CdkchWQZZnQmEBE/review">
                <img
                  src="/googlereview.webp"
                        width="300"
  height="300"
                  loading="lazy"
                  alt="4.5 out of 5 Google ratings of adhunik powertech has 84 good reviews"
                />
              </Link>

            </div>

            <div className="box w-fit md:w-4/12 lg:w-2/12 border-2 rounded-xl">
              <a href="https://www.ambitionbox.com/overview/adhunik-powertech-private-limited-overview?utm_source=employer-dashboard&utm_campaign=adhunik-powertech-private-limited&utm_medium=badges">
                <img
                  src="https://employer.ambitionbox.com/api/badge/225936?badge-type=ratings"
                  alt="image"
                  loading='lazy'
                     width="300"
  height="300"
                />
              </a>
            </div>
          </section>



          <div className="row">
            <div className="relative w-full max-w-xl mx-auto block md:hidden">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {reviewBoxes.map((item) => (
                    <div
                      key={item.id}
                      className="min-w-full flex justify-center px-4 mt-4 items-center"
                    >
                      <div className={`box w-fit md:w-4/12 lg:w-2/12 ${item.classes}`}>
                        {item.content}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={handlePrev}
                className="absolute top-1/2 left-2 transform -translate-y-1/2  text-black px-3 py-2 rounded-lg"
              >
                &#8249;
              </button>

              <button
                onClick={handleNext}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-transparent text-black px-3 py-2 rounded-lg"
              >
                &#8250;
              </button>
            </div>
          </div>



        </div>

      </div>

    </>
  )
}
