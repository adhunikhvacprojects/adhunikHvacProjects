import React from 'react'
import HvacContractorDelhiPage from './tophvaccontractordelhi'

export const metadata = {
  title: "Top HVAC Contractor in Delhi NCR | Adhunik HVAC Projects",
  description: "Need a reliable commercial HVAC contractor in Delhi? Adhunik offers award-winning design, installation, & 24/7 support. Get your free consultation now!",
  
  keywords: [
    // Core Service & Technology Keywords
    "HVAC contractor",
    "commercial HVAC",
    "industrial HVAC",
    "HVAC company",
    "HVAC services",
    "turnkey HVAC projects",
    "VRV/VRF systems",
    "chiller plants",
    "HVAC maintenance",

    // Geographic Keywords
    "HVAC contractor in Delhi",
    "HVAC company in Delhi NCR",
    "commercial HVAC Gurgaon",
    "HVAC services Noida",
    "Delhi NCR",
"Gurugram",

    // Application & Industry Keywords
    "office HVAC systems",
    "industrial ventilation",
    "commercial building cooling",
    "data center cooling",
    "energy-efficient HVAC",

    // Brand & Credibility Keywords
    "Adhunik HVAC Projects",
    "HVAC installer",
    "HVAC engineer Delhi",
    "award-winning HVAC",
    "24/7 HVAC support",
  ],
  
  robots: "index, follow",
  
  openGraph: {
    title: "Expert Commercial HVAC Contractor in Delhi NCR | Adhunik HVAC Projects",
    description: "Partner with Adhunik for reliable, energy-efficient commercial HVAC solutions in Delhi NCR. We offer turnkey design, installation, and 24/7 support. Get a free consultation!",
    url: "https://www.adhunikhvacprojects.com/hvac-contractor-delhi-ncr",
    type: "website",
    images: [
      {
        url: "https://www.adhunikhvacprojects.com/images/hvac-projects-delhi-preview.jpg", // Placeholder: Use a high-quality image of a completed project
        width: 1200, 
        height: 630, 
        alt: "A large-scale commercial HVAC system installed on a rooftop by Adhunik HVAC Projects.",
      },
    ],
  },
  
  alternates: {
    canonical: "https://www.adhunikhvacprojects.com/hvac-contractor-delhi-ncr",
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Expert Commercial HVAC Contractor in Delhi NCR | Adhunik HVAC Projects",
    description: "Partner with Adhunik for reliable, energy-efficient commercial HVAC solutions in Delhi NCR. We offer turnkey design, installation, and 24/7 support. Get a free consultation!",
    image: "https://www.adhunikhvacprojects.com/images/hvac-projects-delhi-preview.jpg", // Placeholder: Use the same image as Open Graph
  },
};

export default function page() {
  return (
    
    <>
    <HvacContractorDelhiPage/>
    </>
  )
}