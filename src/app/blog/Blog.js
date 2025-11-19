"use client";
import Link from 'next/link';
import React from 'react';
export default function Blog() {
  const blogData = [

    {
      id: 1,
      title: "Award-Winning HVAC Contractor | Adhunik HVAC Projects",

      date: "September  2025",
      image: "",

      link: "/award-winning-hvac-contractor",

      img: "https://images.unsplash.com/photo-1648587096714-170302c4c922?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

   {
      id: 2,
      title: "Top HVAC Contactor In Gurugram | Adhunik HVAC Projects",

      date: "October  2025",
      image: "",

      link:  "/top-hvac-contractor-in-gurugram",

      img: "https://images.pexels.com/photos/1768073/pexels-photo-1768073.jpeg",
    },

  {
      id: 3,
      title: "Top HVAC Contractor in Delhi NCR | Adhunik HVAC Projects",

      date: "October  2025",
      image: "",

      link:  "/top-hvac-contractor-delhi-in-ncr",

      img: "https://images.pexels.com/photos/2539462/pexels-photo-2539462.jpeg",
    },

    {
      id: 4,
      title: "What an HVAC Contractor Does | Adhunik HVAC Projects",

      date: "Nov 2025",
      image: "",

      link:  "/what-does-an-hvac-contractor-do",

      img: "https://res.cloudinary.com/dxenuee4n/image/upload/v1762157380/hvaccontractor_vvwwh6.webp",
    },
    {
      id: 5,
      title: "HVAC SOLUTION UNDER ONE ROOF | Turnkey Excellence by Adhunik HVAC Projects",
      date: "Nov 2025",
      image: "",
      link:  "/hvac-solution-under-one-roof",

      img: "https://res.cloudinary.com/dxenuee4n/image/upload/v1762500165/hvacsolution2_g54clt.jpg",
    },

     {
      id: 6,
      title: "How to Maintain Peak HVAC Performance in Low Temperatures | Adhunik HVAC Projects",
      date: "Nov 2025",
      image: "",
      link:  "/maintain-hvac-performance-in-low-temps",

      img: "https://res.cloudinary.com/dxenuee4n/image/upload/v1763536710/hvac-performance_xwirpr.webp",
    },
      {
      id: 7,
      title: "Modular vs. Centralized HVAC: The Smart Choice | Adhunik HVAC Projects",
      date: "Nov 2025",
      image: "",
      link:  "/modular-vs-centralized-hvac",

      img: "https://res.cloudinary.com/dxenuee4n/image/upload/v1763546606/modular-vs-centralized-hvac_pyr2kb.webp",
    },
  ];

  return (
    <>
      <div className="container  mt-28 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-7xl mx-auto text-center ">
          <h1 className="text-2xl py-3 mb-4 font-bold md:text-4xl md:leading-tight text-transparent bg-clip-text bg-gradient-to-r to-[#06b6d4] from-[#0ea5e9] ">
            {" "}
            Featured Blogs{" "}
          </h1>

          <div className="grid  sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogData.reverse().map((blog) => (
              <Link
                key={blog.id}
                className="group border border-cyan-500 relative flex flex-col w-full  bg-cover bg-center rounded-xl hover:shadow-lg transition"
                href={blog.link}
                style={{
                  backgroundImage: `url('${blog.image}')`,
                }}
              >
                <div className="pt-0 p-4 md:p-6">
                  <div className="card w-full max-w-sm overflow-hidden rounded-md bg-white">
                    <div className="w-full h-60 flex items-center justify-center bg-gray-100">

                      <img
                        src={blog.img}
                        alt={blog.title}
                        className="w-full h-full object-contain rounded-md"
                        loading="lazy"
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
  );
}
