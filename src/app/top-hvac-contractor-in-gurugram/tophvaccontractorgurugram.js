"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ShieldCheck, Clock, Award, Users, Wrench, Ruler, Snowflake, Wind, ChevronsRight, Zap } from "lucide-react";

export default function TopHvacGurugramPage() {

  const services = [
    {
      title: "Turnkey HVAC Project Execution",
      description: "We take complete ownership of your project, from the initial blueprint to the final handover. Our turnkey approach means you have a single, accountable partner managing every detail for your Gurgaon facility.",
      icon: <Users className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "HVAC System Design & Engineering",
      description: "A powerful HVAC system starts with a flawless design. Our veteran engineers use the latest tools to create a system perfectly tailored to your space, whether it's an office in Cyber City or a plant in Manesar.",
      icon: <Ruler className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "VRV / VRF System Installation",
      description: "Ideal for modern corporate buildings, these systems offer exceptional energy efficiency and individual zone control. We specialize in the expert installation and maintenance of these advanced systems.",
      icon: <Snowflake className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "Chiller Plant Solutions",
      description: "For large-scale facilities like hotels, hospitals, and manufacturing plants, a robust chiller system is essential. We design and install high-capacity, heavy-duty chiller plants for reliable, centralized cooling.",
      icon: <ChevronsRight className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "Industrial & Commercial Ventilation",
      description: "We engineer bespoke ventilation and exhaust systems that control indoor air quality, remove industrial fumes, and maintain a healthy, productive environment for offices and manufacturing units.",
      icon: <Wind className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "24/7 Service, Repair & AMC",
      description: "An HVAC breakdown can halt your business. Our Annual Maintenance Contracts (AMCs) prevent problems, and our rapid-response repair team is available 24/7 across Gurugram to get you back online fast.",
      icon: <Wrench className="w-8 h-8 text-cyan-600" />
    },
  ];

  const whyAdhunik = [
    {
      title: "Unmatched Expertise & Experience",
      description: "With over 19 years of deep industry expertise, our team of engineers possesses a profound understanding of HVAC dynamics. We don't just follow instructions; we analyze challenges and engineer solutions.",
      icon: <Users className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "Award-Winning Quality Standards",
      description: "Quality is our guarantee. We were honored with the India Business Award 2025 for 'Best Quality Standards' – a national recognition of our commitment to excellence in materials, workmanship, and project management.",
      icon: <Award className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "Pioneers in Energy Efficiency",
      description: "Our core philosophy revolves around creating sustainable solutions. We conduct detailed analyses and integrate smart controls (BMS) to deliver maximum cooling for every watt of energy consumed, reducing your operational costs.",
      icon: <Zap className="w-8 h-8 text-cyan-600" />
    }
  ];

  return (
    <>
      <div className="bg-gray-50 mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          {/* Hero Section */}
          <section className="flex flex-col-reverse md:flex-row-reverse gap-8 items-center mb-16">
            <div className="w-full md:w-6/12">
              <h1 className="text-2xl md:text-3xl text-center md:text-left font-bold text-cyan-800 mb-4 leading-tight">
                Expert & Reliable HVAC Contractor in Gurugram (Gurgaon): Powering Your Corporate & Industrial Success
              </h1>
              <p className="text-sm text-gray-700 mb-6 text-justify md:text-left">
                Searching for a trusted HVAC contractor in Gurugram who understands the unique demands of your fast-paced corporate office or industrial facility? In a city that is the engine of business, a high-performance HVAC system isn't a luxury—it's the backbone of your productivity. Adhunik HVAC Projects brings over 19 years of engineering excellence to designing, executing, and maintaining robust, energy-efficient HVAC systems for Gurgaon and its industrial hubs like Manesar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="flex items-center gap-2 p-3 bg-cyan-50 rounded-lg">
                  <Clock className="w-6 h-6 text-cyan-700" />
                  <span className="font-semibold text-cyan-800 text-sm">19+ Years of Expertise</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-cyan-50 rounded-lg">
                  <Award className="w-6 h-6 text-cyan-700" />
                  <span className="font-semibold text-cyan-800 text-sm">Award-Winning Quality</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-cyan-50 rounded-lg">
                  <ShieldCheck className="w-6 h-6 text-cyan-700" />
                  <span className="font-semibold text-cyan-800 text-sm">24/7 Service & Support</span>
                </div>
              </div>
              <div className="flex justify-center md:justify-start">
                <Link href="/support-form" className="bg-cyan-700 hover:bg-cyan-800 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
                  GET A FREE CONSULTATION
                </Link>
              </div>
            </div>
            <div className="w-full md:w-6/12">
              <Image
                src="https://res.cloudinary.com/dxenuee4n/image/upload/v1764413800/HVAC_Contractor_in_Gurugram_Gurgaon_qvu1nz.webp"
                alt="Modern corporate office building"
                width={1260}
                height={750}
                loading="lazy"
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </section>


          {/* Trusted By Section */}
          <section className="text-center my-16 py-8">
             <h2 className="text-xl font-semibold text-gray-500 mb-4">Trusted By Industry Leaders Across Gurugram</h2>
             <p className="max-w-3xl mx-auto text-gray-600 text-sm">
                Our commitment to quality and reliability has made us the go-to HVAC partner for some of the most respected corporate and industrial names in the region. We are proud to have earned the trust of businesses throughout Gurgaon that demand nothing but the best.
             </p>
          </section>
          
          {/* Complete HVAC Services Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-cyan-800">Our Complete HVAC Services in Gurugram: Engineered for Your Success</h2>
              <p className="mt-4 max-w-3xl mx-auto text-gray-600 text-sm">At Adhunik HVAC Projects, we provide a truly comprehensive suite of HVAC services. We are more than just installers; we are end-to-end solution providers, ensuring your facility operates at peak comfort and efficiency.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-cyan-600">
                  <div className="flex items-center gap-4 mb-4">
                    {service.icon}
                    <h3 className="text-lg font-semibold text-gray-800">{service.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600 text-justify">{service.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Why Adhunik is Trusted Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-cyan-800">Why Adhunik is the HVAC Contractor Gurugram Businesses Trust</h2>
              <p className="mt-4 max-w-3xl mx-auto text-gray-600 text-sm">When you choose Adhunik HVAC Projects, you're partnering with a team committed to your long-term success. Our approach is built on proven expertise, innovation, and unwavering client focus.</p>
            </div>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
              {whyAdhunik.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="flex justify-center mb-4">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-center text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 text-justify">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="bg-gradient-to-r from-cyan-600 to-cyan-800 rounded-xl p-8 text-white shadow-lg">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-xl md:text-2xl font-bold mb-4">Ready to Optimize Your Business Comfort?</h2>
              <p className="text-cyan-100 mb-8 text-sm">Don't let inefficient HVAC systems impact your productivity or profits. Partner with Adhunik HVAC Projects for innovative, reliable, and cost-effective solutions tailored to your needs. Contact Gurugram's Leading HVAC Contractor Today!</p>
              <div className="flex justify-center">
                <Link href="/support-form" className="bg-white text-md font-bold text-cyan-800 hover:bg-cyan-100 py-3 px-8 rounded-lg transition duration-300">
                  REQUEST A FREE CONSULTATION
                </Link>
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  )
}
