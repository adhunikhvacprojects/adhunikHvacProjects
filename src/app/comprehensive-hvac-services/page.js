import React from 'react'
import ComprehensiveHVACServices from './ComprehensiveHVACServices' // Ensure filename matches

export const metadata = {
  title: "Comprehensive HVAC Contractor Services | Adhunik Hvac Projects",
  description: "From precision design to clean room installation and AMC support. Discover Adhunik HVAC Projects' turnkey engineering solutions across Delhi NCR and Pan-India.",
  
  keywords: [
    // Core Service Keywords
    "Comprehensive HVAC contractor",
    "Turnkey HVAC solutions",
    "Industrial HVAC installation",
    "HVAC system design",
    "Commercial HVAC services",
    
    // Specialized Keywords
    "Clean room HVAC contractor",
    "OT HVAC systems",
    "Lift pressurization systems",
    "Basement ventilation",
    
    // Maintenance Keywords
    "HVAC AMC services",
    "HVAC commissioning",
    "Preventive HVAC maintenance",
    
    // Brand & Location
    "Adhunik HVAC Projects",
    "Top HVAC contractor Delhi NCR",
    "Adhunik Powertech legacy"
  ],

  robots: "index, follow",

  openGraph: {
    title: "Comprehensive HVAC Services | Design to Durability",
    description: "We don't just install; we engineer. Explore our end-to-end HVAC solutions for industrial, healthcare, and commercial sectors.",
    url: "https://www.adhunikhvacprojects.com/comprehensive-hvac-services",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1581092921461-eab62e97a783?q=80&w=2070&auto=format&fit=crop", 
        width: 1200,
        height: 630,
        alt: "Adhunik HVAC Engineers reviewing blueprints",
      },
    ],
  },

  alternates: {
    canonical: "https://www.adhunikhvacprojects.com/comprehensive-hvac-services",
  }
};

export default function page() {
  return (
    <>
      <ComprehensiveHVACServices/>
    </>
  )
}