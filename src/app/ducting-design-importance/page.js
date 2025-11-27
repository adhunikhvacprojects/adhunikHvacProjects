
import React from 'react'
import DuctingDesignBlog from './DuctingDesignBlog' // Ensure the component filename matches what you saved previously

export const metadata = {
  title: "Why Proper Ducting Design Matters in Commercial Buildings| Adhunik HVAC Projects",
  description: "Is your HVAC system losing energy? Discover how proper duct design reduces static pressure, eliminates hot spots, and improves IAQ in commercial buildings.",
  
  keywords: [
    // Core Topic Keywords
    "Commercial ducting design",
    "HVAC static pressure calculation",
    "Ductwork leakage testing",
    "HVAC airflow balancing",
    
    // Problem/Solution Keywords
    "Reducing HVAC energy costs",
    "Eliminating hot and cold spots",
    "Commercial indoor air quality",
    "Duct fabrication services",
    
    // Technical Keywords
    "External Static Pressure (ESP)",
    "Air Handling Unit efficiency",
    "Ducting insulation types",
    
    // Brand & Location
    "Adhunik HVAC Projects",
    "HVAC contractor Delhi NCR",
    "Top HVAC consultants India"
  ],

  robots: "index, follow",

  openGraph: {
    title: "Why Proper Ducting Design Matters in Commercial Buildings",
    description: "Even the best chiller fails with bad ductwork. Learn why engineered duct design is crucial for efficiency and comfort.",
    url: "https://www.adhunikhvacprojects.com/blog/ducting-design-importance",
    type: "article",
    images: [
      {
        url: "https://res.cloudinary.com/dxenuee4n/image/upload/v1764267199/Commercial_ducting_design_Importance_xnyyvl.webp", 
        width: 1200,
        height: 630,
        alt: "HVAC technician inspecting and adjusting commercial ducting system to ensure proper airflow and efficient ducting design in commercial buildings.",
      },
    ],
  },

  alternates: {
    canonical: "https://www.adhunikhvacprojects.com/blog/ducting-design-importance",
  }
};

export default function page() {
  return (
    <>
      <DuctingDesignBlog/>
    </>
  )
}
