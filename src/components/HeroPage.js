'use client';

import Head from 'next/head';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import { lazy, useEffect, useRef, useState } from 'react';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Link from 'next/link';

import {
  Clock,
  Briefcase,
  Award,
  HeartHandshake,
  ArrowRight
} from 'lucide-react';


import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
// Although no icons are in the reference image, lucide-react is ready to be used.
// For example, you could add <Award className="inline-block mr-2" />
 

export default function HeroPage() {

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);  
    return () => clearInterval(interval);
  }, [currentIndex]);

 
  const logos = [
    { src: 'https://res.cloudinary.com/dxenuee4n/image/upload/v1761904267/asi_hyno6j.webp', alt: 'Asahi-India-Glass-Ltd', width: 176, height: 112 },
    { src: 'https://res.cloudinary.com/dxenuee4n/image/upload/v1761904271/bkt_fipeo0.webp', alt: 'BKT', width: 126, height: 100 },
    { src: 'https://res.cloudinary.com/dxenuee4n/image/upload/v1761904274/brookfield_zb2pya.webp', alt: 'BROOKFIELD', width: 176, height: 112 },
    { src: 'https://res.cloudinary.com/dxenuee4n/image/upload/v1761904288/hero_e0ydrr.webp', alt: 'HERO', width: 176, height: 112 },
    { src: 'https://res.cloudinary.com/dxenuee4n/image/upload/v1761904293/maruti_suzuki_j0ao2b.webp', alt: 'MARUTI SUZUKI', width: 176, height: 112 },
    { src: 'https://res.cloudinary.com/dxenuee4n/image/upload/v1761904303/signature_global_g28iao.webp', alt: 'SIGNATURE GLOBAL ', width: 176, height: 112 },
    { src: 'https://res.cloudinary.com/dxenuee4n/image/upload/v1761904297/NFC_evfwv1.webp', alt: 'NFC', width: 176, height: 112 },
    { src: 'https://res.cloudinary.com/dxenuee4n/image/upload/v1761904299/positron_jmh9tw.webp', alt: 'POSITRON', width: 176, height: 112 },
    { src: 'https://res.cloudinary.com/dxenuee4n/image/upload/v1761904305/Zomato_hsl6wy.webp', alt: 'ZOMATO', width: 176, height: 112 },
    { src: 'https://res.cloudinary.com/dxenuee4n/image/upload/v1761904269/Bhilai_ax9dny.webp', alt: 'BHILAI STEEL PLANT', width: 176, height: 112 },
    { src: 'https://res.cloudinary.com/dxenuee4n/image/upload/v1761904277/Godrej_tmodoz.webp', alt: 'GODREZ', width: 176, height: 112 },
    { src: 'https://res.cloudinary.com/dxenuee4n/image/upload/v1761904257/aarvy_i8wtib.webp', alt: 'AARVY HEALTHCARE', width: 176, height: 112 },
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
      video: 'https://res.cloudinary.com/dxenuee4n/video/upload/v1759916191/Home_Page_v1_gmslhl_i7mrbq.mp4',
      title: 'WELCOME TO ADHUNIK HVAC PROJECTS',
      content: 'We are technically very competent to design any kind of project where conditions are different from nominal.',
      buttonText: 'Request A Quote',
      descriptivetext: "We are technically very competent to design any kind of project where conditions are different from nominal."

    }
    ,

    {
      id: 2,
      video: 'https://res.cloudinary.com/dxenuee4n/video/upload/v1759924308/Home_Page_v2_suqvdg_hwfgvg.mp4',
      title: 'Air Cooling & Air Conditioning System',
      content: <>
        Installation, Service, Repair &amp; Maintenance
        <br />
        24x7 Service Available
      </>,
      buttonText: 'CALL US NOW',
      descriptivetext: "Air Cooling & Air Conditioning System"

    },

    {
      id: 3,
      video: 'https://res.cloudinary.com/dxenuee4n/video/upload/v1759924372/Home_Page_v3_zaxdfb_rmqbaa.mp4',
      title: 'Add Peace Of Mind',
      content: <>We offer a team of Experienced Engineers to take care of your products. Just in case there is  trouble, all you need to call our customer support center and we will take care of your worries.</>,
      buttonText: 'CALL US NOW',
      descriptivetext: "We offer a team of Experienced Engineers to take care of your products. Just in case there is  trouble, all you need to call our customer support center and we will take care of your worries."

    },

    {
      id: 4,
      video: 'https://res.cloudinary.com/dxenuee4n/video/upload/v1759924504/Home_Page_v4_mmlhja_iubggd.mp4',
      title: 'Commercial, Residential & Office Space',
      content: "With our complete HVAC solutions, you will feel superior comfort while enjoying the perfect air conditioning environment.",
      buttonText: 'Request A Quote',
      descriptivetext: "With our complete HVAC solutions, you will feel superior comfort while enjoying the perfect air conditioning environment."

    },

    {
      id: 5,
      video: 'https://res.cloudinary.com/dxenuee4n/video/upload/v1759924466/Home_Page_v5_uxnb0e_ajp7pj.mp4',
      title: 'Hospital, Pharma & Food Industry',
      content: "We help your healthcare team maintain a comfortable temperature and a safe environment with our customized heating and cooling solutions.",
      buttonText: 'Request A Quote',
      descriptivetext: "We help your healthcare team maintain a comfortable temperature and a safe environment with our customized heating and cooling solutions."

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

 
  const images6 = [
    { src: 'https://res.cloudinary.com/dxenuee4n/image/upload/v1761903937/ASHRAE_fnhqtx.webp', alt: 'ASHRAE logo, representing the American Society of Heating, Refrigerating and Air-Conditioning Engineers standards', width: 120, height: 120 },
    { src: 'https://res.cloudinary.com/dxenuee4n/image/upload/v1761903943/ISHRAE_irowe3.webp', alt: 'ISHRAE logo for the Indian Society of Heating, Refrigerating & Air Conditioning Engineers affiliation', width: 150, height: 150 }, // Custom size
    { src: 'https://res.cloudinary.com/dxenuee4n/image/upload/v1761903938/GEM_rtfeki.webp', alt: 'GeM Government-E-Marketplace logo', width: 220, height: 220 },
    { src: 'https://res.cloudinary.com/dxenuee4n/image/upload/v1761903949/RATA_lsqsuz.webp', alt: 'RATA (Refrigeration & Air Conditioning Traders Association)', width: 200, height: 100 },
  { src: 'https://res.cloudinary.com/dxenuee4n/image/upload/v1761903941/INDIAMART_ta7pgz.webp', alt: 'Indiamart logo', width: 120, height: 120 },// Custom size
    { src: 'https://res.cloudinary.com/dxenuee4n/image/upload/v1761903945/NHWC_gvlpxc.webp', alt: 'National Human Welfare Council', width: 120, height: 120 },
    { src: 'https://res.cloudinary.com/dxenuee4n/image/upload/v1761903947/NTIC2_hum7hc.webp', alt: 'NTIC (National Trade & Industry Council)', width: 120, height: 120 },


  ];

  const images7 = [
    { src: 'https://res.cloudinary.com/dxenuee4n/image/upload/v1761903937/ASHRAE_fnhqtx.webp', alt: 'ASHRAE logo, representing the American Society of Heating, Refrigerating and Air-Conditioning Engineers standards', width: 50, height: 50 },
    { src: 'https://res.cloudinary.com/dxenuee4n/image/upload/v1761903943/ISHRAE_irowe3.webp', alt: 'ISHRAE logo for the Indian Society of Heating, Refrigerating & Air Conditioning Engineers affiliation', width: 50, height: 50 },
    { src: 'https://res.cloudinary.com/dxenuee4n/image/upload/v1761903938/GEM_rtfeki.webp', alt: 'GeM Government-E-Marketplace logo', width: 50, height: 50 },
    { src: 'https://res.cloudinary.com/dxenuee4n/image/upload/v1761903949/RATA_lsqsuz.webp', alt: 'RATA (Refrigeration & Air Conditioning Traders Association)', width: 50, height: 50 },
     { src: 'https://res.cloudinary.com/dxenuee4n/image/upload/v1761903941/INDIAMART_ta7pgz.webp', alt: 'Indiamart logo', width: 120, height: 120 },
    { src: 'https://res.cloudinary.com/dxenuee4n/image/upload/v1761903945/NHWC_gvlpxc.webp', alt: 'National Human Welfare Council', width: 120, height: 50 },
    { src: 'https://res.cloudinary.com/dxenuee4n/image/upload/v1761903947/NTIC2_hum7hc.webp', alt: 'NTIC (National Trade & Industry Council)', width: 119, height: 119 },
   

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
            alt="4.5 out of 5 indiamart ratings of Adhunik Hvac Projects"
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
            alt="4.5 out of 5 indiamart ratings of Adhunik Hvac Projects"
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
 
 
 const logos2 = [
    { src: '/certi/7.webp', alt: 'Asahi-India-Glass-Ltd', width: 176, height: 112 },
    { src: '/certi/8.webp', alt: 'Bajaj', width: 126, height: 100 },
    { src: '/certi/9.webp', alt: 'Bajaj', width: 176, height: 112 },
    { src: '/certi/10.webp', alt: 'Bajaj', width: 176, height: 112 },
    { src: '/certi/11.webp', alt: 'Bajaj', width: 176, height: 112 },
    { src: '/certi/12.webp', alt: 'Bajaj', width: 176, height: 112 },
   
    { src: '/certi/7.webp', alt: 'Asahi-India-Glass-Ltd', width: 176, height: 112 },
    { src: '/certi/8.webp', alt: 'Bajaj', width: 126, height: 100 },
    { src: '/certi/9.webp', alt: 'Bajaj', width: 176, height: 112 },
    { src: '/certi/10.webp', alt: 'Bajaj', width: 176, height: 112 },
    { src: '/certi/11.webp', alt: 'Bajaj', width: 176, height: 112 },
    { src: '/certi/12.webp', alt: 'Bajaj', width: 176, height: 112 },
   
  ];


 const logos4 = [
  
    { src: 'https://res.cloudinary.com/dxenuee4n/image/upload/v1761904020/India_Business_award_2025_qblzy4.webp', alt: 'AWARDED AS INDIA BUSINESS AWARD 2025', width: 176, height: 112 },
    { src: 'https://res.cloudinary.com/dxenuee4n/image/upload/v1761904021/Innovative_brand_for_HVACProjects__2024-25_nv69nt.webp', alt: 'AWARDED AS MOST INNOVATIVE BRAND FOR HVAC PROJECTS 2024-25', width: 176, height: 112 },
    { src: 'https://res.cloudinary.com/dxenuee4n/image/upload/v1761904025/National_growth__partner_award_d97r04.webp', alt: 'AWARDED AS NATIONAL GROWTH PARTNER AWARD', width: 176, height: 112 },
   
    { src: 'https://res.cloudinary.com/dxenuee4n/image/upload/v1761904018/Gurugram_Industrial_expo_2023_wp1hrg.webp', alt: 'AWARDED FOR PARTICIPATION GURUGRAM INDUSTRIAL EXPO 2023', width: 176, height: 112 },
    { src: 'https://res.cloudinary.com/dxenuee4n/image/upload/v1761904015/Best_qualtity_in_Hvac_Industry_oitj4u.webp', alt: 'AWARDED FOR BEST QUALITY STANDARDS & SERVICES IN HVAC INDUSTRY', width: 176, height: 112 },
    { src: 'https://res.cloudinary.com/dxenuee4n/image/upload/v1761904027/National_trade___industry_council_m1teql.webp', alt: 'RECOGNIZED BY NATIONAL TRADE & INDUSTRY COUNCIL', width: 176, height: 112 },
    { src: 'https://res.cloudinary.com/dxenuee4n/image/upload/v1761904031/Sustainable_hvac____architecture_zgecsy.webp', alt: 'AWARDED FOR PARTICIPATION SUSTAINABLE HVAC AND ARCHITECTURE', width: 176, height: 112 },
    { src: 'https://res.cloudinary.com/dxenuee4n/image/upload/v1761904023/Most_Innovative_Brand_llrdtb.webp', alt: 'CERTIFICATE OF APPRECIATION MOST INNOVATIVE BRAND FOR HVAC PROJECTS 2024-25', width: 176, height: 112 },
    { src: 'https://res.cloudinary.com/dxenuee4n/image/upload/v1761904029/Overall_Performance_in_2023_umbjao.webp', alt: 'AWARDED FOR OVERALL PERFORMANCE IN 2023', width: 176, height: 112 },
   



    { src:'https://res.cloudinary.com/dxenuee4n/image/upload/v1761904020/India_Business_award_2025_qblzy4.webp', alt: 'AWARDED AS INDIA BUSINESS AWARD 2025', width: 176, height: 112 },
    { src: 'https://res.cloudinary.com/dxenuee4n/image/upload/v1761904021/Innovative_brand_for_HVACProjects__2024-25_nv69nt.webp', alt: 'AWARDED AS MOST INNOVATIVE BRAND FOR HVAC PROJECTS 2024-25', width: 176, height: 112 },
    { src: 'https://res.cloudinary.com/dxenuee4n/image/upload/v1761904025/National_growth__partner_award_d97r04.webp', alt: 'AWARDED AS NATIONAL GROWTH PARTNER AWARD', width: 176, height: 112 },
     
    { src: 'https://res.cloudinary.com/dxenuee4n/image/upload/v1761904018/Gurugram_Industrial_expo_2023_wp1hrg.webp', alt: 'AWARDED FOR PARTICIPATION GURUGRAM INDUSTRIAL EXPO 2023', width: 176, height: 112 },
    { src: 'https://res.cloudinary.com/ddkyx2jhh/image/upload/v1748602146/A_R_3_fkcvcv.webp', alt: 'AWARDED FOR BEST QUALITY STANDARDS & SERVICES IN HVAC INDUSTRY', width: 176, height: 112 },
    { src: 'https://res.cloudinary.com/dxenuee4n/image/upload/v1761904027/National_trade___industry_council_m1teql.webp', alt: 'RECOGNIZED BY NATIONAL TRADE & INDUSTRY COUNCIL', width: 176, height: 112 },
     { src: 'https://res.cloudinary.com/dxenuee4n/image/upload/v1761904031/Sustainable_hvac____architecture_zgecsy.webp', alt: 'AWARDED FOR PARTICIPATION SUSTAINABLE HVAC AND ARCHITECTURE', width: 176, height: 112 },
     { src: 'https://res.cloudinary.com/dxenuee4n/image/upload/v1761904023/Most_Innovative_Brand_llrdtb.webp', alt: 'CERTIFICATE OF APPRECIATION MOST INNOVATIVE BRAND FOR HVAC PROJECTS 2024-25', width: 176, height: 112 },
     { src: 'https://res.cloudinary.com/dxenuee4n/image/upload/v1761904029/Overall_Performance_in_2023_umbjao.webp', alt: 'AWARDED FOR OVERALL PERFORMANCE IN 2023', width: 176, height: 112 },
   
   
  ];


  
  const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "additionalType": "http://schema.org/Manufacturer",
      "@id": "https://www.adhunikhvacprojects.com/#organization",
      "name": "Adhunik Hvac Projects Private Limited",
      "url": "https://www.adhunikhvacprojects.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.adhunikpowertech.com/we.svg",
        "caption": "Adhunik Hvac Projects Private Limited Logo"
      },
      "description": "Founded in 2005, Adhunik Hvac Projects Private Limited is a leading Indian manufacturer and global provider of comprehensive HVAC solutions. We specialize in designing, manufacturing, and installing energy-efficient cooling, ventilation, and fire safety systems for industrial, commercial, and residential clients.",
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
     

      }
    },
    {
      "@type": "HVACBusiness",
      "@id": "https://www.adhunikhvacprojects.com/#localbusiness",
      "name": "Adhunik Hvac Projects Private Limited",
      "image": "https://www.adhunikpowertech.com/we.svg",
      "url": "https://www.adhunikhvacprojects.com",
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
    
    },
    {
      "@type": "WebSite",
      "@id": "https://www.adhunikhvacprojects.com/#website",
      "url": "https://www.adhunikhvacprojects.com/",
      "name": "Adhunik Hvac Projects",
      "publisher": { "@id": "https://www.adhunikhvacprojects.com/#organization" },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://www.adhunikhvacprojects.com/?s={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      },
      "inLanguage": "en-IN"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.adhunikpowertech.com/our-company",
      "url": "https://www.adhunikpowertech.com/our-company",
      "name": "About Us - HVAC & Manufacturing Experts in Gurugram - Adhunik Hvac Projects",
      "isPartOf": { "@id": "https://www.adhunikhvacprojects.com/#website" },
      "about": { "@id": "https://www.adhunikhvacprojects.com/#organization" },
      "inLanguage": "en-IN"
    },
  {
      "@type": "WebPage",
      "@id": "https://www.adhunikpowertech.com/product-overview",
      "url": "https://www.adhunikpowertech.com/product-overview",
      "name": "HVAC & Industrial Cooling Products India | Global - Adhunik Hvac Projects",
      "isPartOf": { "@id": "https://www.adhunikhvacprojects.com/#website" },
      "inLanguage": "en-IN"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.adhunikpowertech.com/top-HVAC-Contractor-in-Delhi-NCR-&-India",
      "url": "https://www.adhunikpowertech.com/top-HVAC-Contractor-in-Delhi-NCR-&-India",
      "name": "Top HVAC Contractor in Delhi NCR & India - Adhunik Hvac Projects",
    "description": "Adhunik Hvac Projects is a trusted HVAC contractor in Delhi NCR and across India, offering expert services in HVAC design, installation, repair, and maintenance for industrial and commercial clients.",
      "isPartOf": { "@id": "https://www.adhunikhvacprojects.com/#website" },
      "inLanguage": "en-IN"
    }
  ]
};

  const products2 = [ 
   
    
    {
      src: "/certi/award6.webp",
      alt: "AWARDED FOR OVERALL PERFORMANCE IN 2023",
      borderColor: "border-yellow-500", 
    },
 
  ];

  

