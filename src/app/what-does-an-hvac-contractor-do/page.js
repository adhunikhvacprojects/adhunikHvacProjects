import React from 'react'
import HvacContractor from './hvaccontractor'

export const metadata = {
  title: "What an HVAC Contractor Does | Adhunik HVAC Projects",
  description: "Discover what an HVAC contractor actually does — from design to installation and maintenance. Learn how Adhunik HVAC Projects delivers efficient, reliable systems across Delhi NCR.",
  
  keywords: [
    // Core Service Keywords
    "HVAC contractor",
    "HVAC services",
    "HVAC installation",
    "HVAC maintenance",
    "commercial HVAC projects",
    "industrial HVAC solutions",
    "turnkey HVAC systems",
    "HVAC design and engineering",

    // Geographic Keywords
    "HVAC contractor in Delhi NCR",
    "HVAC company in Gurugram",
    "top HVAC contractor in India",
    "HVAC projects in Noida",
    "HVAC services across Delhi NCR",

    // Industry & Application Keywords
    "office HVAC systems",
    "factory ventilation systems",
    "chiller plants installation",
    "VRV/VRF systems",
    "energy-efficient HVAC",

    // Brand & Credibility Keywords
    "Adhunik HVAC Projects",
    "trusted HVAC contractor",
    "HVAC expert Delhi NCR",
    "award-winning HVAC company",
  ],

  robots: "index, follow",

  openGraph: {
    title: "What Does an HVAC Contractor Actually Do? | Adhunik HVAC Projects",
    description: "Understand the complete role of an HVAC contractor — from design to installation and maintenance. Adhunik HVAC Projects ensures comfort and efficiency in every project across Delhi NCR.",
    url: "https://www.adhunikhvacprojects.com/what-does-an-hvac-contractor-do",
    type: "article",
    images: [
      {
        url: "https://res.cloudinary.com/dxenuee4n/image/upload/v1762157380/hvaccontractor_vvwwh6.webp",
        width: 1200,
        height: 630,
        alt: "HVAC contractor installing system - Adhunik HVAC Projects",
      },
    ],
  },

  alternates: {
    canonical: "https://www.adhunikhvacprojects.com/what-does-an-hvac-contractor-do",
  }
};
export default function page() {
  return (
    
    <>
    <HvacContractor/>
    </>
  )
}
