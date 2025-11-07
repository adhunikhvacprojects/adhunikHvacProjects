// This code is for the file: page.js

import React from 'react'
// Assuming your blog component file is named hvacsolutions.js
import HvacSolutionsPage from './hvacsolutions'

export const metadata = {
  // Title Tag (Crucial for SEO, updated to reflect the 'Turnkey' concept)
  title: "HVAC SOLUTION UNDER ONE ROOF | Turnkey Contractor in Delhi NCR | Adhunik",
  
  // Meta Description (Compelling, keyword-rich summary)
  description: "Discover the Adhunik difference: Complete HVAC SOLUTION UNDER ONE ROOF. We provide turnkey design, installation, and AMC services for commercial & industrial projects across Delhi NCR. 19+ years of trust.",
  
  keywords: [
    // High-Value Core Service Keywords
    "HVAC solution under one roof",
    "Turnkey HVAC contractor Delhi NCR",
    "Single-source HVAC contractor",
    "HVAC design installation maintenance",
    "commercial HVAC turnkey projects",
    "industrial HVAC solutions India",
    "chiller plant AMC services",
    "cleanroom HVAC contractor",
    
    // Geographic Keywords (Focusing on Adhunik's region)
    "HVAC company in Gurugram",
    "HVAC projects in Noida",
    "top HVAC contractor in India",
    "HVAC services across Delhi NCR",

    // Brand & Credibility Keywords
    "Adhunik HVAC Projects",
    "trusted HVAC contractor",
    "award-winning HVAC company",
    "19 years HVAC experience",
    "Adhunik Powertech legacy",
  ],

  robots: "index, follow",

  openGraph: {
    // Open Graph Title (What appears when shared on social media)
    title: "HVAC SOLUTION UNDER ONE ROOF: Turnkey Excellence by Adhunik HVAC Projects",
    description: "Eliminate vendor fragmentation with our single-source model. We handle your entire HVAC lifecycle—from engineering compliance to 24/7 AMC support.",
    url: "https://www.adhunikhvacprojects.com/hvac-solution-under-one-roof",
    type: "article",
    images: [
      {
        // Use an image that conveys the 'Under One Roof' concept
        url: "https://res.cloudinary.com/dxenuee4n/image/upload/v1762157380/hvaccontractor_vvwwh6.webp",
        width: 1200,
        height: 630,
        alt: "HVAC Solution Under One Roof - Turnkey Services Adhunik Projects",
      },
    ],
  },

  alternates: {
    canonical: "https://www.adhunikhvacprojects.com/hvac-solution-under-one-roof",
  }
};

/**
 * Main page component for the 'HVAC Solution Under One Roof' blog post.
 * Renders the primary content component.
 */
export default function Page() {
  return (
    <>
      {/* NOTE: This imports the component containing the blog content.
        Ensure the component you import (HvacSolutionsPage) matches the export 
        name in the hvacsolutions.js file.
      */}
      <HvacSolutionsPage/>
    </>
  )
}