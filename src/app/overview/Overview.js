 


'use client';

import React, { useEffect, useState } from 'react';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import {
  BadgeCheck,
  Wrench,
  ShieldCheck,
  Award,
  Handshake,
} from "lucide-react";


import {
  Settings,
  RotateCcw,
  Building2,
  Factory,
  Hospital,
  Hotel,
  GraduationCap,
  Server,
  FlaskConical,
  ShoppingBag,
} from "lucide-react";


import {
  ClipboardCheck,
  PencilRuler,
  Hammer,
  CheckCircle2,
  UserCheck,
  Leaf,
} from "lucide-react";
import Link from 'next/link';


const images3 = [
  {

    original: "/jobs/1.jpg",
    thumbnail: "/jobs/1.jpg",
    originalAlt: "HVAC System Image",
    thumbnailAlt: "HVAC System Image",
    originalHeight: "300",
    originalWidth: "300",
    thumbnailHeight: "300",
    thumbnailWidth: "300",
    thumbnailLoading: "lazy",
    loading:"lazy"

  },


  {
    original: "/jobs/2.jpg",
    thumbnail: "/jobs/2.jpg",
    originalAlt: "HVAC System Image",
    thumbnailAlt: "HVAC System Image",
    originalHeight: "300",
    originalWidth: "300",
    thumbnailHeight: "300",
    thumbnailWidth: "300",
      thumbnailLoading: "lazy",
    loading:"lazy"
  },

  {
    original: "/jobs/3.jpg",
    thumbnail: "/jobs/3.jpg",
    originalAlt: "HVAC System Image",
    thumbnailAlt: "HVAC System Image",
    originalHeight: "300",
    originalWidth: "300",
    thumbnailHeight: "300",
    thumbnailWidth: "300",
      thumbnailLoading: "lazy",
    loading:"lazy"
  },

  {
    original: "/jobs/4.jpg",
    thumbnail: "/jobs/4.jpg",
    originalAlt: "HVAC System Image",
    thumbnailAlt: "HVAC System Image",
    originalHeight: "300",
    originalWidth: "300",
    thumbnailHeight: "300",
    thumbnailWidth: "300",
      thumbnailLoading: "lazy",
    loading:"lazy"
  },

  {
    original: "/jobs/5.jpg",
    thumbnail: "/jobs/5.jpg",
    originalAlt: "HVAC System Image",
    thumbnailAlt: "HVAC System Image",
    originalHeight: "300",
    originalWidth: "300",
    thumbnailHeight: "300",
    thumbnailWidth: "300",
      thumbnailLoading: "lazy",
    loading:"lazy"
  },

  {
    original: "/jobs/6.jpg",
    thumbnail: "/jobs/6.jpg",
    originalAlt: "HVAC System Image",
    thumbnailAlt: "HVAC System Image",
    originalHeight: "300",
    originalWidth: "300",
    thumbnailHeight: "300",
    thumbnailWidth: "300",
      thumbnailLoading: "lazy",
    loading:"lazy"
  },

  {
    original: "/jobs/7.jpg",
    thumbnail: "/jobs/7.jpg",
    originalAlt: "HVAC System Image",
    thumbnailAlt: "HVAC System Image",
    originalHeight: "300",
    originalWidth: "300",
    thumbnailHeight: "300",
    thumbnailWidth: "300",
      thumbnailLoading: "lazy",
    loading:"lazy"
  },


];

const images4 = [
  {
    original: "/jobs/8.jpg",
    thumbnail: "/jobs/8.jpg",
    originalAlt: "HVAC System Image",
    thumbnailAlt: "HVAC System Image",
    originalHeight: "300",
    originalWidth: "300",
    thumbnailHeight: "300",
    thumbnailWidth: "300",
      thumbnailLoading: "lazy",
    loading:"lazy"
  },

  {
    original: "/jobs/9.jpg",
    thumbnail: "/jobs/9.jpg",
    originalAlt: "HVAC System Image",
    thumbnailAlt: "HVAC System Image",
    originalHeight: "300",
    originalWidth: "300",
    thumbnailHeight: "300",
    thumbnailWidth: "300",
      thumbnailLoading: "lazy",
    loading:"lazy"
  },

  {
    original: "/jobs/10.jpg",
    thumbnail: "/jobs/10.jpg",
    originalAlt: "HVAC System Image",
    thumbnailAlt: "HVAC System Image",
    originalHeight: "300",
    originalWidth: "300",
    thumbnailHeight: "300",
    thumbnailWidth: "300",
      thumbnailLoading: "lazy",
    loading:"lazy",
  },

  {
    original: "/jobs/11.jpg",
    thumbnail: "/jobs/11.jpg",
    originalAlt: "HVAC System Image",
    thumbnailAlt: "HVAC System Image",
    originalHeight: "300",
    originalWidth: "300",
    thumbnailHeight: "300",
    thumbnailWidth: "300",
      thumbnailLoading: "lazy",
    loading:"lazy",
  },

  {
    original: "/jobs/12.jpg",
    thumbnail: "/jobs/12.jpg",
    originalAlt: "HVAC System Image",
    thumbnailAlt: "HVAC System Image",
    originalHeight: "300",
    originalWidth: "300",
    thumbnailHeight: "300",
    thumbnailWidth: "300",
      thumbnailLoading: "lazy",
    loading:"lazy",
  },

  {
    original: "/jobs/13.jpg",
    thumbnail: "/jobs/13.jpg",
    originalAlt: "HVAC System Image",
    thumbnailAlt: "HVAC System Image",
    originalHeight: "300",
    originalWidth: "300",
    thumbnailHeight: "300",
    thumbnailWidth: "300",
      thumbnailLoading: "lazy",
    loading:"lazy",
  },




];


