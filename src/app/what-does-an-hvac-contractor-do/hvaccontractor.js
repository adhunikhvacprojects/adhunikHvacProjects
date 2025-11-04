"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Ruler, Wrench, Users, Award, ShieldCheck, Clock, ChevronsRight, Zap, Wind, BookOpen } from "lucide-react";

export default function HVACContractorPage() {

  const pillars = [
    {
      title: "Pillar 1: Expert System Design & Engineering",
      description: "A truly successful HVAC system begins long before installation. Our engineers perform detailed load calculations, factoring in building envelope, occupancy load, internal heat gains, and local Delhi NCR climate data. This ensures the system is neither oversized nor undersized — maximizing efficiency and comfort. Adhunik HVAC Projects designs advanced systems like VRV/VRF, Chiller Plants, and Air Handling Units, all compliant with NBC, CPWD, NABH, ASHRAE, and ISHRAE standards.",
      icon: <Ruler className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "Pillar 2: Precision Installation & Commissioning",
      description: "Turning blueprints into reality requires precision and coordination. Our expert team installs ductwork, piping, and refrigerant lines with exacting standards. We ensure seamless integration with building structures and electrical systems. Through a rigorous commissioning process, we test and balance every air and water system, ensuring optimal functionality and energy efficiency before handover.",
      icon: <Wrench className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "Pillar 3: Maintenance & Performance Optimization",
      description: "HVAC systems are long-term investments. Adhunik’s maintenance programs safeguard performance and efficiency through scheduled preventive maintenance and expert AMC services. Our technicians perform coil cleaning, refrigerant checks, electrical inspections, and emergency troubleshooting for complex systems like VRV/VRF, chillers, and cleanroom environments—ensuring uptime and reliability all year round.",
      icon: <ShieldCheck className="w-8 h-8 text-cyan-600" />
    }
  ];

  const whyAdhunik = [
    {
      title: "19+ Years of Engineering Legacy",
      description: "With nearly two decades of field expertise, Adhunik HVAC Projects has mastered the complete lifecycle of HVAC — from consulting and design to execution and maintenance. Our solutions have powered industries, corporate offices, data centers, and cleanrooms across India.",
      icon: <Clock className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "Compliance with Global Standards",
      description: "We strictly follow NBC, CPWD, NABH, ASHRAE, and ISO guidelines. This ensures every system we deliver meets the highest benchmarks for safety, performance, and sustainability — especially in critical environments like healthcare and pharmaceuticals.",
      icon: <Award className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "Focus on Efficiency & Sustainability",
      description: "Energy efficiency isn’t an option — it’s our foundation. We design every project to minimize lifecycle costs and energy use while maintaining superior comfort and air quality. Our systems contribute directly to reduced carbon footprints and operational savings.",
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
              <h1 className="text-2xl md:text-3xl font-bold text-cyan-800 mb-4 leading-tight text-center md:text-left">
                What Does an HVAC Contractor Actually Do?
              </h1>
              <p className="text-sm text-gray-700 mb-6 text-justify">
                For most people, an HVAC contractor is the person you call when the air conditioner fails during summer or the heater stops on a winter night. While emergency repair is a small part of the job, the true scope of an HVAC contractor’s work is far more comprehensive — spanning system design, installation, and maintenance. They are the unseen engineers ensuring comfort, health, and energy efficiency across residential, commercial, and industrial spaces.
              </p>
              <p className="text-sm text-gray-700 mb-6 text-justify">
                For businesses in the Delhi NCR region, understanding this complete role helps in choosing the right HVAC partner. Let’s explore the three fundamental pillars that define a professional HVAC contractor’s expertise — design, installation, and maintenance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="flex items-center gap-2 p-3 bg-cyan-50 rounded-lg">
                  <Clock className="w-6 h-6 text-cyan-700" />
                  <span className="font-semibold text-cyan-800 text-sm">19+ Years Expertise</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-cyan-50 rounded-lg">
                  <Award className="w-6 h-6 text-cyan-700" />
                  <span className="font-semibold text-cyan-800 text-sm">Quality Assured Standards</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-cyan-50 rounded-lg">
                  <ShieldCheck className="w-6 h-6 text-cyan-700" />
                  <span className="font-semibold text-cyan-800 text-sm">Trusted Nationwide</span>
                </div>
              </div>
              <div className="flex justify-center md:justify-start">
                <Link href="/support-form" className="bg-cyan-700 hover:bg-cyan-800 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
                  REQUEST CONSULTATION
                </Link>
              </div>
            </div>

            {/* ✅ Fixed Image Section */}
            <div className="relative w-full md:w-6/12 h-80 md:h-[28rem]">
              <Image
                src="https://res.cloudinary.com/dxenuee4n/image/upload/v1762157380/hvaccontractor_vvwwh6.webp"
                alt="HVAC Contractor working on installation"
                fill
                className="object-cover rounded-xl shadow-lg"
                priority
              />
            </div>
          </section>

          {/* Blog Core Section */}
          <section className="text-center my-16 py-8">
            <h2 className="text-xl font-semibold text-gray-500 mb-4">Understanding the True Role of an HVAC Contractor</h2>
            <p className="max-w-3xl mx-auto text-gray-600 text-sm">
              Beyond fixing air conditioners, HVAC contractors are technical professionals responsible for designing, implementing, and sustaining the entire climate control infrastructure of a building. Their work impacts energy efficiency, air quality, and long-term operating costs.
            </p>
          </section>

          {/* Pillars Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-cyan-800">The Three Pillars of HVAC Excellence</h2>
              <p className="mt-4 max-w-3xl mx-auto text-gray-600 text-sm">
                Every high-performing system depends on three core pillars — design, precision installation, and lifelong maintenance. Each step contributes to the system’s overall reliability and efficiency.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pillars.map((pillar, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-cyan-600">
                  <div className="flex items-center gap-4 mb-4">
                    {pillar.icon}
                    <h3 className="text-lg font-semibold text-gray-800">{pillar.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600 text-justify">{pillar.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Adhunik Advantage Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-cyan-800">Recognizing Excellence: The Adhunik HVAC Projects Advantage</h2>
              <p className="mt-4 max-w-3xl mx-auto text-gray-600 text-sm">
                The difference between a good contractor and a top HVAC partner lies in end-to-end capability — from consultation to ongoing maintenance. Here’s why Adhunik HVAC Projects stands out as a top HVAC contractor in Delhi NCR.
              </p>
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

          {/* Conclusion Section */}
          <section className="text-center mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-cyan-800 mb-4">Conclusion: Your Partner in Operational Success</h2>
              <p className="text-gray-600 text-sm mb-4 text-justify">
                A professional HVAC contractor is far more than a service provider — they are a strategic partner ensuring comfort, efficiency, and operational stability for years to come. From concept to maintenance, the right contractor safeguards your investment and keeps your business environment optimized.
              </p>
              <p className="text-gray-600 text-sm text-justify">
                Whether setting up a new commercial facility in Noida or upgrading an industrial plant in Gurugram, Adhunik HVAC Projects provides comprehensive design-to-maintenance HVAC solutions built for performance, compliance, and energy efficiency.
              </p>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="bg-gradient-to-r from-cyan-600 to-cyan-800 rounded-xl p-8 text-white shadow-lg">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-xl md:text-2xl font-bold mb-4">Let’s Plan Your HVAC Project Together</h2>
              <p className="text-cyan-100 mb-8 text-sm">
                Connect with us today for expert consultation and customized cooling solutions engineered to meet your exact project needs.
              </p>
              <div className="flex justify-center">
                <Link href="/support-form" className="bg-white text-md font-bold text-cyan-800 hover:bg-cyan-100 py-3 px-8 rounded-lg transition duration-300">
                  CONTACT US NOW
                </Link>
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  )
}
