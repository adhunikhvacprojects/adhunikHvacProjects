"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {
  ShieldCheck,
  GaugeCircle,
  Thermometer,
  Clock,
  BadgeDollarSign,
  Hammer,
  Boxes,
  FileCheck2,
  Ruler,
  AlertTriangle,
  Trash2,
  Snowflake
} from "lucide-react";

import {
  ScanSearch,
  Users2,
  ThermometerSun,
  Wrench,
  SlidersHorizontal,
  BarChart3,

  Wind,
  LayoutTemplate,
  Plug,
  Cpu
} from "lucide-react";

import {
  CalendarCheck2,
  Radar,
  Repeat2,
  LineChart,
  ThumbsDown,
  ShieldX,
  ClipboardCheck,
  Building2
} from "lucide-react";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";


import { PhoneCall, AlarmClockCheck, MapPin, PackageCheck } from 'lucide-react';
import { RefreshCw, } from 'lucide-react';


export default function AwardWinning() {

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const energySystems = [

    {
      title: ' Chiller Systems',
      desc: <>

        <p>
    Ideal for very large commercial and industrial applications, offering superior cooling capacity and efficiency.

</p>
 
      </>,
      icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4'
    },

  
    {
      title: 'Ductable Air Conditioners ',
      desc: <>

        <p>
    Perfect for medium to large spaces requiring discreet, uniform cooling.


</p>
 
 
      </>,
      icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4'
    },

  
    {
      title: ' VRF/VRV Systems',
      desc: <>

        <p>
  Highly versatile and energy-efficient, allowing individual temperature control in different zones.


</p>
 
 
      </>,
      icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4'
    },

  
    {
      title: ' Air Handling Units (AHUs)',
      desc: <>

        <p>
 Custom-engineered solutions for precise air treatment and distribution, often integrated with other systems.


</p>
 
 
      </>,
      icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4'
    },

  
    {
      title: 'Precision AC Units',
      desc: <>

        <p>
  For critical environments like server rooms, where temperature and humidity control are paramount.

</p>
 
 
      </>,
      icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4'
    },

  
    
  
  ];


  const ClientReferences = [

    {

      description: <>
        <p> 
        <span className=' font-bold text-lg   text-cyan-700' >Turnkey Expertise (Design, Supply, Installation, Maintenance)
</span> <br />

        <strong className=' font-semibold  text-cyan-700'>
        The Difference : </strong> 
       A true leader handles everything from concept to commissioning and beyond. They don't just sell you a unit; they engineer a complete climate control solution.

</p>


        <p> 
       

        <strong className=' font-semibold  text-cyan-700'>
     Adhunik Powertech's Approach : </strong> 
      We act as your complete Central Air Conditioning contractor. Our in-house engineers conduct meticulous site assessments, design custom layouts for optimal airflow and energy use, expertly source and supply premium equipment, manage professional installation, and provide robust Annual Maintenance Contracts (AMC) to ensure longevity.

</p>

      </> ,
    },

   
  
    {

      description: <>
        <p> 
        <span className=' font-bold text-lg   text-cyan-700' >
      Proven Experience with Commercial & Industrial Projects
</span> <br />

        <strong className=' font-semibold  text-cyan-700'>
        The Difference :  </strong> 
   Central Air Conditioning for a large office building or factory is vastly different from a residential setup. You need a contractor with a track record in complex, large-scale projects.

</p>


        <p> 
       

        <strong className=' font-semibold  text-cyan-700'>
     Adhunik Powertech's Experience : </strong> 
      Since 2005, we have been a trusted name in the <Link href='/hvac' className=' font-semibold texcy'>
        HVAC
      </Link>  industry, renowned for delivering sophisticated Central Air Conditioning solutions for hotels, hospitals, corporate offices, data centers, manufacturing units, and commercial complexes across Delhi, Gurugram, Noida, Faridabad, Ghaziabad, Jaipur, and Chandigarh. Our portfolio speaks for itself.

</p>

      </> ,
    },

   
  
    {

      description: <>
        <p> 
        <span className=' font-bold text-lg   text-cyan-700' >
    Focus on Energy Efficiency & Cost Savings
</span> <br />

        <strong className=' font-semibold  text-cyan-700'>
        The Difference :  </strong> 

  A top contractor actively seeks out and recommends systems that provide optimal cooling with minimal power consumption, helping you save significantly on utility bills.

</p>


        <p> 
       

        <strong className=' font-semibold  text-cyan-700'>
      Adhunik Powertech's Commitment : </strong> 
     We specialize in energy-efficient Central Air Conditioning systems, including advanced Chillers and VRF/VRV units. Our designs are optimized to reduce your carbon footprint and operational costs without compromising comfort.


</p>

      </> ,
    },

   
  
    {

      description: <>
        <p> 
        <span className=' font-bold text-lg   text-cyan-700' >
   Emphasis on Indoor Air Quality (IAQ)
</span> <br />

        <strong className=' font-semibold  text-cyan-700'>
        The Difference :  </strong> 

   Modern clients demand more than just cool air; they want healthy air. A leading contractor integrates features for superior air filtration, ventilation, and humidity control.

</p>


        <p> 
       

        <strong className=' font-semibold  text-cyan-700'>
       Adhunik Powertech's Solution : </strong> 
  Our Central Air Conditioning systems are designed not only for comfort but also for health. We incorporate state-of-the-art filtration and ventilation strategies to ensure your indoor environment is fresh, clean, and free of allergens and airborne contaminants.


</p>

      </> ,
    },

   
  
    {

      description: <>
        <p> 
        <span className=' font-bold text-lg   text-cyan-700' >
   Compliance and Certifications
</span> <br />

        <strong className=' font-semibold  text-cyan-700'>
        The Difference :  </strong> 

  Ensures your system meets all national and local safety and performance standards.

</p>


        <p> 
       

        <strong className=' font-semibold  text-cyan-700'>
        Adhunik Powertech's Assurance :  </strong> 
  
  Our equipment and installations adhere to rigorous industry standards and building codes, ensuring your system is safe, efficient, and compliant.



</p>

      </> ,
    },

   
  
  
    {

      description: <>
        <p> 
        <span className=' font-bold text-lg   text-cyan-700' >
  Robust After-Sales Service & Support
</span> <br />

        <strong className=' font-semibold  text-cyan-700'>
        The Difference :  </strong> 

   Even the best systems need ongoing care. A reliable contractor offers responsive support and comprehensive maintenance plans.

</p>


        <p> 
       

        <strong className=' font-semibold  text-cyan-700'>
        Adhunik Powertech's Promise :  </strong> 
  
 Our dedicated service team provides rapid response and flexible AMC options, keeping your Central Air Conditioning system running flawlessly year after year across the entire Delhi NCR region.


</p>

      </> ,
    },

   
  
 
  
   
  ];
 


  const KeyTakeaways = [

    {
        title:"Smarter Design & Proactive Problem-Solving : ",
      description: "Our extensive experience allows us to anticipate on-site challenges before they become costly problems—be it structural integration issues or complex coordination with other trades. This foresight leads to more efficient, cost-effective, and reliable system designs.",
    },
   
   
    {
      title:"Flawless Execution & On-Site Management : ",
      description: "Having managed hundreds of complex installations, our on-site execution is defined by precision, safety, and an unwavering commitment to meeting deadlines. Our project managers have the experience to manage workflows smoothly and maintain clear, transparent communication with clients at every stage.",
    },
   
   
    {
      title:"Guaranteed Compliance & Peace of Mind : ",
      description: " Navigating the complex web of national and international standards is a critical aspect of any major HVAC project. Our team has an intrinsic, hands-on understanding of ISHRAE, ASHRAE, NBC, and CPWD guidelines. This is the level of detail a top-tier HVAC contractor provides, guaranteeing your project is fully compliant from day one and protecting your investment.",
    },
   
   
   
    
  ];

  
  return (
    <>

      <div className="bg-gradient-to-b mt-24  ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          {/* Hero Section */}
          <section className="flex flex-col md:flex-row gap-8 items-center mb-16">
            <div className=" w-full md:w-6/12">

              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Commercial HVAC System"
                
                loading="lazy"
              
                className="w-full h-auto rounded-xl "
                
              />

            </div>


            <div className=" w-full md:w-6/12">

              <h1 className=" text-lg md:text-2xl text-center md:text-left font-bold text-cyan-800 mb-6 leading-tight">
          Beyond the Blueprint : The DNA of a Successful HVAC Project

              </h1>

              <p className=" w-full  text-sm text-gray-700 mb-6 text-justify md:text-left ">

       Every large-scale HVAC project begins with a blueprint—a detailed map of ducts, chillers, and airflow calculations. But what truly separates a merely functional system from a high-performance, long-term asset? What are the unseen elements that define a project's ultimate success ?

              </p>

              <p className=" w-full  text-sm text-gray-700 mb-6 text-justify md:text-left ">
    
The answer lies beyond the technical drawings, in the deep-seated engineering philosophy and the institutional knowledge of the team executing the project. At 
 {" "} <Link href='/' className=' text-cyan-500 hover:text-cyan-800'>
  Adhunik HVAC Projects
</Link> {" "},
 we believe that choosing the right HVAC contractor is about more than just the blueprint; it's about partnering with a team whose experience informs every decision.

              </p>

             
            </div>

          </section>

          {/* Key Takeaways */}



          <section className="mb-16 bg-white p-3 md:p-8 rounded-xl shadow-md border border-cyan-100">

           <h2 className=' text-xl pb-2  text-cyan-600'>
            Our Connection : A Legacy Reimagined
           </h2>

            <p className=' text-sm pb-4 text-justify'>
  The ability to seamlessly execute complex turnkey projects isn't learned overnight. It is forged over years of experience. The engineering DNA at the core of our identity was developed and refined over nearly two decades as the projects division of the renowned <Link href='https://www.adhunikpowertech.com/' className=' text-cyan-500 hover:text-cyan-800'>
  Adhunik Powertech
</Link>  {" "},
 
</p>
           
            <p className=' text-sm pb-4 text-justify'>
 In a strategic evolution designed to provide greater focus and specialized expertise, the entire award-winning projects division of Adhunik Powertech—including its team, its 19+ year legacy, and its portfolio of over 600 successfully delivered projects—was restructured to form a new, dedicated company.

</p>
           
         
            <p className=' text-sm pb-4 text-justify'>
That company is Adhunik HVAC Projects, a new breed of specialized HVAC contractor. 
<br />
<br />
We are not just affiliated with our predecessor; we are the legacy, reimagined as a focused specialist under our new banner, Adhunik Guds & Services Private Limited. This history is the bedrock of our expertise, and it’s a foundation we are proud to build upon.
<br />
<br />
To understand the full scope of the engineering heritage and the foundational work our team has been a part of since 2005, we invite you to explore the legacy of our renowned predecessor.

</p>
           
         
          </section>


          <section className="mb-16 bg-white p-3 md:p-8 rounded-xl shadow-md border border-cyan-100">
            <p className="  md:text-2xl  text-center md:text-left  font-bold text-cyan-800 mb-6 pb-2 border-b-2 border-cyan-200">
              <span className="border-cyan-600      text-white px-2 py-1 rounded-md">
            
            <Link href='https://www.adhunikpowertech.com/our-Company' className=' text-cyan-500 hover:text-cyan-800'>
   Discover the 19+ year legacy that forged our expertise at Adhunik Powertech
</Link>

      

              </span>
            </p>

 <h2 className=' text-xl pb-2  text-cyan-600'>
         How Our Legacy Translates to Your Project's Success

           </h2>

            <p className=' text-sm pb-4 text-justify'>

    Today, as a focused company, we channel this rich history into a modern, agile, and client-centric project management process. Our legacy isn’t just a talking point; it’s a tangible asset that delivers concrete advantages for your project.

</p>
           
          
            <ul className="space-y-4 pt-2">
              {KeyTakeaways.map((item, index) => (

                <li key={index} className="flex py-2   items-start md:items-center ">
                  <span className="flex-shrink-0 bg-cyan-100 text-cyan-800 rounded-full p-2 mr-3">

                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>

                  </span>

                  <span className="text-gray-700 text-justify text-sm  md:font-medium">
                 <strong className=' font-bold  text-cyan-600'> {item.title} </strong> {item.description}
                  </span>

                </li>
              ))}
            </ul>

               

          </section>

          {/* Main Content */}
          <div className="space-y-16">
          
            <section className="bg-white md:p-8 p-3 rounded-xl shadow-md">
             

              <div className="mt-8">
                <h3 className="md:text-2xl font-semibold text-cyan-700 mb-4 text-center md:text-left">

        While Adhunik HVAC Projects

                </h3>
                <p className="text-gray-600 mb-4 text-sm text-justify md:text-left">

          represents the future of specialized project execution, our strength comes from a past dedicated to engineering excellence. A successful project is the perfect synthesis of a great plan and a team with the proven experience to bring it to life.



 </p>

 
 

                

              </div>
            </section>



            



   


 



          


        



            {/* CTA Section */}
            <section className="bg-gradient-to-r from-cyan-600 to-cyan-800 rounded-xl p-8 text-white shadow-lg">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="  text-xl md:text-2xl font-bold mb-4"> Ready to partner with an HVAC contractor whose expertise is built on an award-winning legacy ? 
</h2>
                <p className="text-cyan-100 text-justify mb-8 text-sm ">
   Contact us today to leverage our expertise. We offer a free consultation to help you

assess your specific cooling requirements. Let's keep your operations running cool!
  </p>
        

           
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a
                    href="tel:8287885885"
                    className="bg-white text-sm md:text-md font-bold text-cyan-800 hover:bg-cyan-100  py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Contact  Expert
                  </a>
                  <Link
                    href="/support-form"
                    className="bg-cyan-900 text-sm md:text-md hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center border border-cyan-700"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Enquiry Now
                  </Link>
                </div>
              </div>
            </section>

 



          </div>
        </div>
      </div>
    </>
  )
}