const images5 = [
  {
    original: "/jobs/14.jpg",
    thumbnail: "/jobs/14.jpg",
    originalAlt: "HVAC System Image",
    thumbnailAlt: "HVAC System Image",
    originalHeight: "300",
    originalWidth: "300",
    thumbnailHeight: "300",
    thumbnailWidth: "300",
      thumbnailLoading: "lazy",
    loading:"lazy",
  },

  {
    original: "/jobs/15.jpg",
    thumbnail: "/jobs/15.jpg",
    originalAlt: "HVAC System Image",
    thumbnailAlt: "HVAC System Image",
    originalHeight: "300",
    originalWidth: "300",
    thumbnailHeight: "300",
    thumbnailWidth: "300",
      thumbnailLoading: "lazy",
    loading:"lazy",
  },

  {
    original: "/jobs/16.jpg",
    thumbnail: "/jobs/16.jpg",
    originalAlt: "HVAC System Image",
    thumbnailAlt: "HVAC System Image",
    originalHeight: "300",
    originalWidth: "300",
    thumbnailHeight: "300",
    thumbnailWidth: "300",
      thumbnailLoading: "lazy",
    loading:"lazy",
  },

  {
    original: "/jobs/17.jpg",
    thumbnail: "/jobs/17.jpg",
    originalAlt: "HVAC System Image",
    thumbnailAlt: "HVAC System Image",
    originalHeight: "300",
    originalWidth: "300",
    thumbnailHeight: "300",
    thumbnailWidth: "300",
      thumbnailLoading: "lazy",
    loading:"lazy",
  },

  {
    original: "/jobs/18.jpg",
    thumbnail: "/jobs/18.jpg",
    originalAlt: "HVAC System Image",
    thumbnailAlt: "HVAC System Image",
    originalHeight: "300",
    originalWidth: "300",
    thumbnailHeight: "300",
    thumbnailWidth: "300",
      thumbnailLoading: "lazy",
    loading:"lazy"
  },

  {
    original: "/jobs/19.jpg",
    thumbnail: "/jobs/19.jpg",
    originalAlt: "HVAC System Image",
    thumbnailAlt: "HVAC System Image",
    originalHeight: "300",
    originalWidth: "300",
    thumbnailHeight: "300",
    thumbnailWidth: "300",
      thumbnailLoading: "lazy",
    loading:"lazy",
  },

  {
    original: "/jobs/20.jpg",
    thumbnail: "/jobs/20.jpg",
    originalAlt: "HVAC System Image",
    thumbnailAlt: "HVAC System Image",
    originalHeight: "300",
    originalWidth: "300",
    thumbnailHeight: "300",
    thumbnailWidth: "300",
      thumbnailLoading: "lazy",
    loading:"lazy",
  },

  {
    original: "/jobs/21.jpg",
    thumbnail: "/jobs/21.jpg",
    originalAlt: "HVAC System Image",
    thumbnailAlt: "HVAC System Image",
    originalHeight: "300",
    originalWidth: "300",
    thumbnailHeight: "300",
    thumbnailWidth: "300",
      thumbnailLoading: "lazy",
    loading:"lazy",
  },

  {
    original: "/jobs/22.jpg",
    thumbnail: "/jobs/22.jpg",
    originalAlt: "HVAC System Image",
    thumbnailAlt: "HVAC System Image",
    originalHeight: "300",
    originalWidth: "300",
    thumbnailHeight: "300",
    thumbnailWidth: "300",
      thumbnailLoading: "lazy",
    loading:"lazy",
  },




];


const images6 = [
  {
    original: "/jobs/27.jpg",
    thumbnail: "/jobs/27.jpg",
    originalAlt: "HVAC System Image",
    thumbnailAlt: "HVAC System Image",
    originalHeight: "300",
    originalWidth: "300",
    thumbnailHeight: "300",
    thumbnailWidth: "300",
      thumbnailLoading: "lazy",
    loading:"lazy",
  },

  {
    original: "/jobs/26.jpg",
    thumbnail: "/jobs/26.jpg",
    originalAlt: "HVAC System Image",
    thumbnailAlt: "HVAC System Image",
    originalHeight: "300",
    originalWidth: "300",
    thumbnailHeight: "300",
    thumbnailWidth: "300",
      thumbnailLoading: "lazy",
    loading:"lazy",
  },

  {
    original: "/jobs/25.jpg",
    thumbnail: "/jobs/25.jpg",
    originalAlt: "HVAC System Image",
    thumbnailAlt: "HVAC System Image",
    originalHeight: "300",
    originalWidth: "300",
    thumbnailHeight: "300",
    thumbnailWidth: "300",
      thumbnailLoading: "lazy",
    loading:"lazy",
  },

  {
    original: "/jobs/28.jpg",
    thumbnail: "/jobs/28.jpg",
    originalAlt: "HVAC System Image",
    thumbnailAlt: "HVAC System Image",
    originalHeight: "300",
    originalWidth: "300",
    thumbnailHeight: "300",
    thumbnailWidth: "300",
      thumbnailLoading: "lazy",
    loading:"lazy",
  },

  {
    original: "/jobs/29.jpg",
    thumbnail: "/jobs/29.jpg",
    originalAlt: "HVAC System Image",
    thumbnailAlt: "HVAC System Image",
    originalHeight: "300",
    originalWidth: "300",
    thumbnailHeight: "300",
    thumbnailWidth: "300",
      thumbnailLoading: "lazy",
    loading:"lazy",
  },

  {
    original: "/jobs/30.jpg",
    thumbnail: "/jobs/30.jpg",
    originalAlt: "HVAC System Image",
    thumbnailAlt: "HVAC System Image",
    originalHeight: "300",
    originalWidth: "300",
    thumbnailHeight: "300",
    thumbnailWidth: "300",
      thumbnailLoading: "lazy",
    loading:"lazy",
  },





];


