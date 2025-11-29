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

        url: "https://res.cloudinary.com/dxenuee4n/image/upload/v1764413799/award-winning_rvyrwp.webp", 
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
    image: "https://res.cloudinary.com/dxenuee4n/image/upload/v1764413799/award-winning_rvyrwp.webp", 

  },
}


export default function page() {
  return (
    
    <>
    <AwardWinning/>
    </>
  )
}
