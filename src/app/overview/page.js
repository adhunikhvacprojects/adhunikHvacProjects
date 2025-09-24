import React from 'react'
import Overview from './Overview'

export const metadata = {
  
  title: "Top HVAC Contractor in Delhi NCR & India | Adhunik HVAC Projects",
  description: "Your expert turnkey HVAC contractor in Delhi NCR & India. We deliver award-winning design, installation & maintenance for industrial & commercial projects. 19+ years of trust.",
  
  keywords: [ 
    "HVAC contractor",
    "turnkey HVAC solutions",
    "HVAC services",
    "HVAC design and engineering",
    "HVAC installation",
    "HVAC maintenance",
    "HVAC repair",
    "HVAC AMC",
    "clean room HVAC",
    "hospital OT HVAC",
    "basement ventilation",
    "industrial process cooling",
    "precision air conditioning",
    "HVAC contractor Delhi NCR",
    "HVAC company Gurgaon",
    "HVAC projects Noida",
    "HVAC services India", 
    "Adhunik HVAC Projects",
    "award-winning HVAC contractor",
    "ISHRAE compliant",
    "ASHRAE standards",
  ],

  

  openGraph: {
    title: "Complete Turnkey HVAC Solutions | Adhunik HVAC Projects",
    description: "From initial design and engineering to flawless installation and long-term maintenance, discover our comprehensive, award-winning HVAC services for projects across India.",
    url: "https://www.adhunikhvacprojects.com/overview",
    type: "website",
    images: [
      {
        url: "https://www.adhunikhvacprojects.com/jobs/9.jpg", 
        width: 1200, 
        height: 630, 
        alt: "Adhunik HVAC Projects - Turnkey HVAC Solutions",
      },
    ],
  },

  alternates: {
    canonical: "https://www.adhunikhvacprojects.com/overview",  
  },

  twitter: {
    card: "summary_large_image",
    title: "Complete Turnkey HVAC Solutions | Adhunik HVAC Projects",
    description: "From initial design and engineering to flawless installation and long-term maintenance, discover our comprehensive, award-winning HVAC services.",
    image: "https://www.adhunikhvacprojects.com/jobs/9.jpg",  
  },
};


export default function page() {
  return (
    <>

<Overview/>

    </>
  )
}
