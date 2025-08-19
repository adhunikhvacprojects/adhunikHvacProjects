"use client"
import Link from "next/link";

export default function Blog() {
  const blogData = [

    {
      id: 1,
      title: "What is an Air Washer ?",

      date: "January  2025",
      image:
        "",
      link: "/what-is-an-air-washer",
      img: "/awb.png",
    },

    {
      id: 2,
      title: "What is a Ducted Air Cooler ?",

      date: "January 2025",
      image:
        "",
      link: "/what-is-a-ducted-air-cooler",
      img: "https://res.cloudinary.com/ddkyx2jhh/image/upload/v1747477707/ac4_txhqpt.webp",
    },

    {
      id: 3,
      title: "What is Panel Air Conditioners ?",

      date: "February  2025",
      image:
        "",
      link: "/what-is-panel-air-conditioners",
      img: "/pab.png",
    },
    {
      id: 4,
      title: "What is HVAC? Guide for Beginners",

      date: "February 2025",
      image:
        "",
      link: "/what-is-hvac?",
      img: "/WhatisHVAC.webp",
    },

    {
      id: 5,
      title: "How to Choose HVAC Contractor in India ?",

      date: "March 2025",
      image:
        "",
      link: "/10-tips-for-choosing-an-HVAC-contractor-in-india",
      img: "/tips10.webp",
    },
    {
      id: 6,
      title: "Award-Winning Services in the HVAC Industry ",

      date: "March  2025",
      image:
        "",
      link: "/india-business-award-2025",
      img: "/blog/ibaaward2.webp",
    },

    {
      id: 7,
      title: "Understanding HVAC and Finding the Right Contractor in India",


      date: "April  2025",
      image:
        "",
      link: "/hire-The-Right-HVAC-Contractor-in-India",
      img: "/UnderstandingHVAC.webp",
    },

    {
      id: 8,
      title: "Top HVAC Contractor Across Delhi NCR and India ",


      date: "April  2025",
      image:
        "",
      link: "/top-HVAC-Contractor-Across-Delhi-NCR-and-India",
      img: "/hvac-contractor.webp",
    },
    {
      id: 9,
      title: "Choosing the Best HVAC Contractor for Your Commercial and Industrial Space ",


      date: "May  2025",
      image:
        "",
      link: "/choosing-the-best-HVAC-contractor-for-your-commercial-and-industrial-space",
      img: "https://res.cloudinary.com/ddkyx2jhh/image/upload/v1748256475/hvac_x2sop2.webp",
    },
    {
      id: 10,
      title: "How Smart HVAC Design Integrates Seamlessly with Modern Interior Aesthetics ",


      date: "June  2025",
      image:
        "",
      link: "/hvac-luxury-interior-design",
      img: "https://images.unsplash.com/photo-1687180497716-5872969e5125?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 11,
      title: "BLDC Fan vs. Normal Fan: Save Up To 65% | Adhunik Air Care",


      date: "July  2025",
      image:
        "",
      link: "/difference-between-bldc-and-normal-fan",
      img: "https://res.cloudinary.com/ddkyx2jhh/image/upload/v1752217844/blog15_esyemu.webp",
    },

    {
      id: 12,
      title: "HVAC Excellence: 20 Years of Innovation",


      date: "July  2025",
      image:
        "",
      link: "/hvac-thumb-rule-and-formulas",
      img: "https://res.cloudinary.com/ddkyx2jhh/image/upload/v1752651101/formulas_paeknf.webp",
    },

    {
      id: 14,
      title: "Top Fire Fighting Contractors in Delhi | Adhunik FireXpert",


      date: "Aug  2025",
      image:
        "",
      link: "/top-fire-fighting-contractors-in-delhi",
      img: "https://res.cloudinary.com/dgx5cntyb/image/upload/v1746618767/topfire_jx2sgb.webp",
    },


  ];

  return (
    <>
      <div className="container  mt-28 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

        <div className="max-w-7xl mx-auto text-center ">
          <h1 className="text-2xl py-3 mb-4 font-bold md:text-4xl md:leading-tight text-transparent bg-clip-text bg-gradient-to-r to-[#06b6d4] from-[#0ea5e9] "> Featured Blogs </h1>


          <div className="grid  sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogData.reverse().map((blog) => (
              <Link
                key={blog.id}
                className="group border border-cyan-500 relative flex flex-col w-full  bg-cover bg-center rounded-xl hover:shadow-lg transition"

                href={blog.link}
                style={{
                  backgroundImage: `url('${blog.image}')`

                  ,
                }}
              >

                <div className="pt-0 p-4 md:p-6">
                  <div className="card w-full max-w-sm overflow-hidden rounded-md bg-white">
                    <div className="w-full h-60 flex items-center justify-center bg-gray-100">
                      <img
                        src={blog.img}
                        alt={blog.title}
                        className="w-full h-full object-contain rounded-md"
                        loading='lazy'
                        height="300"
                        width="300"
                      />
                    </div>
                  </div>



                  <div className=" mt-4  text-start flex flex-col">
                    <h2 className="text-cyan-800 group-hover:text-gray-500 font-semibold  font-sans">

                      {blog.title}
                    </h2>
                    <div className="date text-[14px] mt-1 font-sans text-cyan-700">

                      {blog.date}
                    </div>
                  </div>




                </div>

              </Link>
            ))}

          </div>
        </div>
        {/* End Title */}


      </div>
    </>
  )
}
