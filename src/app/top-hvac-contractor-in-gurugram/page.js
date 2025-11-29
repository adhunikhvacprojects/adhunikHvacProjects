import React from 'react'
import TopHvacGurugramPage from './tophvaccontractorgurugram'

export const metadata = {
  title: "Top HVAC Contractor in Gurugram (Gurgaon) | Adhunik HVAC",
  description: "Need a reliable commercial HVAC contractor in Gurugram? Adhunik offers award-winning design, installation, & 24/7 support. Get a free consultation!",
  
  // SEO Keywords for the page
keywords: [
  // Core Keywords
  "HVAC contractor",
    "commercial HVAC",
    "industrial HVAC",
    "HVAC company",
    "turnkey HVAC projects",
    "VRV/VRF systems",
    "chiller plants",
    "HVAC maintenance",

    // Geographic Keywords
    "HVAC contractor in Gurugram",
    "HVAC company in Gurgaon",
    "commercial HVAC Cyber City",
    "HVAC services Udyog Vihar",
    "HVAC Manesar",
    "Gurugram",
    "Gurgaon",

    // Application & Industry Keywords
    "office HVAC systems",
    "corporate building cooling",
    "industrial ventilation Manesar",
    "data center cooling Gurugram",
    "energy-efficient HVAC",

    // Brand & Credibility Keywords
    "Adhunik HVAC Projects",
    "HVAC installer Gurugram",
    "HVAC engineer Gurgaon",
    "award-winning HVAC",
    "24/7 HVAC support",
  ],
  
  robots: "index, follow",
  
  openGraph: {
    title: "Expert Commercial HVAC Contractor in Gurugram | Adhunik HVAC Projects",
    description: "Partner with Adhunik for reliable, energy-efficient commercial HVAC in Gurugram. We offer turnkey design & installation for corporate offices and industrial hubs. Get a free consultation!",
    url: "https://www.adhunikhvacprojects.com/top-hvac-contractor-in-gurugram", // New URL
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dxenuee4n/image/upload/v1764413800/HVAC_Contractor_in_Gurugram_Gurgaon_qvu1nz.webp", // Placeholder: Use a high-quality image of a completed Gurugram project
        width: 1200, 
        height: 630, 
        alt: "A modern HVAC system on a corporate building in Gurugram, installed by Adhunik HVAC Projects.",
      },
    ],
  },
  
  alternates: {
    canonical: "https://www.adhunikhvacprojects.com/top-hvac-contractor-in-gurugram", // New Canonical URL
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Expert Commercial HVAC Contractor in Gurugram | Adhunik HVAC Projects",
    description: "Partner with Adhunik for reliable, energy-efficient commercial HVAC in Gurugram. We offer turnkey design & installation for corporate offices and industrial hubs. Get a free consultation!",
    image: "https://res.cloudinary.com/dxenuee4n/image/upload/v1764413800/HVAC_Contractor_in_Gurugram_Gurgaon_qvu1nz.webp", // Placeholder: Use the same image as Open Graph
  },
};

export default function page() {
  return (
    
    <>
    <TopHvacGurugramPage/>
    </>
  )
}
