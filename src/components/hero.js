import React from 'react'
import HeroPage from './HeroPage'



export const metadata = {
  title: "Top HVAC Contractor in Delhi NCR | Adhunik HVAC Projects",
  description: "Top turnkey HVAC contractor in Delhi NCR & India. We provide award-winning design and installation for industrial & commercial clients. 19+ years of experience. Contact us!",
  
  keywords: [
  
    "HVAC contractor",
    "turnkey HVAC projects",
    "industrial HVAC solutions",
    "commercial HVAC services",
    "HVAC design and installation",
    "HVAC engineering company",
    "MEP contractors", 
    "HVAC contractor in Delhi NCR",
    "HVAC projects Gurgaon",
    "industrial ventilation Noida",
    "top HVAC company in Delhi",
    "pan-India HVAC contractor", 
    "cleanroom HVAC design",
    "hospital OT ventilation",
    "HVAC for data centers",
    "pharmaceutical HVAC solutions",
    "warehouse ventilation contractor",
    "factory cooling solutions", 
    "Adhunik HVAC Projects",
    "Adhunik Guds & Services",
    "Adhunik Powertech legacy",
  ],

  robots: "index, follow",

  openGraph: {
    title: "Top HVAC Contractor in Delhi NCR | Adhunik HVAC Projects",
    description: "Award-winning design & installation for industrial and commercial clients, built on a 19+ year legacy of excellence.",
    url: "https://www.adhunikhvac.com/",  
    type: "website",
    images: [
      {
        url: "https://www.adhunikhvac.com/images/homepage-social-preview.jpg",  
        width: 1200, 
        height: 630, 
        alt: "Adhunik HVAC Projects - Industrial HVAC Installation",
      },
    ],
  },

  alternates: {
    canonical: "https://www.adhunikhvac.com/",  
  },

  twitter: {
    card: "summary_large_image",
    title: "Top HVAC Contractor in Delhi NCR | Adhunik HVAC Projects",
    description: "Award-winning design & installation for industrial and commercial clients, built on a 19+ year legacy of excellence.",
    image: "https://www.adhunikhvac.com/images/homepage-social-preview.jpg",  
  },
};


export default function Hero() {
  return (
    <>
    <HeroPage/>
    </>
  )
}