const images7 = [
  {
    original: "/jobs/31.jpg",
    thumbnail: "/jobs/31.jpg",
    originalAlt: "HVAC System Image",
    thumbnailAlt: "HVAC System Image",
    originalHeight: "300",
    originalWidth: "300",
    thumbnailHeight: "300",
    thumbnailWidth: "300",
      thumbnailLoading: "lazy",
    loading:"lazy",
  },

  {
    original: "/jobs/32.jpg",
    thumbnail: "/jobs/32.jpg",
    originalAlt: "HVAC System Image",
    thumbnailAlt: "HVAC System Image",
    originalHeight: "300",
    originalWidth: "300",
    thumbnailHeight: "300",
    thumbnailWidth: "300",
      thumbnailLoading: "lazy",
    loading:"lazy",
  },

  {
    original: "/jobs/33.jpg",
    thumbnail: "/jobs/33.jpg",
    originalAlt: "HVAC System Image",
    thumbnailAlt: "HVAC System Image",
    originalHeight: "300",
    originalWidth: "300",
    thumbnailHeight: "300",
    thumbnailWidth: "300",
      thumbnailLoading: "lazy",
    loading:"lazy",
  },

  {
    original: "/jobs/34.jpg",
    thumbnail: "/jobs/34.jpg",
    originalAlt: "HVAC System Image",
    thumbnailAlt: "HVAC System Image",
    originalHeight: "300",
    originalWidth: "300",
    thumbnailHeight: "300",
    thumbnailWidth: "300",
      thumbnailLoading: "lazy",
    loading:"lazy",
  },

  {
    original: "/jobs/35.jpg",
    thumbnail: "/jobs/35.jpg",
    originalAlt: "HVAC System Image",
    thumbnailAlt: "HVAC System Image",
    originalHeight: "300",
    originalWidth: "300",
    thumbnailHeight: "300",
    thumbnailWidth: "300",
      thumbnailLoading: "lazy",
    loading:"lazy",
  },

];