const achievementData = [
 
  {
    icon: <Award size={24} className="text-cyan-600" />,

    number: 'Top HVAC Contractor in Delhi NCR & Across India: Design, Engineering, Installation',

    description: 'With a legacy spanning over 19 years, inherited from the renowned Adhunik Powertech, Adhunik HVAC Projects delivers high-performance, personalized HVAC services, boasting a strong presence in Delhi, Gurugram, Noida, and the entire NCR. We are a leading turnkey contractor with proven capabilities for executing complex projects pan-India. Our team of seasoned experts excels in providing comprehensive solutions that encompass every phase of a project, from initial expert consulting and detailed engineering to flawless installation and long-term maintenance.Our unwavering commitment to quality is demonstrated by our meticulous project execution, which adheres strictly to the highest national and international standards, including ISHRAE, ASHRAE, NBC, and CPWD. We specialize in engineering energy-efficient and cost-effective cooling systems that are tailored to the unique demands of industrial, commercial, and institutional environments. This focus ensures we deliver not only superior performance and safety but also lasting value and client satisfaction on every project we undertake.',
  },

  {
    icon: <HeartHandshake size={24} className="text-cyan-600" />,
    number: 'Our HVAC Solutions',
    description: 'We pride ourselves on offering a diverse range of innovative HVAC solutions, designed to meet the specific needs of our clients across various industries. Our portfolio is comprised of high-quality, cutting-edge systems that are engineered for performance, durability, and efficiency. Whether your project requires complex centralized HVAC systems, specialized industrial ducting, or custom-engineered air management solutions, our expertise ensures every component is integrated to deliver exceptional results. We are meticulously focused on ensuring that every project is executed to the highest standards.',
  },
];


