"use client"

import Image from 'next/image';
import React from 'react'
import { useEffect, useRef, useState } from 'react';

export default function page() {

  const products = [
    {
      src: "https://res.cloudinary.com/dxenuee4n/image/upload/v1761906135/whirlpool_lmjnd1.webp",
      alt: "whirlpool-logo",
      borderColor: "border-yellow-500", // Custom border color
    },
   
    {
      src: "https://res.cloudinary.com/dxenuee4n/image/upload/v1761906110/suncity_projects_gwqztp.webp",
      alt: " Suncity Projects logo with the tagline creating spaces that live,featuring a red sphere and white city skyline",
      borderColor: "border-yellow-500", // Custom border color
    },
   
    {
      src: "https://res.cloudinary.com/dxenuee4n/image/upload/v1761905915/bigbasket_lmbieu.webp",
      alt: "Ducted Air Coolers",
      borderColor: "border-yellow-500", // Custom border color
    },
   
    {
      src: "https://res.cloudinary.com/dxenuee4n/image/upload/v1761905980/jll_xd8me5.webp",
      alt: "Ducted Air Coolers",
      borderColor: "border-yellow-500", // Custom border color
    },
   
    {
      src: "https://res.cloudinary.com/dxenuee4n/image/upload/v1761905985/johnson_Johnson_twzqpi.webp",
      alt: "Ducted Air Coolers",
      borderColor: "border-yellow-500", // Custom border color
    },
   
    {
      src: "https://res.cloudinary.com/dxenuee4n/image/upload/v1761905879/aarvy_healthcare_xklofo.webp",
      alt: "Ducted Air Coolers",
      borderColor: "border-yellow-500", // Custom border color
    },
   
    {
      src: "https://res.cloudinary.com/dxenuee4n/image/upload/v1761905884/abdos_life_science_apdaci.webp",
      alt: "Ducted Air Coolers",
      borderColor: "border-yellow-500", // Custom border color
    },
   
    {
      src: "https://res.cloudinary.com/dxenuee4n/image/upload/v1761905888/acme_abpt5s.webp",
      alt: "Ducted Air Coolers",
      borderColor: "border-yellow-500", // Custom border color
    },
   
    {
      src: "https://res.cloudinary.com/dxenuee4n/image/upload/v1761905892/aedi_vr7bsz.webp",
      alt: "Ducted Air Coolers",
      borderColor: "border-yellow-500", // Custom border color
    },
   
    {
      src: "https://res.cloudinary.com/dxenuee4n/image/upload/v1761905896/ais_mkkzbp.webp",
      alt: "Ducted Air Coolers",
      borderColor: "border-yellow-500", // Custom border color
    },
   
    {
      src: "https://res.cloudinary.com/dxenuee4n/image/upload/v1761905901/akums_ubivsx.webp",
      alt: "Ducted Air Coolers",
      borderColor: "border-yellow-500", // Custom border color
    },
   
    {
      src: "https://res.cloudinary.com/dxenuee4n/image/upload/v1761905905/alp_ztstsx.webp",
      alt: "Ducted Air Coolers",
      borderColor: "border-yellow-500", // Custom border color
    },
   
    {
      src: "https://res.cloudinary.com/dxenuee4n/image/upload/v1761905920/bkt_kg9ukj.webp",
      alt: "Ducted Air Coolers",
      borderColor: "border-yellow-500", // Custom border color
    },
   
    {
      src: "https://res.cloudinary.com/dxenuee4n/image/upload/v1761905910/amul_doayeh.webp",
      alt: "Ducted Air Coolers",
      borderColor: "border-yellow-500", // Custom border color
    },
   
    {
      src: "https://res.cloudinary.com/dxenuee4n/image/upload/v1761905905/alp_ztstsx.webp",
      alt: "Ducted Air Coolers",
      borderColor: "border-yellow-500", // Custom border color
    },
   
   
    {
      src: "https://res.cloudinary.com/dxenuee4n/image/upload/v1761905924/borosil_ackrbu.webp",
      alt: "Ducted Air Coolers",
      borderColor: "border-yellow-500", // Custom border color
    },
   
   
    {
      src: "https://res.cloudinary.com/dxenuee4n/image/upload/v1761905928/bptp_ulhzcy.webp",
      alt: "Ducted Air Coolers",
      borderColor: "border-yellow-500", // Custom border color
    },
   
    {
      src: "https://res.cloudinary.com/dxenuee4n/image/upload/v1761905932/brookfield_lhr2g0.webp",
      alt: "Ducted Air Coolers",
      borderColor: "border-yellow-500", // Custom border color
    },
   
    {
      src: "https://res.cloudinary.com/dxenuee4n/image/upload/v1761905936/cbre_hah5me.webp",
      alt: "Ducted Air Coolers",
      borderColor: "border-yellow-500", // Custom border color
    },
   
    {
      src: "https://res.cloudinary.com/dxenuee4n/image/upload/v1761905940/dav_ldqsod.webp",
      alt: "Ducted Air Coolers",
      borderColor: "border-yellow-500", // Custom border color
    },
   
    { 
      src: "https://res.cloudinary.com/dxenuee4n/image/upload/v1761905944/dell_bpn6ht.webp", 
     alt: "Air Purifiers", 
     borderColor: "border-blue-500"
    },
    
    { 
      src: "https://res.cloudinary.com/dxenuee4n/image/upload/v1761905949/diamond_electric_vplbea.webp", 
     alt: "Air Conditioners", 
     borderColor: "border-green-500" 
    },
    
    { 
      src: "https://res.cloudinary.com/dxenuee4n/image/upload/v1761905953/ecr_b1rztu.webp", 
     alt: "Smart Climate Control", 
     borderColor: "border-pink-500" 
    },
    
    { 
      src: "https://res.cloudinary.com/dxenuee4n/image/upload/v1761905958/godrej_fd3d7x.webp", 
     alt: "Eco-friendly Air Conditioning", 
     borderColor: "border-orange-500" 
    },
    
    { 
      src: "https://res.cloudinary.com/dxenuee4n/image/upload/v1761905963/havmor_icecream_jft5tu.webp", 
     alt: "Ventilation Systems", 
     borderColor: "border-teal-500"
    },
    
    { 
      src: "https://res.cloudinary.com/dxenuee4n/image/upload/v1761905968/hero_f116ii.webp", 
     alt: "Energy-efficient Coolers", 
     borderColor: "border-yellow-500" 
    },
    
    { 
      src: "https://res.cloudinary.com/dxenuee4n/image/upload/v1761905972/huawei_zkobk3.webp", 
     alt: "Heat Recovery Systems", 
     borderColor: "border-blue-500" 
    },
    
    { 
      src: "https://res.cloudinary.com/dxenuee4n/image/upload/v1761905976/jai_jp6rz8.webp", 
     alt: "Airflow Systems", 
     borderColor: "border-green-500"
    },
    
    { 
      src: "https://res.cloudinary.com/dxenuee4n/image/upload/v1761905989/jpm_wbbjkk.webp", 
     alt: "Airflow Efficiency", 
     borderColor: "border-red-500"
    },
    
    { 
      src: "https://res.cloudinary.com/dxenuee4n/image/upload/v1761905993/jubliant_ei9ga1.webp", 
     alt: "HVAC Installation", 
     borderColor: "border-indigo-500" 
    },
    
    { 
      src: "https://res.cloudinary.com/dxenuee4n/image/upload/v1761905997/jushin_dsbips.webp", 
     alt: "Environmental Control", 
     borderColor: "border-purple-500"
    },
    
    { 
      src: "https://res.cloudinary.com/dxenuee4n/image/upload/v1761906000/kajaria_t3eymz.webp", 
     alt: "Thermal Comfort", 
     borderColor: "border-pink-500"
    },
    
    { 
      src: "https://res.cloudinary.com/dxenuee4n/image/upload/v1761906005/knight_frank_ys0jyq.webp", 
     alt: "Efficient Air Systems", 
     borderColor: "border-orange-500" 
    },
    
    { 
      src: "https://res.cloudinary.com/dxenuee4n/image/upload/v1761906008/lear_mrmmcz.webp", 
      alt: "Air Conditioning Units", 
      borderColor: "border-cyan-500" 
    },
    
    { 
      src: "https://res.cloudinary.com/dxenuee4n/image/upload/v1761906013/lotus_d4ppdt.webp", 
      alt: "Home Cooling Solutions", 
      borderColor: "border-teal-500"
    },
    
    { src: "https://res.cloudinary.com/dxenuee4n/image/upload/v1761906017/luminious_bo0teb.webp", 
     alt: "Energy-saving Solutions", 
     borderColor: "border-yellow-500" 
    },
    
    { 
      src: "https://res.cloudinary.com/dxenuee4n/image/upload/v1761906021/makino_sprtdo.webp", 
      alt: "Industrial Air Coolers", 
      borderColor: "border-blue-500" 
    },
    
    { 
      src: "https://res.cloudinary.com/dxenuee4n/image/upload/v1761906025/maruti_suzuki_g5gc2y.webp", 
      alt: "Smart Cooling Systems", 
      borderColor: "border-green-500"
    },
    
    { 
      src: "https://res.cloudinary.com/dxenuee4n/image/upload/v1761906029/nae_mhmcfr.webp", 
      alt: "Climate Control Units", 
      borderColor: "border-red-500" 
    },
    
    { 
      src: "https://res.cloudinary.com/dxenuee4n/image/upload/v1761906033/nestle_clvnlf.webp", 
      alt: "Modern HVAC Systems", 
      borderColor: "border-indigo-500" 
    },
    
    {
      src: "https://res.cloudinary.com/dxenuee4n/image/upload/v1761906041/ntl_lemnis_lxxmfs.webp",
      alt: "Ducted Air Coolers",
      borderColor: "border-yellow-500", // Custom border color
    },
    
    {
      src: "https://res.cloudinary.com/dxenuee4n/image/upload/v1761906045/oriflame_gfcmez.webp",
      alt: "Ducted Air Coolers",
      borderColor: "border-yellow-500", // Custom border color
    },
    
    {
      src: "https://res.cloudinary.com/dxenuee4n/image/upload/v1761906049/orikam_d7qvjb.webp",
      alt: "Ducted Air Coolers",
      borderColor: "border-yellow-500", // Custom border color
    },
    
    { 
      src: "https://res.cloudinary.com/dxenuee4n/image/upload/v1761906053/parekh_itg70o.webp", 
      alt: "Climate Control Units", 
      borderColor: "border-red-500" 
    },
    
  {
    src: "https://res.cloudinary.com/dxenuee4n/image/upload/v1761906058/patanjali_bdmji2.webp", 
    alt: "Modern HVAC Systems", 
    borderColor: "border-indigo-500"
  },
    
  { 
    src: "https://res.cloudinary.com/dxenuee4n/image/upload/v1761906062/positron_wzcyuq.webp", 
    alt: "Climate Control Units", 
    borderColor: "border-red-500" 
  },
    
  { 
    src: "https://res.cloudinary.com/dxenuee4n/image/upload/v1761906066/repro_oymzdz.webp", 
    alt: "Modern HVAC Systems", 
    borderColor: "border-indigo-500" 
  },
    
  { 
    src: "https://res.cloudinary.com/dxenuee4n/image/upload/v1761906071/saatvik_plm6xo.webp", 
    alt: "Climate Control Units", 
    borderColor: "border-red-500"
  },
    
  { 
    src: "https://res.cloudinary.com/dxenuee4n/image/upload/v1761906074/sai_gimyhl.webp", 
    alt: "Modern HVAC Systems", 
    borderColor: "border-indigo-500"
  },
    
  { 
    src: "https://res.cloudinary.com/dxenuee4n/image/upload/v1761906078/sd_biosensor_r95etw.webp", 
    alt: "Climate Control Units", 
    borderColor: "border-red-500" 
  },
    
  { 
    src: "https://res.cloudinary.com/dxenuee4n/image/upload/v1761906082/sgs_wkjvsb.webp", 
    alt: "Modern HVAC Systems", 
    borderColor: "border-indigo-500" 
  },
    
  { 
    src: "https://res.cloudinary.com/dxenuee4n/image/upload/v1761906086/signature_global_kbknvz.webp", 
    alt: "Climate Control Units", 
    borderColor: "border-red-500" 
  },
    
  { 
    src: "https://res.cloudinary.com/dxenuee4n/image/upload/v1761906090/sitaram_bhartiya__institute_q34iwa.webp", 
    alt: "Modern HVAC Systems", 
    borderColor: "border-indigo-500" 
  },
    
  { 
    src: "https://res.cloudinary.com/dxenuee4n/image/upload/v1761906094/somany_eab2ok.webp", 
    alt: "Climate Control Units", 
    borderColor: "border-red-500" 
  },
    
  { 
    src: "https://res.cloudinary.com/dxenuee4n/image/upload/v1761906098/srhu_lse6dd.webp", 
    alt: "Climate Control Units", 
    borderColor: "border-red-500"
  },
    
  { 
    src: "https://res.cloudinary.com/dxenuee4n/image/upload/v1761906102/su-kam_i2l7ic.webp", 
    alt: "Modern HVAC Systems", 
    borderColor: "border-indigo-500" 
  },
    
  {
    src: "https://res.cloudinary.com/dxenuee4n/image/upload/v1761906106/sun_industries_vih5j1.webp",
    alt: "Climate Control Units", 
    borderColor: "border-red-500" 
  },
    
  { 
    src: "https://res.cloudinary.com/dxenuee4n/image/upload/v1761906115/svg_tbkqlt.webp", 
    alt: "Modern HVAC Systems", 
    borderColor: "border-indigo-500" 
  },
    
  { 
    src: "https://res.cloudinary.com/dxenuee4n/image/upload/v1761906123/telleborg_xzthqa.webp", 
    alt: "Climate Control Units", 
    borderColor: "border-red-500" 
  },
    
  { 
    src: "https://res.cloudinary.com/dxenuee4n/image/upload/v1761906118/tata_nlwyfy.webp", 
    alt: "Modern HVAC Systems", 
    borderColor: "border-indigo-500"
  },
    
  { 
    src: "https://res.cloudinary.com/dxenuee4n/image/upload/v1761906127/uflex_tatpot.webp", 
    alt: "Climate Control Units", 
    borderColor: "border-red-500"
  },
    
  { 
    src: "https://res.cloudinary.com/dxenuee4n/image/upload/v1761906131/wctm_oj1mnr.webp", 
    alt: "Modern HVAC Systems", 
    borderColor: "border-indigo-500" 
  },
    
  { 
    src: "https://res.cloudinary.com/dxenuee4n/image/upload/v1761906139/wipe_hotwire_l1l0sq.webp", 
    alt: "Modern HVAC Systems", 
    borderColor: "border-indigo-500"
  },  
    
  { 
    src: "https://res.cloudinary.com/dxenuee4n/image/upload/v1761906143/Zap_qn1oa0.webp", 
    alt: "Modern HVAC Systems", 
    borderColor: "border-indigo-500"
  },
    
  { 
    src: "/projects/clients/77.webp", 
    alt: "Climate Control Units", 
    borderColor: "border-red-500"
  },
  
  ];
  

    const [inView, setInView] = useState(false);
    const containerRef = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setInView(true);
        },
        { threshold: 0.5 }
      );
  
      if (containerRef.current) {
        observer.observe(containerRef.current);
      }
  
      return () => {
        if (containerRef.current) observer.unobserve(containerRef.current);
      };
    }, []);
  
    const text = 'And Many More...';
  
  

  
  return (
    <>
    

    <div className="row   mt-36">

<h1 className=" text-4xl md:text-5xl  font-sans py-3 w-full text-center text-cyan-900 capitalize "> SOME OF OUR PROJECT CLIENTS </h1>


<div className="col">


  <div className="  justify-center   ">


    <div className="row">

      <div className="col py-4">


      <div className="items-center justify-center h-full">

      <div className="flex-row flex flex-wrap justify-center items-center gap-5 pb-10">

      {products.map((item, index) => (
        <div key={index} className="md:w-[15%]  ">

          <div className=" group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow rounded-xl">
            <div className="w-auto  items-center flex justify-center">

              <div className={`w-full rounded-xl  bg-white   ${item.borderColor}`}>
                <Image
                  className={`h-[50%]  w-[80%] mx-auto object-center object-cover transition-transform duration-500 group-hover:scale-90  rounded-lg `} // Dynamic border color
                  src={item.src}
                  fetchPriority="high"
                  decoding="async"
                  alt={item.alt}
                  width={300} // Adjust based on your layout
            height={200}
                />
              </div>


              <div className="text-center mt-3">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
                <a
                  href={item.link}
                  className="text-blue-500 hover:underline mt-1 inline-block"
                >
                  {item.linkText}
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      
      
    </div>
</div>
      </div>

      <div
      ref={containerRef}
      className="flex justify-center items-center h-32 text-black font-sans md:text-4xl font-semibold"
    >
      <div className="flex gap-1 justify-center items-center">
        {text.split('').map((char, i) => (
          <span
            key={i}
            className={`opacity-0 transform translate-y-4  transition-all duration-500 ease-out ${
              inView ? 'opacity-100 translate-y-0' : ''
            }`}
            style={{ transitionDelay: `${i * 0.15}s` }}
          >
            {char}
          </span>
        ))}
      </div>
    </div>

    </div>

  </div>

</div>

</div>
    </>
  )
}





