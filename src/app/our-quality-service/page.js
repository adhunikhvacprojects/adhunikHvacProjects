import React from 'react'
import OurQualityServices from './OurQualityServices'

export const metadata = {
  title: "Turnkey HVAC Services in Delhi NCR | Adhunik HVAC Projects",
  description: "Top HVAC contractor in Delhi NCR for turnkey services. We handle design, installation, repair & AMCs for commercial & industrial projects. 19+ years of trust. Contact us!",
  
  keywords: [
    "turnkey HVAC services",
    "HVAC design and consultation",
    "professional HVAC installation",
    "HVAC repair and maintenance",
    "HVAC AMC services",
    "commercial HVAC solutions",
    "industrial HVAC expertise",
    "energy-efficient HVAC upgrades",
    "HVAC retrofits",
    "indoor air quality solutions",
    "ventilation system design",
    "VRF system installation",
    "chiller plant services",
    "HVAC services Delhi NCR",
    "HVAC contractor Gurgaon",
    "HVAC installation Noida",
    "HVAC repair Faridabad",
  ],

  robots: "index, follow",

  openGraph: {
    title: "Turnkey HVAC Services in Delhi NCR | Adhunik HVAC Projects",
    description: "Your expert HVAC contractor for complete turnkey services: design, installation, repair, and AMCs for commercial and industrial projects across India. 19+ years of trust.",
    url: "https://www.adhunikhvacprojects.com/our-quality-service",
    type: "website",
    images: [
      {
        url: "https://www.adhunikhvacprojects.com/_next/image?url=%2FHVAC%20Contractor.webp&w=1080&q=75", 
        width: 1200, 
        height: 630, 
        alt: "Adhunik HVAC Projects - Comprehensive HVAC Services",
      },
    ],
  },

  alternates: {
    canonical: "https://www.adhunikhvacprojects.com/our-quality-service",
  },

  twitter: {
    card: "summary_large_image",
    title: "Turnkey HVAC Services in Delhi NCR | Adhunik HVAC Projects",
    description: "Your expert HVAC contractor for complete turnkey services: design, installation, repair, and AMCs for commercial and industrial projects across India.",
    image: "https://www.adhunikhvacprojects.com/_next/image?url=%2FHVAC%20Contractor.webp&w=1080&q=75",
  },
};

export default function page() {
  return (
    <>
    <OurQualityServices/>
    </>
  )
}