const achievementData2 = [
 
  {
    icon: <Award size={24} className="text-cyan-600" />,

    number: 'Integrating Technology for Smarter Performance',

    description: 'We leverage modern technology to deliver systems that are not only powerful but also intelligent. Our capabilities include integrating advanced Building Management Systems (BMS), utilizing sophisticated energy modeling to predict and optimize performance, and designing smart solutions that give you greater control over your environment while reducing operational costs.',
  },

  {
    icon: <HeartHandshake size={24} className="text-cyan-600" />,
    number: 'A Commitment to Sustainability',
    description: 'We believe that superior performance and environmental responsibility go hand-in-hand. Our engineering process prioritizes energy efficiency at every stage, helping our clients reduce their carbon footprint and achieve significant long-term cost savings. We are your partners in building a greener, more sustainable future.',
  },
];

 
 


  return (
    <>

      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta charSet="UTF-8" />

        <link rel="icon" type="image/svg+xml" href="/d.svg" />
        <meta name="application-name" content="Adhunik Hvac Projects" />
        <meta name="google-site-verification" content="ZZcgUmCTYjVHPEYAV2XPTWfgp_PXc7M2GOEgeg6kYW0" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Adhunik Hvac Projects" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta httpEquiv="X-UA-Compatible" content="IE=EmulateIE7" />
        <meta name="twitter:site" content="@adhunikpowertech" />
        <meta name="twitter:image" content="https://www.adhunikhvacprojects.com/img/logo.png" />
        <meta name="twitter:image:alt" content="Adhunik Hvac Projects" />
        <meta property="og:image" content="https://www.adhunikhvacprojects.com/img/logo.png" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1"></meta>
        <meta name="bingbot" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1"></meta>
        <meta name="author" content="Adhunik Hvac Projects"></meta>
        <meta httpEquiv="Accept-CH" content="DPR, Viewport-Width, Width, Save-Data" />
        <meta property="og:title" content="Top & Best HVAC Companies in India - Adhunik Hvac Projects" />
        <meta name="twitter:title" content="Top & Best HVAC Companies in India - Adhunik Hvac Projects" />
        <meta name="twitter:description" content="Searching for the top HVAC companies in India? Adhunik Hvac Projects, Delhi's trusted HVAC contractor, manufacturer & supplier, offers expert cooling solutions across India. Contact us now & Get a Free Quote!" />
        <meta name="keywords" content="HVAC solutions, industrial cooling, air washers, air handling units, ventilation systems, energy-efficient cooling, Adhunik Hvac Projects" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.adhunikhvacprojects.com" />
        <meta property="og:site_name" content="Adhunik Hvac Projects" />
        <meta name="twitter:card" content="summary" />

      </Head>



      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

 


      <div className="row  h-auto w-full relative font-sans" >


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
              <video
                autoPlay
                loop
                muted
                poster="https://res.cloudinary.com/dxenuee4n/image/upload/v1758087928/poster_mulnm0.webp"
                playsInline
                type="video/mp4"
                className="w-full h-full object-cover"
                style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }}
              >
                <source src={slide.video} type="video/mp4" />

                {slide.descriptivetext}

              </video>


              <div className="  flex items-center h-screen bg-[#0000005a] bg-opacity-40">

                <div className=" text-white   text-center md:text-left  lg:px-16">
                  <p className="   text-[22px] md:text-6xl  md:w-[90%]  mb-2 font-thin">{slide.title}</p>
                  <p className='  text-[12px] md:text-[14px]  md:w-[70%]'>{slide.content} </p>
                  <button
                    className="cursor-pointer z-10 relative mt-4 text-[12px] px-7 py-4 text-white rounded-lg shadow-lg transition-colors duration-300"
                    style={{
                      background: `
                    radial-gradient(circle at 12.3% 19.3%, rgb(85, 88, 218) 0%, rgb(95, 209, 249) 100.2%),
                    linear-gradient(68.8deg, rgba(0, 0, 0, 0.95) 1.8%, rgb(0, 55, 79) 31.8%, rgb(9, 93, 134) 56.2%, rgb(15, 155, 217) 89%)
                  `,
                      backgroundBlendMode: 'multiply',
                    }}
                    onClick={() => handleButtonClick(slide.buttonText)}
                  >
                    {slide.buttonText}
                  </button>
                </div>
              </div>


            </div>
          ))}


          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
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



  <div className=" flex flex-col section px-7 py-7  w-full justify-center  items-center ">

          <p className=' pt-11 h-full relative w-full justify-center flex  text-9xl font-extrabold font-sans'>

            <Image
              width={960}
              height={600}
              src="/hvacsolution.webp"
              className="w-full h-auto object-contain" // Adjusted className
              alt="hvac solution"
              fetchPriority="high"
              decoding="async"
              effect="blur"
              loading='lazy'
            />


          </p>

          <p className='  uppercase w-full  h-full text-center   md:text-2xl  lg:text-3xl font-sans'> </p>
          <p className="  pt-4 text-3xl font-extrabold text-center md:text-5xl lg:text-6xl"><span className=" bg-clip-text text-transparent bg-gradient-to-r to-[#0093E9] from-[#80D0C7] uppercase">    under one roof </span></p>

        </div>


 


        <div className="row mt-7">

          <section className="bg-white ">

            <div className=" gap-7 md:gap-16   items-center flex  flex-wrap-reverse pt-0 mt-0 py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2  lg:px-6">

              <div className="    text-gray-700 text-[15px]  md:text-[16px] text-center md:text-left">

                <h1 className="mb-4 text-[20px] md:text-2xl  font-bold  text-gray-800 ">

                 Adhunik HVAC Projects : Engineering Excellence, Built on a Legacy of Trust 

                </h1>


                <p className="mb-2 text-justify  text-sm      ">
              <strong> Adhunik HVAC Projects </strong> is an award-winning leader in specialized HVAC solutions, born from a 19+ year legacy of engineering excellence at the renowned <strong>Adhunik Powertech</strong>. Our work has been recognized with the <strong>India Business Award 2025</strong> for <strong>"Best Quality Standards,"</strong> a testament to our commitment to delivering superior results. 

                </p>

                <p className=' mb-2 text-justify  text-sm    '>

                As the dedicated projects division of Adhunik Guds & Services, we provide comprehensive <strong>turnkey services</strong>—from innovative <strong>design</strong> to flawless <strong>installation</strong> and long-term <strong>maintenance</strong>. Our team of industry veteran engineers designs highly reliable and energy-efficient systems that ensure optimal performance and complete peace of mind for our clients and partners. 


                </p>

                <p className=' pb-8 text-justify  text-sm '>

                We are not just continuing a <strong>legacy</strong>; we are defining its <strong>future</strong>. Welcome to the next chapter of <strong>HVAC excellence</strong>.

                </p>

                <Link
                  aria-label="Learn more about HVAC solutions and air cooling systems"
                  title="Learn more about HVAC solutions and air cooling systems"

                  href='/'
                  className=' bg-[#0177C8] font-normal font-sans relative text-white text-[14px] px-4 py-3 md:px-12 md:py-4 rounded-full  uppercase'>
                  Know More About Us
                </Link>

              </div>

              <div className="  flex justify-center w-full h-full   ">

                <img
                  className="w-full h-full object-center   object-cover rounded-3xl"
                  src="https://res.cloudinary.com/dxenuee4n/image/upload/v1759910923/Home_Page_Image_Sanjay_Chauhan_nxalt2.webp"
                  alt="Adhunik Hvac Projects Private Limited's Director Mr. Sanjay Chauhan giving speech in ISHRAE Event about an HVAC System"
                  width="600"
                  height="960"
                />

              </div>
            </div>

          </section>

        </div>


    

        {/* ... unused section remains commented out ... */}

        <div className="row">


          <div className="inline-flex items-center justify-center w-full mx-auto my-4">

          </div>



          <section className="relative   py-20  bg-body overflow-hidden bg-black text-white">
            <div className="relative container mx-auto px-4">

              
              <div className="relative  h-full w-full mx-auto lg:mx-0 mb-7 text-center">
                <h2 className="font-heading text-4xl font-medium  tracking-tight mb-6">Our Quality Services</h2>

                <p className="  text-gray-400 tracking-tight capitalize">
                  <span className='  text-center '> We Offer High-Quality, Personalized Services That Ensure a <br /> Great Experience and Exceed Your Expectations.