export default function Overview() {


  function CounterBlock({ icon, counter, suffix, label }) {
    const [displayValue, setDisplayValue] = useState(0);
    const [width, setWidth] = useState(0);


    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            let current = 0;
            const increment = counter / 200;

            const updateCounter = () => {
              current += increment;
              if (current < counter) {
                setDisplayValue(Math.ceil(current));
                requestAnimationFrame(updateCounter);
              } else {
                setDisplayValue(counter);
              }
            };

            updateCounter();
            observer.unobserve(entry.target);
          }
        },
        { threshold: 1 }
      );

      const target = document.querySelector(`[data-counter="${counter}"]`);
      if (target) observer.observe(target);
    }, [counter]);

    useEffect(() => {
      const interval = setInterval(() => {
        setWidth((prev) => (prev < 100 ? prev + 3 : 100)); // Slower increment
      }, 100);

      return () => clearInterval(interval);
    }, []);



    return (

      <article>
        <span className="inline-flex font-semibold text-[14px] bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-300 mb-2">
          {label}
        </span>
        <div className="mb-5 h-4 overflow-hidden rounded-full bg-gray-100">
          <div
            className="h-4 rounded-full bg-gradient-to-r from-green-500 to-blue-500 transition-all duration-100"
            style={{ width: `${width}%` }}
          ></div>
        </div>
        <p>
          <span className="flex tabular-nums text-slate-900 text-5xl font-extrabold mb-2">
            <span data-counter={counter} className="counter">
              {displayValue}
            </span>
            {suffix}
          </span>
        </p>
      </article>

    );
  }


  const cardData = [

    {
      id: 1,
      imgSrc: "certi/1.webp",
      clientName: "BKT Tires, Bhuj",
      location: "Gujarat",
      jobType: "Chiller, AHU & BMS",
      orderValue: "8 Cr",
    },


    {
      id: 2,
      imgSrc: "certi/2.webp",
      clientName: "Suncity Parikrama",
      location: "Panchkula, Haryana",
      jobType: "Basement Ventilation",
      orderValue: "4 Cr",
    },
    {
      id: 3,
      imgSrc: "certi/3.webp",
      clientName: "Jay Ushin",
      location: "Gurgaon, Haryana",
      jobType: " VRF System ",
      orderValue: "3 Cr ",
    },
    {

      id: 4,
      imgSrc: "certi/4.webp",
      clientName: <>Positron Multi Specialty <br /> & Cancer Hospital</>,
      location: "Rohtak, Haryana",
      jobType: " Chiller & AHU ",
      orderValue: "2 Cr",
    },


    {
      id: 5,
      imgSrc: "certi/5.webp",
      clientName: "AlS Glass",
      location: "Bawal, Haryana",
      jobType: "Air Cooling with Air Washer",
      orderValue: "3.5 Cr",
    },


    {
      id: 6,
      imgSrc: "certi/6.webp",
      clientName: " Abdos Labtech ",
      location: "Roorkee, Uttarakhand",
      jobType: "VRV & AHU",
      orderValue: "2.5 Cr",
    },
  ];


  const highlights = [
    {
      icon: <BadgeCheck className="w-6 h-6 text-cyan-600" />,
      title: "19+ Years of Proven Expertise",
      description:
        "With nearly two decades in the HVAC industry, our seasoned team possesses the profound knowledge and practical experience to handle projects of any scale and complexity. We've mastered the art of designing and implementing robust HVAC systems.",
    },

    {
      icon: <Wrench className="w-6 h-6 text-cyan-600" />,
      title: "Seamless Turnkey HVAC Solutions",
      description:
        "As a leading HVAC contractor, we offer a complete suite of services from initial consultation and meticulous design to expert installation, rigorous commissioning, and dependable after-sales support. We manage every aspect, ensuring a hassle-free experience and a perfectly integrated system.",
    },

    {
      icon: <ShieldCheck className="w-6 h-6 text-cyan-600" />,
      title: "Adherence to Global Standards",
      description:
        "Your peace of mind is our priority. We strictly adhere to national and international standards, including NBC, CPWD, NABH guidelines, ISHRAE, ASHRAE, and ISO certifications, guaranteeing systems that are safe, efficient, and compliant.",
    },
    {
      icon: <Award className="w-6 h-6 text-cyan-600" />,
      title: "Award-Winning Excellence",
      description:
        "Our commitment to quality and service has been recognized with the prestigious India Business Award 2025 for Best Quality Standards and Services in the HVAC Industry. This award is a testament to our relentless pursuit of perfection.",
    },
    {
      icon: <Handshake className="w-6 h-6 text-cyan-600" />,
      title: " Client-Centric Approach",
      description:
        " We believe in forging lasting partnerships. Our team works closely with you to understand your unique needs, delivering customized HVAC contractor services that align perfectly with your operational goals and budget.",
    },
  ];

  const services = [
    {
      title: "HVAC System Design & Engineering",
      icon: Settings,
      description:
        "Our expert engineers utilize advanced software and their extensive knowledge to design bespoke HVAC systems that are energy-efficient, cost-effective, and perfectly suited to your building's specific demands. This includes load calculations, ducting design, and equipment selection.",
    },
    {
      title: "HVAC System Installation & Commissioning",
      icon: Wrench,
      description:
        "From industrial chillers and large-scale air washers to precision panel ACs and ducted/non-ducted air coolers, our certified HVAC contractors ensure flawless installation. We meticulously commission every system to guarantee peak performance from day one.",
    },
    {
      title: "Specialized HVAC Solutions",
      icon: ShieldCheck,
      description:
        "We excel in delivering HVAC solutions for highly sensitive and critical environments:",
      bullets: [
        "Clean Room & OT HVAC Contractor: Designing and installing sterile, contaminant-free air systems crucial for healthcare, pharmaceutical, and research facilities.",
        "Basement Ventilation & Lift Pressurization: Implementing robust systems for safety and comfort in underground spaces and ensuring smoke-free escape routes in high-rise buildings.",
      ],
    },
    {
      title: "HVAC Maintenance & After-Sales Support",
      icon: RotateCcw,
      description:
        "Extend the lifespan and efficiency of your HVAC systems with our comprehensive maintenance services. Our dedicated team provides prompt support, preventive maintenance, and emergency repairs, offering tailored HVAC annual maintenance contracts (AMCs) to keep your systems running smoothly.",
    },
  ];

  const industries = [
    { name: "Commercial Complexes & Office Buildings", icon: Building2 },
    { name: "Industrial Facilities & Manufacturing Plants", icon: Factory },
    { name: "Hospitals & Healthcare Centers", icon: Hospital },
    { name: "Hotels & Hospitality Sector", icon: Hotel },
    { name: " Educational Institutions", icon: GraduationCap },
    { name: "Data Centers & IT Parks", icon: Server },
    { name: " Pharmaceutical & Research Laboratories", icon: FlaskConical },
    { name: " Retail Spaces", icon: ShoppingBag },
  ];

  const processSteps = [
    {
      title: "Consultation & Assessment",
      description: "We begin by understanding your specific HVAC needs and conducting a thorough site assessment.",
      icon: ClipboardCheck,
    },
    {
      title: "Custom Design & Proposal",
      description: "Our engineers develop a tailored HVAC system design and provide a detailed proposal outlining the scope, timeline, and cost.",
      icon: PencilRuler,
    },
    {
      title: "Expert Installation",
      description: "Our skilled HVAC contractors execute the installation with precision, adhering to the highest safety and quality standards.",
      icon: Hammer,
    },
    {
      title: "Testing & Commissioning",
      description: "Rigorous testing ensures your system performs optimally and meets all design specifications.",
      icon: CheckCircle2,
    },
    {
      title: "Handover & Support",
      description: "We provide comprehensive training on your new system and remain available for ongoing maintenance and support.",
      icon: UserCheck,
    },
  ];

  return (
    <>


      <section className="bg-gradient-to-r from-cyan-500 to-cyan-800 pt-40  pb-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-2xl md:text-4xl font-extrabold text-cyan-50 leading-tight mb-6 drop-shadow-md">
            Adhunik Powertech: Your Trusted HVAC Contractor for Turnkey Solutions
          </h1>

          <p className="  text-sm md:text-lg   max-w-3xl mx-auto text-cyan-100 font-medium tracking-wide">
            Leading HVAC Contractor in Gurugram & Delhi NCR | Turnkey Heating, Ventilation & Air Conditioning Solutions
          </p>
          
        </div>
      </section>
      <div className="row  pt-24 ">
        <h1 className=' text-center font-sans font-thin text-2xl'> OUR ACHIEVEMENTS </h1>
        <p className="text-4xl font-sans  py-3 w-full text-center text-cyan-900 capitalize">
          TOTAL PROJECTS DELIVERED
        </p>


        <div className="row">
          <main className="relative flex flex-col justify-center overflow-hidden">
            <div className="w-full max-w-6xl flex justify-center items-center flex-col mx-auto px-4 md:px-6 py-10 md:py-24 ">
              <section className="  w-full lg:w-[70%]    pb-5 grid gap-12 md:grid-cols-2 lg:grid-cols-2 px-6 md:px-0 md:gap-16">
                <CounterBlock
                  counter={600}
                  suffix="+"
                  label="TOTAL PROJECTS"
                />

                <CounterBlock
                  counter={250}
                  suffix="+"
                  label="AIR CONDITIONING PROJECTS"
                />

              </section>
              <section className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 px-6 md:px-0 md:gap-16">
                <CounterBlock
                  counter={200}
                  suffix="+"
                  label="AIR COOLING PROJECTS"
                />
                <CounterBlock
                  counter={100}
                  suffix="+"
                  label="CLEAN ROOM PROJECTS"
                />
                <CounterBlock
                  counter={50}
                  suffix="+"
                  label="BASEMENT VENTILATION & LIFT PRESSURIZATION"
                />

              </section>
            </div>


          </main>
        </div>



        <div className="bg-white text-gray-800">
          {/* Header Hero */}


          {/* Introduction */}
          <section className="py-16 px-5 max-w-4xl mx-auto">
            <p className=" text-sm md:text-lg leading-relaxed  text-justify text-gray-700 ">
              Welcome to <Link href='/' className="font-semibold text-cyan-700">Adhunik Powertech</Link>, your premier HVAC contractor specializing in comprehensive, energy-efficient, and sustainable heating, ventilation, and air conditioning solutions. With over <span className="font-semibold">19+ years</span> of unparalleled experience, we pride ourselves on delivering end-to-end turnkey HVAC solutions for commercial, industrial, and specialized applications across Gurugram, Delhi NCR, and Haryana. As a trusted HVAC company, our dedication to precision engineering, timely execution, and unwavering quality ensures optimal indoor environments and long-term operational efficiency for your facility.
            </p>
          </section>

          {/* Highlighted Services */}
          <section className="bg-gray-50 py-10 px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className=" md:text-3xl font-bold text-cyan-800 text-center mb-12 tracking-tight">
                Why Choose Adhunik Powertech as Your HVAC Contractor?
              </h2>
              <p className="  text-center max-w-3xl mx-auto mb-10 text-gray-600 text-sm md:text-lg">
                At Adhunik Powertech, we understand that selecting the right HVAC contractor is crucial for the success and longevity of your building's climate control system. Here’s why we stand out:
              </p>

              <div className="grid md:grid-cols-2 gap-10">
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-5 bg-white p-7 rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="text-cyan-600 text-4xl">{item.icon}</div>
                    <div>
                      <h3 className="   md:text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-700 text-sm pt-2 md:text-base leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>


        </div>



        <div className="bg-white text-gray-800">
          <section className="relative isolate overflow-hidden bg-gradient-to-r from-cyan-800 to-cyan-600 py-24 text-white text-center shadow-xl">
            <div className="max-w-4xl mx-auto px-6">
              <h1 className=" text-2xl  md:text-4xl  font-bold mb-4"> Our Comprehensive HVAC Contractor Services
              </h1>
              <p className="md:text-lg  text-sm text-justify md:text-center "> Adhunik Powertech offers a full spectrum of HVAC contractor services designed to meet diverse client requirements, ensuring optimal performance and environmental comfort.
              </p>
            </div>
          </section>

          <section className="py-20 px-6 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {services.map((service, idx) => (
                <div key={idx} className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-cyan-600">
                  <div className="flex items-center gap-4 mb-4">
                    <service.icon className="w-8 h-8 text-cyan-700" />
                    <h2 className="md:text-xl font-semibold text-cyan-800">{service.title}</h2>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">{service.description}</p>
                  {service.bullets && (
                    <ul className="mt-4 list-disc list-outside ms-4  text-sm text-gray-600 space-y-2">
                      {service.bullets.map((point, i) => (
                        <li className=' text-justify' key={i}><strong>{point.split(":")[0]}:</strong>{point.split(":")[1]}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section className="py-20 bg-gradient-to-br from-cyan-50 to-white px-6">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className=" text-2xl md:text-3xl font-bold text-cyan-800 mb-6">Industries We Serve</h2>
              <p className="text-gray-600 text-sm md:text-md mb-12 max-w-3xl mx-auto"> As a versatile HVAC contractor, Adhunik Powertech has successfully executed projects across a wide array of sectors, including:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                {industries.map((industry, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center bg-white shadow-md rounded-xl p-5 hover:shadow-xl transition-all border border-gray-100"
                  >
                    <industry.icon className="w-10 h-10 text-cyan-600 mb-3" />
                    <p className="md:text-base text-sm font-medium text-cyan-800 text-center">{industry.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-cyan-800 text-white py-16 text-center px-6">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Looking for Custom HVAC Solutions?</h3>
            <p className="mb-6 text-sm md:text-lg   mx-auto">Let Adhunik Powertech tailor the ideal HVAC design, installation, and maintenance plan to suit your needs.</p>
            <a href="/support-form" className=" text-sm md:text-base inline-block bg-white text-cyan-800 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition"> Boost Your Comfort—Contact Us!

            </a>
          </section>
        </div>



        <section className="bg-white py-20 px-6 max-w-6xl mx-auto">
          <h2 className=" text-2xl md:text-3xl font-bold text-cyan-800 mb-8 text-center">
            Our Streamlined HVAC Contractor Process
          </h2>

          <p className=' py-4 text-center  text-cyan-800'>
            We ensure a smooth and efficient project execution from start to finish:

          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {processSteps.map(({ title, description, icon: Icon }, idx) => (
              <div
                key={idx}
                className="flex items-start space-x-5 p-6 border-l-4 border-cyan-600 bg-cyan-50 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <Icon className="w-10 h-10 text-cyan-700 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="  text-xl font-semibold text-cyan-800 mb-2">{title}</h3>
                  <p className="  text-sm md:text-base text-gray-700 leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>

          <section className="mt-20 text-center max-w-4xl mx-auto">
            <h2 className=" text-2xl md:text-3xl font-bold text-cyan-800 mb-6">
              Commitment to Sustainable & Efficient HVAC Solutions
            </h2>
            <div className="flex justify-center mb-8">
              <Leaf className="w-12 h-12 text-green-500" />
            </div>
            <p className="text-gray-700  text-sm text-justify md:text-center md:text-lg leading-relaxed">
              At Adhunik Powertech, we are committed to engineering HVAC solutions that are not only powerful but also environmentally responsible. We focus on integrating the latest energy-saving technologies and sustainable practices to deliver systems that reduce operational costs and minimize your carbon footprint.
            </p>
          </section>

          <section className="mt-20 bg-cyan-700 rounded-lg  p-5 md:p-12 text-white text-center shadow-lg">
            <Award className="w-12 h-12 mx-auto mb-4" />
            <h2 className=" text-lg md:text-3xl font-bold mb-4">Partner with an Award-Winning HVAC Contractor Today!</h2>
            <p className=" text-sm md:text-lg max-w-3xl mx-auto mb-6">
              Ready to experience the Adhunik Powertech difference? Whether you need a new industrial HVAC installation in Haryana, a commercial HVAC contractor in Gurugram, or specialized clean room HVAC solutions in Delhi NCR, our team is prepared to exceed your expectations.
            </p>
            <a
              href="/support-form"
              className="inline-block bg-white text-cyan-700 font-semibold px-8 py-3 rounded-full hover:bg-cyan-100 transition"
            >
              Claim Your Free Consultation!
            </a>
          </section>
        </section>



        <p className=" text-2xl md:text-3xl font-sans  py-3 w-full text-center text-cyan-900 capitalize">
          SOME OF OUR PROJECT COMPLETION
          CERTIFICATION
        </p>
        <div className="row flex flex-row flex-wrap">

          {cardData.map((card) => (
            <div key={card.id} className="col w-full md:w-6/12 p-8">
              <div

                className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              >

                <img
                  className="object-cover md:w-[50%] p-8 md:h-[50%]"
                  src={card.imgSrc}
                  height="300"
                  width="300"
                  loading="lazy"
                  alt={`${card.clientName} project`}
                />


                <div className="flex flex-col justify-between p-4 leading-normal">
                  <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    <p className="font-sans">
                      <strong>Client Name :</strong> {card.clientName}
                    </p>
                    <p className="font-sans">{card.location}</p>
                    <p className="font-sans">
                      <strong>Job Type :</strong> {card.jobType}
                    </p>
                    <p className="font-sans">
                      <strong>Order Value :</strong> {card.orderValue}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row">
          <p className=" text-4xl md:text-4xl py-6 font-sans  w-full text-center text-cyan-900 capitalize">
            Air Management Jobs

          </p>

          <div className="row flex flex-row flex-wrap-reverse  justify-evenly items-center">
            <div className=" w-full h-full md:w-5/12 ">
              <h2
                className="font-manrope uppercase  font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600 md:text-left text-center text-4xl lg:text-4xl text-black mb-9 max-lg:text-center relative">

                Air Cooling Jobs</h2>
              <p className="  md:text-left text-justify  font-normal  text-sm text-cyan-800 leading-8 px-3     mx-auto">
                At Adhunik Powertech, we take pride in delivering a wide range of cooling methods that effectively lower air temperatures according to your specific needs. Our selection of Air Cooling Products—such as Air Washers, Ventilation Fans, and both Ducted and Non-Ducted Air Coolers—ensures increased airflow and reduced temperatures, helping you create the ideal environment.

                <br />
                Our proven technique focuses on boosting airflow over the areas you want to cool or increasing the surface area of objects to maximize heat dispersal. We often combine both methods to achieve outstanding results.

                <br />
                When it comes to air cooling projects, we stand out with our expertise, even in non-standard conditions. Trust us to provide reliable and efficient air cooling solutions that meet and exceed your expectations.
              </p>
            </div>
            <div className=" w-full h-full md:w-5/12 my-5  ">
              <ImageGallery items={images3} className=" rounded-lg " alt="pics" />

            </div>
          </div>
        </div>


        <div className="row">


          <div className="row flex flex-col-reverse  md:flex-row-reverse  justify-evenly items-center">

            <div className=" w-full h-full md:w-5/12 pt-5 ">
              <h2
                className="font-manrope uppercase  font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600 text-4xl lg:text-4xl text-black mb-3 md:mb-9 max-lg:text-center relative">

                Air Conditioning Jobs</h2>


              <p className=" text-sm text-cyan-800 text-justify md:text-left px-3 font-normal text-[16px] leading-8   mx-auto">
                We specialize in enhancing air quality and comfort in every environment. Our mission is to efficiently deliver conditioned air to all spaces, ensuring that everyone enjoys optimal conditions.

                <br />
                We proudly offer HVAC services to a wide variety of settings, including residential, commercial, hospitals, and industries such as pharmaceuticals and food manufacturing, as well as factories and schools. By choosing us, you guarantee improved comfort and exceptional indoor air quality.
                <br />
                With years of experience in air conditioning projects, we have a proven track record of success. Trust us to meet your air conditioning needs and experience the difference in quality and comfort.
              </p>
            </div>
            <div className=" w-full h-full md:w-5/12 my-5  ">
              <ImageGallery items={images4} className=" rounded-lg " alt="pics" />

            </div>



          </div>
        </div>


        <div className="row pt-11">


          <div className="row flex flex-row flex-wrap-reverse  justify-evenly items-center">
            <div className=" w-full h-full md:w-5/12 ">
              <h2
                className="font-manrope uppercase  font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600 text-4xl lg:text-4xl text-black mb-9 max-lg:text-center relative">

                Clean Room & OT Jobs

              </h2>
              <div className=" text-sm text-cyan-800 text-justify md:text-left font-normal text-[16px] leading-8    px-2  mx-auto">
                Our team of professional engineers specializes in designing HVAC layouts for clean rooms and operating theatres, which require a high level of precision with strict zero tolerance for the entry of foreign particles. We create controlled, isolated environments for handling contamination-sensitive substances while also protecting the exterior environment from hazardous materials within these controlled areas.

                <br />
                To maintain these standards, we manage the density of sub-micron and larger airborne particles by introducing clean, filtered air into the cleanroom.
                <p className=' text-center  md:text-left  text-2xl py-4 '>Our services include :
                </p>
                <div className="card px-4  md:px-0 ">
                  <ul className="list-disc py-3 space-y-1 ps-4   ">

                    <li>
                      Making a blueprint of the duct layout
                    </li>
                    <li>
                      Making blueprints for duct layouts
                    </li>
                    <li>
                      ⁠Designing/Selecting Air Handling Units (AHUs)

                    </li>
                    <li>
                      ⁠Designing ducts, including calculating the requirement for risers and diffusers
                    </li>
                    <li>
                      ⁠Contamination control through airflow rate and direction, pressurization, temperature, humidity, and specialized filtration
                    </li>
                    <li>
                      ⁠Contamination control through airflow rate and direction, pressurization, temperature, humidity, and specialized filtration
                    </li>
                    <li>
                      ⁠Contamination control through airflow rate and direction, pressurization, temperature, humidity, and specialized filtration
                    </li>
                    <li>
                      ⁠Maintaining positive laminar flow inside the room to prevent outside air and foreign particles from entering
                    </li>
                    <li>
                      ⁠Installing a set of micro-filters and HEPA filters as required
                    </li>
                    <li>
                      ⁠Conducting air balancing to ensure positive pressure is maintained
                    </li>
                    <li>
                      ⁠Fabricating and manufacturing AHUs with the necessary filters and humidity control provisions
                    </li>
                    <li>
                      ⁠Installing HEPA filters either within the AHU or at the terminals of the supply duct, depending on available space
                    </li>
                    <li>
                      ⁠Fabricating ducts in various gauges (16G, 18G, 20G, 22G, 24G, 26G)
                    </li>
                    <li>
                      ⁠Providing guaranteed assurance of class maintenance (particle count) inside the workspace
                    </li>
                    <li>
                      ⁠Installing ducts and AHUs under the supervision of experienced professionals
                    </li>
                    <li>
                      ⁠Installing all other standard equipment necessary for the clean room.
                    </li>
                  </ul>
                </div>
                <p className=' px-4'>Our commitment ensures the highest standards of cleanliness and safety within controlled environments.</p>
              </div>



            </div>
            <div className=" w-full h-full md:w-5/12 my-5  ">
              <ImageGallery items={images5} className=" rounded-lg " alt="pics" />

            </div>
          </div>
        </div>


        <div className="row">



          <div className="row flex md:flex-row flex-col-reverse flex-wrap-reverse  justify-evenly items-center">


            <div className=" w-full h-full md:w-5/12 ">

              <h2
                className="font-manrope uppercase  font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600 text-4xl lg:text-4xl text-black mb-9 max-lg:text-center relative">

                Basement Ventilation

              </h2>

              <div className="about-content pb-8">
                <div className="section-title ">

                  <p className="  text-sm text-cyan-800 text-justify font-normal text-[16px] leading-8   md:text-left  px-4 mx-auto ">
                    Do you notice stale, stuffy, or moldy air lingering in your space? At Adhunik Powertech, we offer an effective Basement Ventilation System designed to improve your air quality by addressing the natural “stack effect” found in industrial, institutional, commercial, and residential settings.

                  </p>

                  <p className=" text-sm text-cyan-800 text-justify font-normal text-[16px] leading-8   md:text-left  px-4 mx-auto">
                    Our innovative Ventilation System provides a crucial escape route for trapped, unhealthy air in your basement while bringing in clean, dry air from above to replace the damp, polluted atmosphere.
                  </p>

                  <p className=" text-sm text-cyan-800 text-justify font-normal text-[16px] leading-8   md:text-left  px-4 mx-auto">
                    The best part? No extra heating or cooling ducts are required! Our system enhances air circulation, resulting in more frequent air exchanges. Enjoy a cleaner and healthier living environment that you can truly appreciate.
                  </p>




                </div>
              </div>

            </div>


            <div className=" w-full h-full md:w-5/12 my-5  ">
              <ImageGallery items={images6} className=" rounded-lg " alt="pics" />

            </div>



          </div>

        </div>


        <div className="row pt-11">


          <div className="row flex flex-row flex-wrap-reverse  justify-evenly items-center">
            <div className=" w-full h-full md:w-5/12 ">
              <h2
                className="font-manrope uppercase  font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600 text-4xl lg:text-4xl text-black mb-9 max-lg:text-center relative">

                Ducting Jobs

              </h2>
              <div className=" text-justify font-normal text-[16px] leading-8 text-gray-500 font-sans  max-lg:text-center  mx-auto">

                <div className="about-content pb-8">
                  <div className="section-title  ">

                    <p className=" text-sm text-cyan-800 text-justify font-normal text-[16px] leading-8   md:text-left px-4  mx-auto ">
                      At Adhunik Powertech, we understand the importance of expertly installed ductwork in creating a comfortable indoor environment. Our commitment ensures that your space remains at the ideal temperature, enhancing your overall comfort.

                    </p>

                    <p className=" text-sm text-cyan-800 text-justify font-normal text-[16px] leading-8   md:text-left px-4  mx-auto  mt-4">
                      Neglecting proper ductwork installation can lead to significant problems, including air leakage, inefficient systems, compromised air quality, and expedited wear and tear on your heating and air conditioning systems. Don’t let improper installation jeopardize your comfort and investment!

                    </p>

                    <p className=" text-sm text-cyan-800 text-justify font-normal text-[16px] leading-8   md:text-left px-4  mx-auto  mt-4">
                      Correct duct sizing is also vital—duct dimensions must perfectly match your heater or air conditioner for optimal performance. Our team of expert technicians specializes in precisely aligning your duct system to your existing equipment. Through meticulous adjustments, we maximize efficiency, comfort, and system longevity, guaranteeing effective airflow wherever you need it.

                    </p>



                    <p className=" text-cyan-900 font-sans text-2xl py-6 mt-4  ">
                      <strong>Our comprehensive Ducting Jobs process includes:
                      </strong>
                    </p>

                    <div className="card px-4 md:px-0">

                      <ul className="list-disc py-3 space-y-1 ps-4 text-sm text-cyan-800 text-justify font-normal text-[16px] leading-8    mx-auto">
                        <li> Carrying out seamless installation and operation of all ducting activities.
                        </li>
                        <li>  ⁠Efficiently scheduling, assigning, planning, and monitoring duct work on your project sites.
                        </li>
                        <li>  ⁠Thoroughly reviewing layouts and drawings for both current and future ducting projects. </li>
                        <li> Supervising all duct work on-site to ensure quality.
                        </li>
                        <li> Upholding progress, schedules, and meeting project deadlines without fail.
                        </li>
                        <li> ⁠Preparing and delivering detailed daily reports to supervisors, engineers, and clients.
                        </li>
                      </ul>

                    </div>

                    <p className='text-sm text-cyan-800 text-justify font-normal text-[16px] leading-8   max-lg:text-center  mx-auto'>Choose Adhunik Powertech for professional ductwork that you can trust, ensuring comfort and efficiency for years to come!</p>
                  </div>
                </div>


              </div>



            </div>
            <div className=" w-full h-full md:w-5/12 my-5  ">
              <ImageGallery items={images7} className=" rounded-lg " alt="pics" />

            </div>
          </div>
        </div>

        <div className="row flex-col flex justify-center items-center py-10">
          <div className="flex items-center justify-center md:py-10">
            <p className="mb-4 px-2 text-3xl font-extrabold text-center md:text-5xl lg:text-6xl">
              <span className=" text-transparent bg-clip-text bg-gradient-to-r to-[#06b6d4] from-[#0ea5e9] capitalize">contact us for your next upcoming project</span>
            </p>
          </div>

          <div className="container text-center py-5 md:px-10 px-3  text-cyan-800">
            <p>The right HVAC system ensures optimal comfort and energy efficiency in your working space. Factors like climate, room size, and insulation are critical in determining the best HVAC solution. Consult with an HVAC professional to find a system that fits your specific needs and enhances indoor air quality.
            </p>

            <div className="show_m mt-5">
              <button
                className="rounded-md bg-cyan-700 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 mt-5"
                onClick={() => {
                  window.location.href = 'tel:8287885885'; // Replace with the actual phone number
                }}
              >
                Call Us Now
              </button>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

