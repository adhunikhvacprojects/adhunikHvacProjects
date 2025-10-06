import OurCompany from "./OurCompany";


export const metadata = {
  title: "Our Story: 19+ Years as a Leading HVAC Contractor",
  description: "Discover Adhunik HVAC Projects, an award-winning HVAC contractor born from a 19+ year legacy. Learn about our expert team, turnkey solutions, and commitment to quality.",

  keywords: [
    
    "Adhunik HVAC Projects",
    "Adhunik Powertech legacy",
    "award-winning HVAC contractor", 
    "HVAC company story",
    "HVAC legacy",
    "engineering excellence",
    "expert HVAC team", 
    "leading HVAC contractor",
    "turnkey HVAC solutions",
    "HVAC contractor India",
    "HVAC Gurugram",
  ],

  robots: "index, follow",

  openGraph: {
    title: "Our Story: 19+ Years as a Leading HVAC Contractor",
    description: "Discover the journey of Adhunik HVAC Projects, an award-winning contractor born from a 19+ year legacy of engineering excellence.",
    url: "https://www.adhunikhvacprojects.com/about-us", 
    type: "website",
    images: [
      {
        url: "https://www.adhunikhvacprojects.com/images/about-us-preview.jpg",  
        width: 1200,
        height: 630,
        alt: "The Legacy and Team of Adhunik HVAC Projects",
      },
    ],
  },

  alternates: {
    canonical: "https://www.adhunikhvacprojects.com/about-us", 
  },

  twitter: {
    card: "summary_large_image",
    title: "Our Story: 19+ Years as a Leading HVAC Contractor",
    description: "Discover the journey of Adhunik HVAC Projects, an award-winning contractor born from a 19+ year legacy of engineering excellence.",
    image: "https://www.adhunikhvacprojects.com/images/about-us-preview.jpg", 
  },
};

export default function AirWasher() {


  return <OurCompany/> ;
  
}
