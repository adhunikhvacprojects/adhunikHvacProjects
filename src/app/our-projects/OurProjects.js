'use client'
import Link from 'next/link';
import React, { useEffect } from 'react'

export default function OurProjects() {


  const industrialSectors = [
    {
      id: 1,
      mainImageSrc: "/projects/16.webp",
      mainText: "Industrial Sector",
      features: [
        {
          imgSrc: " projects/13.webp ",
          title: "BKT Tires",
          location: "Bhuj, Gujarat",
        },
        {
          imgSrc: "projects/27.jpeg",
          title: "Maruti",
          location: "Manesar, Haryana",
        },
        {
          imgSrc: "projects/28.webp ",
          title: "Whirlpool",
          location: "Faridabad, Haryana",
        },
        {
          imgSrc: "projects/25.webp",
          title: "Kajaria",
          location: "Sikandrabad, Uttar Pradesh",
        },
      ],
    },
    // Add more sections here if needed
    {
      id: 2,
      mainImageSrc: "projects/19.webp",
      mainText: "Institutional Sector",
      features: [
        {
          imgSrc: " /projects/24.webp ",
          title: "WCTM - Engineering  ",
          location: "College, Gurgaon, Haryana",
        },
        {
          imgSrc: "/projects/22.webp",
          title: "SRHU Medical College ",
          location: "Dehradun, Uttrakand",
        },
        {
          imgSrc: "/projects/11.webp ",
          title: " Adarsh Shiksha Niketan  ",
          location: <> Senior Secondary School <br />  Delhi</>,
        },
        {
          imgSrc: "projects/17.webp",
          title: "Noida International  ",
          location: "University, Greater Noida ",
        },
      ],
    },
    // Add more sections here if needed
    {
      id: 3,
      mainImageSrc: "/projects/15.webp",
      mainText: " Hospitals",
      features: [
        {
          imgSrc: "projects/26.webp",
          title: " Positron Super ",
          location: <>
            Speciality & Cancer <br />
            Hospital, Rohtak, Haryana
          </>,
        },
        {
          imgSrc: "/projects/21.webp ",
          title: "Sita Ram Bhartia",
          location: <>
            Institute & Research Center
            <br /> Delhi
          </>,
        },
        {
          imgSrc: " projects/35.webp ",
          title: " Aarvy Hospital",
          location: "Manesar, Haryana",
        },
        {
          imgSrc: " projects/34.webp ",
          title: "Kamal Hospital ",
          location: "Vaishali, Uttar Pradesh",
        },
      ],
    },
    // Add more sections here if needed
    {
      id: 4,
      mainImageSrc: "projects/18.webp",
      mainText: "Pharma & Foods",
      features: [
        {
          imgSrc: " /projects/30.webp ",
          title: " Abdos Labtech,",
          location: "Roorkee, Uttarakhand",
        },
        {
          imgSrc: " /projects/32.webp ",
          title: "Lotus Professional",
          location: "Haridwar, Uttrakhand",
        },
        {
          imgSrc: "/projects/31.webp",
          title: "Johnson & Johnson",
          location: "Baddi, Himachal",
        },
        {
          imgSrc: "/projects/29.webp ",
          title: "Jubilant, Noida",
          location: " Uttar Pradesh ",
        },
      ],
    },
    // Add more sections here if needed
    {
      id: 5,
      mainImageSrc: "/projects/20.webp ",
      mainText: " Residential Buildings",
      features: [
        {
          imgSrc: " /projects/36.webp ",
          title: " Suncity Parikarma",
          location: " Panchkula, Haryana",
        },
        {
          imgSrc: " /projects/37.webp ",
          title: "Synera",
          location: "  Gurgaon, Haryana ",
        },
        {
          imgSrc: "/projects/38.webp",
          title: "Orchard Avenue",
          location: " Gurgaon, Haryana ",
        },
        {
          imgSrc: "/projects/39.webp",
          title: "Grand IVA",
          location: "Gurgaon, Haryana",
        },
      ],
    },

    // Add more sections here if needed
    {
      id: 6,
      mainImageSrc: "projects/14.webp",
      mainText: " Commercial Spaces ",
      features: [
        {
          imgSrc: " /projects/23.webp ",
          title: " Success Tower",
          location: "Gurgaon, Haryana ",
        },
        {
          imgSrc: "/projects/12.webp",
          title: "ACME",
          location: "Gurgaon, Haryana",
        },
        {
          imgSrc: "/projects/33.webp",
          title: "Luminous",
          location: "Gurgaon, Haryana",
        },
        {
          imgSrc: "/projects/40.webp",
          title: "Kalyan Herbal",
          location: "Gurgaon, Haryana",
        },
      ],
    },

    // Add more sections here if needed
  ];


  return (
    <>
    

     <div className="row   mt-36">

        <h1 className=" text-4xl md:text-5xl  font-sans py-3 w-full text-center text-cyan-900 capitalize "> SOME OF OUR PROJECTS
        </h1>

        <div className="card justify-center flex items-center">

          <p className=" text-[15px] px-4 md:px-0  md:w-[75%]  font-sans py-3  text-center text-cyan-900 capitalize "> As a leading HVAC contractor, ADHUNIK HVAC PROJECTS is committed to delivering innovative solutions that optimize indoor environments. With a strong track record in the industry, we have successfully executed projects across diverse sectors, including industrial, institutional, healthcare, pharmaceutical, food processing, residential, and commercial spaces. Our team of skilled professionals is dedicated to providing energy-efficient, sustainable, and reliable HVAC systems that enhance comfort and productivity.
          </p>

        </div> 

        <div className="row"> 
          <div>
            {industrialSectors.map((sector) => (

              <div key={sector.id} className="max-w-screen-xl mx-auto py-8 px-4 lg:py-16 lg:px-6">
                <div className="flex flex-col md:flex-row">
                  {/* Main Image */}
                  <div className="mr-0 md:mr-8 mb-6 md:mb-0 lg:w-[45%]">
                    <img
                      className="lg:w-auto h-72 lg:h-96 mx-auto"
                      src={sector.mainImageSrc}
                      loading="lazy"
                       height={300}
                  width={500}
                      alt="can_help_banner"
                    />

                    <h2 className=" text-2xl bg-clip-text text-transparent bg-gradient-to-r to-[#0093E9] from-[#5bbcb0] uppercase">    {sector.mainText} </h2>


                  </div>
                  {/* Features List */}
                  <div className="flex-1 flex flex-col sm:flex-row flex-wrap -mb-4 -mx-2">
                    {sector.features.map((feature, index) => (
                      <div
                        key={index}
                        className="w-full sm:w-1/2 mb-4 px-2 justify-center items-center flex"
                      >
                        <div className="h-full rounded-br-xl">
                          <img
                            src={feature.imgSrc}
                            loading="lazy"
                             height={300}
                  width={500}
                            className="h-32 rounded-tl-lg rounded-br-lg object-center object-fill"
                            alt={feature.title}
                          />
                          <p className="text-sm">
                            {feature.title} <br />
                            {feature.location}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
 
        </div>
 
      </div>
    
    </>
  )
}