</span>
                </p>
              </div>


              <div className="relative max-w-md lg:max-w-none mx-auto">
                <div className="flex flex-wrap -mx-4 text-center md:text-center">
                  {[
                    {
                      icon: 'https://res.cloudinary.com/dxenuee4n/image/upload/v1761972517/design_eng_naqunt.webp',
                      title: 'Design & Engineering',
                      content: 'We provide expert system design and detailed engineering, translating project requirements into energy-efficient and cost-effective cooling solutions for large industrial, institutional, and commercial facilities.',
                    },
                    {
                      icon: 'https://res.cloudinary.com/dxenuee4n/image/upload/v1761972520/Project_Exe_roddmb.webp',
                      title: 'Project Execution',
                      content: "Our project execution is defined by precision and adherence to the highest standards. We execute all projects under strict NBC, CPWD, and NABH guidelines, while following ISHRAE, ASHRAE, and ISO standards to ensure safety and performance."
                    },
                    {
                      icon: 'https://res.cloudinary.com/dxenuee4n/image/upload/v1760180661/AMC_and_Ongoing_Maintenance_Image_e2h1vq.webp',
                      title: 'AMC & Support',
                      content: "Our commitment extends beyond project completion. We offer comprehensive Annual Maintenance Contracts (AMCs) and ongoing support to ensure your HVAC system operates at peak performance, maximizing longevity and efficiency."
                    },
                  ].map((service, index) => (
                    <div key={index} className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
                      <div
                        className="group block h-auto  p-8 border-[1px] border-gray-800 border-opacity-10 hover:border-opacity-200 rounded-3xl transition duration-200 cursor-pointer"

                      >
                        <div className="flex h-full flex-col items-start">
                          <div className="flex w-full mb-12 items-center justify-between">

                            <img

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
                            <h2 className="text-3xl sm:text-4xl mb-2 font-medium  group-hover:text-cyan-500">{service.title}</h2>
                            <p className="text-gray-400 tracking-tight leading-5  ">{service.content}</p>
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
                <div className="   flex-col gap-5 items-center md:items-end  pt-24 lg:justify-center sm:justify-end justify-start   flex">
                  <Image
                    width={300}
                    height={200}
                    className="rounded-xl  object-cover  "
                    src="https://res.cloudinary.com/dxenuee4n/image/upload/v1761905105/top_hvac2_soznsg.webp"
                    alt="Large industrial cooling towers and thick insulated pipes on a rooftop for commercial HVAC systems."
                    loading='lazy'
                  />

                </div>
                <div className="flex-col flex gap-5">
                  <Image
                    width={300}
                    height={200}
                    className="sm:ml-0 ml-auto rounded-xl object-cover "
                    src="https://res.cloudinary.com/dxenuee4n/image/upload/v1761905102/top_hvac1_yqtx9c.webp"
                    alt="aLarge industrial cooling tower with metal stacks and green service pipes on a factory rooftop"
                    loading='lazy'
                  />
                </div>

              </div>


              <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex transition-colors duration-500 ease-in-out hover:border-cyan-500 border-2 border-gray-300 rounded-xl px-6  py-6">
                <div className="w-full flex-col justify-center items-start gap-8 flex">
                  <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                    <h2 className="text-gray-700 text-xl font-semibold font-manrope w-full leading-normal  text-center">
                    The Adhunik Advantage
<br />
Expertise Across Key Industries
                    </h2>
                    <div className=" text-base  leading-relaxed   space-y-4">
                    <p>
                      We don't believe in one-size-fits-all solutions. Our 19+ years of experience include delivering custom-engineered HVAC systems for some of the most demanding environments. Our specialized expertise includes:

                    </p>
                    <ul className=' list-disc list-outside ps-4 space-y-2'>
                      <li>
<strong className=' text-cyan-600 font-bold'>Commercial & Hospitality : </strong> Creating optimal comfort and energy efficiency for corporate offices, hotels, and retail spaces.
                      </li>

                      <li>
<strong className=' text-cyan-600 font-bold'>Industrial & Manufacturing : </strong> Designing robust ventilation and process cooling systems for factories, warehouses, and high-heat-load environments.
                      </li>
                      
                      <li>
<strong className=' text-cyan-600 font-bold'>Pharmaceutical & Healthcare : </strong>  Engineering and installing compliant Clean Room, OT, and laboratory systems where air quality and precision are paramount.
                      </li>

                      <li>

<strong className=' text-cyan-600 font-bold'> Data Centers & IT : </strong> Delivering mission-critical, redundant cooling solutions to protect sensitive IT infrastructure 24/7.

                      </li>

                    </ul>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </section>
 
          

 <section className="py-12 relative xl:mr-0 lg:mr-5 mr-0">
      <div className="w-full  md:max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start items-center xl:gap-12 gap-10  flex flex-col-reverse lg:flex-row">

          <div className="md:w-6/12 w-full flex-col  justify-center lg:items-start items-center gap-10 inline-flex">
            <div className="w-full flex-col justify-center items-start gap-8 flex">
             
              <div className="w-full flex-col justify-center items-start gap-6 flex">
                <div className="w-full justify-start items-center gap-8 grid md:grid-cols-1  grid-cols-1">
                  {achievementData.map((item, index) => (
                    <div
                      key={index}
                      className="w-full justify-center items-center h-full p-3.5 rounded-xl border border-gray-200 hover:border-cyan-400 transition-all duration-700 ease-in-out flex-col md:justify-start md:items-start gap-2.5 inline-flex"
                    >
                      <div className="p-2 bg-cyan-50 rounded-full">{item.icon}</div>
                      <h4 className="text-cyan-700  md:text-lg font-bold leading-normal lg:text-start text-center">{item.number}</h4>
                      <p className="text-gray-500 text-sm  md:text-justify font-normal leading-relaxed  text-justify">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
         
          </div>

          <div className="md:w-6/12 w-full lg:justify-start justify-center items-start flex">
            <div className="sm:w-[564px] w-full sm:h-[646px] h-full   rounded-3xl sm:border  sm:bg-gray-50  border-gray-300  relative">
              <img
                className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
                src="https://res.cloudinary.com/dxenuee4n/image/upload/v1761905111/top_hvac3_np0ldb.webp"
                alt="Multiple rooftop HVAC units on a commercial building, representing efficient cooling and heating solutions"
              />
            </div>
          </div>

        </div>
      </div>
    </section>


 <section className="pb-12 relative xl:mr-0 lg:mr-5 mr-0">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start items-center xl:gap-12 gap-10  flex flex-col-reverse lg:flex-row-reverse">

          <div className="md:w-6/12 w-full flex-col  justify-center lg:items-start items-center gap-10 inline-flex">
            <div className="w-full flex-col justify-center items-start gap-8 flex">
             
              <div className="w-full flex-col justify-center items-start gap-6 flex">
                <div className="w-full justify-start items-center gap-8 grid md:grid-cols-1 grid-cols-1">
                  {achievementData2.map((item, index) => (
                    <div
                      key={index}
                      className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-cyan-400 transition-all duration-700 ease-in-out flex-col md:justify-start md:items-start  justify-center items-center gap-2.5 inline-flex"
                    >
                      <div className="p-2 bg-cyan-50 rounded-full">{item.icon}</div>
                      <h4 className="text-cyan-700  md:text-lg font-bold leading-normal lg:text-start text-center">{item.number}</h4>
                      <p className="text-gray-500 text-sm  font-normal leading-relaxed   text-justify ">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
         
          </div>
          
          <div className="w-full lg:justify-start justify-center md:w-6/12 items-start flex">
            <div className="sm:w-[564px] w-full sm:h-[646px] h-full rounded-3xl sm:border sm:bg-gray-50  border-gray-300 relative">
              <img
                className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
                src="https://res.cloudinary.com/dxenuee4n/image/upload/v1761908480/top_hvac_4_drackp.webp"
                alt="Industrial ventilation system with large metal ductwork and air handling units inside a factory production line"
              />
            </div>
          </div>
        </div>
      </div>
    </section>


        <div className="inline-flex  py-6 items-center justify-center w-full mx-auto my-4 mt-8">
          <hr className="w-[90%] h-px my-8 bg-gray-300 border-0 " />
          <h2 className="absolute px-5 text-gray-700  -translate-x-1/2 bg-white left-1/2  md:text-3xl text-1xl capitalize font-extrabold   text-center font-sans">Member of</h2>
        </div>

        <div className="row  hidden md:block">

          <section className=' '>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mb-4 text-center">
                <h2 className="text-2xl  text-center font-medium"></h2>
              </div>

              <div className="  grid justify-center gap-14  sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 xl:flex">
                {images6.map((image, index) => (
                  <div key={index} className="flex items-center  justify-center">
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
              className="absolute top-1/2 left-2 transform -translate-y-1/2   text-black px-3 py-2 rounded-lg"
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


<div className="row">
    <div className="  inline-flex mb-4  items-center justify-center w-full mx-auto mt-3 ">

            <hr className="w-[90%] h-px my-8 bg-gray-300 border-0  " />

            <h2 className="absolute   px-3  text-gray-700 -translate-x-1/2 bg-white left-1/2  md:text-3xl text-1xl capitalize font-extrabold text-center font-sans" > Certificate & Accreditation

            </h2>

          </div>
  <style>
        {`
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 25s linear infinite;
        }
        .parent-container:hover .animate-infinite-scroll {
          animation-play-state: paused;
        }
        `}
      </style>
          <div className="w-full py-5 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            {[...Array(2)].map((_, index) => (
              <ul
                key={index}
                className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
                aria-hidden={index === 1 ? 'true' : 'false'}
              >
                {logos2.map((image, index) => (
                  <li key={index}>
                    <Image loading='lazy' src={image.src} width={image.width} height={image.height} alt={image.alt} />
                  </li>
                ))}
              </ul>
            ))}

          </div>
          
</div>


<div className="row">
    <div className="  inline-flex mb-4  items-center justify-center w-full mx-auto mt-3 ">

            <hr className="w-[90%] h-px my-8 bg-gray-300 border-0  " />

            <h2 className="absolute   px-3  text-gray-700 -translate-x-1/2 bg-white left-1/2  md:text-3xl text-1xl capitalize font-extrabold text-center font-sans" > Awards And Recognition  

            </h2>

          </div>
  <style>
        {`
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 75s linear infinite;
        }
        .parent-container:hover .animate-infinite-scroll {
          animation-play-state: paused;
        }
        `}
      </style>
          <div className="w-full py-5 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            {[...Array(2)].map((_, index) => (
              <ul
                key={index}
                className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
                aria-hidden={index === 1 ? 'true' : 'false'}
              >
                {logos4.map((image, index) => (
                  <li key={index}>
                    <Image loading='lazy' src={image.src} width={image.width} height={image.height} alt={image.alt} />
                  </li>
                ))}
              </ul>
            ))}

          </div>
          
</div>

          <div className="row  py-6">
          <div className="  inline-flex mb-4  items-center justify-center w-full mx-auto mt-3 ">

            <hr className="w-[90%] h-px my-8 bg-gray-300 border-0  " />

            <h2 className="absolute   px-3  text-gray-700 -translate-x-1/2 bg-white left-1/2  md:text-3xl text-1xl capitalize font-extrabold text-center font-sans" > Proudly We Serve
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



        </div>

      </div>

    </>
  )
}