import React from 'react'
import ModularVsCentralized from './ModularVsCentralized' // Ensure filename matches the component above

export const metadata = {
  title: "Modular vs. Centralized HVAC: The Smart Choice for Scalable Projects | Adhunik HVAC Projects",
  description: "Stop overpaying for rigid cooling systems. Discover why Modular HVAC is the smart choice for commercial developers. Scalable, efficient, and cost-effective solutions by Adhunik HVAC Projects.",
  
  keywords: [
    // Core Topic Keywords
    "Modular HVAC systems",
    "Centralized chiller plant vs modular",
    "Scalable commercial HVAC",
    "HVAC for real estate developers",
    "Energy efficient chiller systems",
    
    // Pain Point Keywords
    "HVAC capital expenditure",
    "Flexible cooling solutions",
    "HVAC redundancy",
    
    // Brand & Trust Keywords
    "Adhunik HVAC Projects",
    "Adhunik Powertech legacy",
    "Top HVAC contractor Delhi NCR",
    "Commercial HVAC feasibility study"
  ],

  robots: "index, follow",

  openGraph: {
    title: "Modular vs. Centralized HVAC: The Smart Choice | Adhunik HVAC Projects",
    description: "Building a new tower? Don't let your HVAC system lock you in. Learn how modular systems save capital and ensure future flexibility.",
    url: "https://www.adhunikhvacprojects.com/modular-vs-centralized-hvac",
    type: "article",
    images: [
      {
        // Replace with your actual uploaded image URL
        url: "https://res.cloudinary.com/dxenuee4n/image/upload/v1763546606/modular-vs-centralized-hvac_pyr2kb.webp", 
        width: 1200,
        height: 630,
        alt: "Modular HVAC Chillers on Commercial Rooftop - Adhunik HVAC Projects",
      },
    ],
  },

  alternates: {
    canonical: "https://www.adhunikhvacprojects.com/modular-vs-centralized-hvac",
  }
};

export default function page() {
  return (
    <>
      <ModularVsCentralized/>
    </>
  )
}