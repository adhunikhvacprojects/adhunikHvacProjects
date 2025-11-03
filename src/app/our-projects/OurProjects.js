'use client'
import Link from 'next/link';
import React, { useEffect } from 'react'

export default function OurProjects() {


  const industrialSectors = [
    {
      id: 1,
      mainImageSrc: "https://res.cloudinary.com/dxenuee4n/image/upload/v1761913271/industrial_sector_jloydk.webp",
      mainText: "Industrial Sector",
      features: [
        {
          imgSrc: "https://res.cloudinary.com/dxenuee4n/image/upload/v1761913267/bkt_rtm5hi.webp",
          title: "BKT Tires",
          location: "Bhuj, Gujarat",
        },
        {
          imgSrc: "https://res.cloudinary.com/dxenuee4n/image/upload/v1761913279/maruti_suzuki_zitm3w.jpg",
          title: "Maruti",
          location: "Manesar, Haryana",
        },
        {
          imgSrc: "https://res.cloudinary.com/dxenuee4n/image/upload/v1761913294/whirlpool_xga8lg.webp",
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
      mainImageSrc: "https://res.cloudinary.com/dxenuee4n/image/upload/v1761913272/institutional_sector_mh6wt6.webp",
      mainText: "Institutional Sector",
      features: [
        {
          imgSrc: "https://res.cloudinary.com/dxenuee4n/image/upload/v1761913295/wtcm_sfjxzs.webp ",
          title: "WCTM - Engineering  ",
          location: "College, Gurgaon, Haryana",
        },
        {
          imgSrc: "https://res.cloudinary.com/dxenuee4n/image/upload/v1761913289/SRHU_Medical_College_myyhcp.webp",
          title: "SRHU Medical College ",
          location: "Dehradun, Uttrakand",
        },
        {
          imgSrc: "https://res.cloudinary.com/dxenuee4n/image/upload/v1761913266/Adarsh_Shiksha_Niketan_xycioc.webp ",
          title: " Adarsh Shiksha Niketan  ",
          location: <> Senior Secondary School <br />  Delhi</>,
        },
        {
          imgSrc: "https://res.cloudinary.com/dxenuee4n/image/upload/v1761913282/Noida_International_osjaio.webp",
          title: "Noida International  ",
          location: "University, Greater Noida ",
        },
      ],
    },
    // Add more sections here if needed
    {
       id: 3,
      mainImageSrc: "https://res.cloudinary.com/dxenuee4n/image/upload/v1761913270/Hospitals_vr8ovy.webp",
      mainText: " Hospitals",
      features: [
        {
          imgSrc: "https://res.cloudinary.com/dxenuee4n/image/upload/v1761913286/Positron_vulxzi.webp",
          title: " Positron Super ",
          location: <>
            Speciality & Cancer <br />
            Hospital, Rohtak, Haryana
          </>,
        },
        {
          imgSrc: "https://res.cloudinary.com/dxenuee4n/image/upload/v1761913288/Sita_Ram_Bhartia_qq14d0.webp ",
          title: "Sita Ram Bhartia",
          location: <>
            Institute & Research Center
            <br /> Delhi
          </>,
        },
        {
          imgSrc: "https://res.cloudinary.com/dxenuee4n/image/upload/v1761913263/Aarvy_Hospital_gk7uac.webp",
          title: " Aarvy Hospital",
          location: "Manesar, Haryana",
        },
        {
          imgSrc: "https://res.cloudinary.com/dxenuee4n/image/upload/v1761913277/Kamal_Hospital_rxz8ut.webp ",
          title: "Kamal Hospital ",
          location: "Vaishali, Uttar Pradesh",
        },
      ],
    },
    // Add more sections here if needed
    {
      id: 4,
      mainImageSrc: "https://res.cloudinary.com/dxenuee4n/image/upload/v1761913284/Pharma_foods_o9wpfu.webp",
      mainText: "Pharma & Foods",
      features: [
        {
          imgSrc: "https://res.cloudinary.com/dxenuee4n/image/upload/v1761913264/Abdos__abtech_d1cvfi.webp",
          title: " Abdos Labtech,",
          location: "Roorkee, Uttarakhand",
        },
        {
          imgSrc: " https://res.cloudinary.com/dxenuee4n/image/upload/v1761913278/Lotus_Professional_wbtkph.webp",
          title: "Lotus Professional",
          location: "Haridwar, Uttrakhand",
        },
        {
          imgSrc: "https://res.cloudinary.com/dxenuee4n/image/upload/v1761913273/Johnson_Johnson_mcgmwp.webp",
          title: "Johnson & Johnson",
          location: "Baddi, Himachal",
        },
        {
          imgSrc: "https://res.cloudinary.com/dxenuee4n/image/upload/v1761913274/Jubilant_Noida_nird74.webp",
          title: "Jubilant, Noida",
          location: " Uttar Pradesh ",
        },
      ],
    },
    // Add more sections here if needed
    {
      id: 5,
      mainImageSrc: "https://res.cloudinary.com/dxenuee4n/image/upload/v1761913287/Residential_Buildings_fvkyb8.webp ",
      mainText: " Residential Buildings",
      features: [
        {
          imgSrc: "https://res.cloudinary.com/dxenuee4n/image/upload/v1761913292/Suncity_Parikarma_zalp03.webp ",
          title: " Suncity Parikarma",
          location: " Panchkula, Haryana",
        },
        {
          imgSrc: " https://res.cloudinary.com/dxenuee4n/image/upload/v1761913293/Synera_cqtv2s.webp ",
          title: "Synera",
          location: "  Gurgaon, Haryana ",
        },
        {
          imgSrc: "https://res.cloudinary.com/dxenuee4n/image/upload/v1761913283/Orchard_Avenue_ofbsvl.webp",
          title: "Orchard Avenue",
          location: " Gurgaon, Haryana ",
        },
        {
          imgSrc: "https://res.cloudinary.com/dxenuee4n/image/upload/v1761913269/Grand_IVA_auomin.webp",
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
          imgSrc: "https://res.cloudinary.com/dxenuee4n/image/upload/v1761913292/Success_Tower_bwtvdz.webp ",
          title: " Success Tower",
          location: "Gurgaon, Haryana ",
        },
        {
          imgSrc: "https://res.cloudinary.com/dxenuee4n/image/upload/v1761913265/ACME_kfcjgz.webp",
          title: "ACME",
          location: "Gurgaon, Haryana",
        },
        {
          imgSrc: "https://res.cloudinary.com/dxenuee4n/image/upload/v1761913279/Luminous_odqr1b.webp",
          title: "Luminous",
          location: "Gurgaon, Haryana",
        },
        {
          imgSrc: "https://res.cloudinary.com/dxenuee4n/image/upload/v1761913275/Kalyan_Herbal_li6zdx.webp",
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
