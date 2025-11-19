import React from 'react'
import WinterHVACMaintenance from './WinterHVACMaintenance' // Ensure this matches the filename of the component created in the previous step

export const metadata = {
  title: "How to Maintain Peak HVAC Performance in Low Temperatures | Adhunik HVAC Projects",
  description: "Prepare your HVAC system for winter in Delhi NCR. Discover our 7-point maintenance checklist to prevent breakdowns, ensure safety, and improve heating efficiency.",
  
  keywords: [
    // Core Topic Keywords
    "Winter HVAC maintenance",
    "HVAC winter checklist",
    "heating system maintenance",
    "prevent HVAC freezing",
    "commercial heating solutions",
    "heat pump winter care",
      
   // Geographic Keywords
    "heating repair Delhi NCR",
    "HVAC winter service Gurugram",
    "winter HVAC maintenance Noida",
    "commercial HVAC contractor Delhi",

    // Brand & Trust Keywords
    "Adhunik HVAC Projects",
    "HVAC AMC services",
    "expert HVAC technicians",
    "top HVAC contractor in India"
  ],

  robots: "index, follow",

  openGraph: {
    title: "How to Maintain Peak HVAC Performance in Low Temperatures | Adhunik HVAC Projects",
    description: "Don't let the cold cripple your system. Learn expert strategies to protect your HVAC infrastructure and ensure efficiency during the winter months.",
    url: "https://www.adhunikhvacprojects.com/winter-hvac-maintenance-tips",
    type: "article",
    images: [
      {
        // Replace this URL with your actual Winter/Heating specific blog image from Cloudinary
        url: "https://res.cloudinary.com/dxenuee4n/image/upload/v1763536710/hvac-performance_xwirpr.webp", 
        width: 1200,
        height: 630,
        alt: "Outdoor commercial HVAC units on a rooftop with a banner reading. How to Maintain Peak HVAC Performance in Low Temperatures.",
      },
    ],
  },

  alternates: {
    canonical: "https://www.adhunikhvacprojects.com/winter-hvac-maintenance-tips",
  }
};

export default function page() {
  return (
    <>
      <WinterHVACMaintenance/>
    </>
  )
}