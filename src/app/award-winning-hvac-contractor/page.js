import React from 'react'
import AwardWinning from './AwardWinning'


export const metadata = {
  title: "Award-Winning HVAC Contractor | Adhunik HVAC Projects",
  description: "Choosing the right HVAC contractor is critical. Learn how our 19+ year legacy of engineering excellence ensures smarter design, flawless execution & project success.",
  
  keywords: [ 
    "choosing an HVAC contractor",
"Top HVAC contractor",
    "HVAC contractor selection",
    "turnkey HVAC contractor",
    "award-winning HVAC contractor",
    "industrial HVAC projects", 
    "HVAC project success",
    "commercial air cond services",
    "HVAC engineering excellence",
    "HVAC compliance ISHRAE",
    "HVAC project management", 
    "Adhunik HVAC Projects",
    "Adhunik Powertech legacy",
  ],

  robots: "index, follow",

  openGraph: {
    title: "Beyond the Blueprint: How to Choose a Truly Great HVAC Contractor",

    description: "A successful HVAC project depends on more than a plan. Learn how a legacy of engineering excellence is the key to smarter design, flawless execution, and guaranteed success.",

    url: "https://www.adhunikhvacprojects.com/award-winning-hvac-contractor",

    type: "article",

    images: [

      {

        url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        width: 1200, 
        height: 630, 
        alt: "Engineers reviewing a complex HVAC project blueprint.",

      },
    ],
  },

  alternates: {

    canonical: "https://www.adhunikhvacprojects.com/award-winning-hvac-contractor",

  },

  twitter: {

    card: "summary_large_image",
    title: "Award-Winning HVAC Contractor | Adhunik HVAC Projects",
    description: "Choosing the right HVAC contractor is critical. Learn how our 19+ year legacy of engineering excellence ensures smarter design, flawless execution & project success.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 

  },
}


export default function page() {
  return (
    
    <>
    <AwardWinning/>
    </>
  )
}
