"use client"
import React from 'react'
// Resolved: Replacing 'next/image' and 'next/link' with standard React/HTML elements

import { Ruler, Wrench, Award, ShieldCheck, Clock, Zap, ListChecks } from "lucide-react"; // Imported ListChecks

// Helper component for Links (Replacing next/link)
const CustomLink = ({ href, children, className }) => (
    <a href={href} className={className} rel="noopener noreferrer">
        {children}
    </a>
);

export default function HvacSolutionsPage() {

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
      description: "HVAC systems are long-term investments. Adhunik’s maintenance programs safeguard performance and efficiency through scheduled preventive maintenance and expert AMC services. Our technicians perform coil cleaning, refrigerant checks, electrical inspections, and emergency troubleshooting for complex systems like VRV/VRF, chillers, and cleanroom environments — ensuring uptime and reliability all year round.",
      icon: <ShieldCheck className="w-8 h-8 text-cyan-600" />
    }
  ];

  // Note: whyAdhunik is used in the section below the three main pillars
  const whyAdhunik = [
    {
      title: "19+ Years of Engineering Legacy",
      description: "With nearly two decades of field expertise, Adhunik HVAC Projects has mastered the complete lifecycle of HVAC — from consulting and design to execution and maintenance. Our solutions have powered industries, corporate offices, data centers, and cleanrooms across India.",
      icon: <Clock className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "Compliance with Global Standards",
      description: "We strictly follow NBC, CPWD, NABH, ASHRAE, and ISHRAE guidelines. This ensures every system we deliver meets the highest benchmarks for safety, performance, and sustainability — especially in critical environments like healthcare and pharmaceuticals.",
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
                HVAC SOLUTION UNDER ONE ROOF: Why Single-Source Turnkey is Non-Negotiable
              </h1>
              <p className="text-sm text-gray-700 mb-6 text-justify">
                In India's rapidly expanding commercial, industrial, and healthcare sectors, an HVAC system is far more than just air conditioning—it's the silent engine running your operations, ensuring regulatory compliance, and protecting sensitive investments. Yet, managing a large-scale HVAC installation often means juggling multiple external vendors, leading to delays and budget overruns.
              </p>
              <p className="text-sm text-gray-700 mb-6 text-justify font-bold">
             At Adhunik Hvac Projects, we eliminate this chaos. Our core philosophy is captured perfectly by our commitment:  
                <CustomLink href="https://www.adhunikhvacprojects.com/our-company" className="text-cyan-700 font-extrabold hover:text-cyan-900 hover:underline">
                      HVAC SOLUTION UNDER ONE ROOF
                </CustomLink>. 
                It’s our proven turnkey methodology built on a 19+ year legacy of engineering excellence.
              </p>
              
              {/* === START MODIFIED CTA BLOCK - ONLY BADGES === */}
              <div className="flex flex-col gap-6 mb-8">
                {/* Badges: Equal gap, centered on mobile/desktop for this layout */}
                <div className="flex flex-wrap justify-center md:justify-start gap-4"> 
                  <div className="flex items-center gap-2 p-3 bg-cyan-50 rounded-lg">
                    <Award className="w-6 h-6 text-cyan-700" />
                    <span className="font-semibold text-cyan-800 text-sm">Quality Assured Standards</span>
                  </div>
                  
                  <div className="flex items-center gap-2 p-3 bg-cyan-50 rounded-lg">
                    <ShieldCheck className="w-6 h-6 text-cyan-700" />
                    <span className="font-semibold text-cyan-800 text-sm">Trusted Nationwide</span>
                  </div>
                </div>

                {/* Removed the Consultation Button Container */}
              </div>
              {/* === END MODIFIED CTA BLOCK === */}

            </div>

            {/* ✅ Fixed Image Section (Using standard <img>) */}
            <div className="relative w-full md:w-6/12 h-80 md:h-[28rem]">
              <div className="w-full h-full">
                <img
                  src="https://res.cloudinary.com/dxenuee4n/image/upload/v1762499740/hvacsolutions_sa99qq.webp"
                  alt="HVAC Contractor working on installation"
                  className="object-cover rounded-xl shadow-lg w-full h-full"
                  // Note: Removed 'priority' as it is Next.js specific
                />
              </div>
            </div>
          </section>
          
          {/* *** MOVED AND ALIGNED SECTION - NOW IN ROWS *** */}
          <div className="my-16 py-8 border-y border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800 mb-6 text-left">
              The Hidden Cost of Vendor Fragmentation 
            </h2>
            <p className="max-w-7xl mx-auto text-gray-600 text-sm text-justify">
              When your project relies on several independent parties, the risk escalates. Adhunik eliminates these common pitfalls:
            </p>
            {/* Checklist style points - Changed grid to vertical space-y-4 */}
            <ul className="text-left max-w-7xl mx-auto text-sm text-gray-700 mt-6 space-y-4">
                <li className="flex items-start bg-white p-4 rounded-lg shadow-sm border border-red-100">
                    <ListChecks className="w-5 h-5 text-cyan-600 mr-3 flex-shrink-0 mt-1" />
                    <span>
                      Design-to-Build Mismatch: The design team specifies equipment that the installer struggles to source or fit correctly, leading to expensive reworks and poor efficiency.
                    </span>
                </li>
                <li className="flex items-start bg-white p-4 rounded-lg shadow-sm border border-red-100">
                    <ListChecks className="w-5 h-5 text-cyan-600 mr-3 flex-shrink-0 mt-1" />
                    <span>
                      Accountability Gap: When the system fails, the consultant blames the supplier, and the supplier blames the installer. You, the client, are left in the middle with no clear resolution path.
                    </span>
                </li>
                <li className="flex items-start bg-white p-4 rounded-lg shadow-sm border border-red-100">
                    <ListChecks className="w-5 h-5 text-cyan-600 mr-3 flex-shrink-0 mt-1" />
                    <span>
                      Operational Inefficiency: Every handover point is an opportunity for lost data or reduced performance, often resulting in higher lifecycle and utility costs later on.
                    </span>
                </li>
            </ul>
          </div>
          {/* *** END MOVED SECTION *** */}
          
          <hr />

          {/* Pillars Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-cyan-800">The Adhunik Turnkey Advantage: One Roof, Zero Headaches</h2>
              <p className="mt-4 max-w-3xl mx-auto text-gray-600 text-sm">
                By consolidating every phase—from initial concept to decades of service—we provide single-point accountability and ensure performance consistency.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-cyan-600 transition duration-300 hover:shadow-xl">
                <div className="flex items-center gap-4 mb-4">
                  <Ruler className="w-8 h-8 text-cyan-600" />
                  <h3 className="text-lg font-semibold text-gray-800">1. Design & Engineering Consistency: Precision from Day One</h3>
                </div>
                <p className="text-sm text-gray-600 text-justify">
                  Our veteran engineers, leveraging expertise honed over 19+ years, handle the design. This immediate integration means: Right-Sizing Guaranteed through sophisticated energy modeling, and Compliance Baked In with strict adherence to ISHRAE, ASHRAE, NBC, and CPWD standards for high-stakes environments like Pharma/Healthcare and Data Centers.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-cyan-600 transition duration-300 hover:shadow-xl">
                <div className="flex items-center gap-4 mb-4">
                  <Wrench className="w-8 h-8 text-cyan-600" />
                  <h3 className="text-lg font-semibold text-gray-800">2. Seamless Project Execution: Speed Meets Quality Control</h3>
                </div>
                <p className="text-sm text-gray-600 text-justify">
                  With Adhunik managing the entire build, we guarantee speed without sacrificing rigorous quality control (ISO 9001:2015 certified company). This means Coordinated Installation of complex centralized HVAC systems and Award-Winning Execution, including recognition like the India Business Award 2025 for "Best Quality Standards,"giving you confidence in the physical build.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-cyan-600 transition duration-300 hover:shadow-xl">
                <div className="flex items-center gap-4 mb-4">
                  <ShieldCheck className="w-8 h-8 text-cyan-600" />
                  <h3 className="text-lg font-semibold text-gray-800">3. Lifetime Performance: Intelligent Integration and Support</h3>
                </div>
                <p className="text-sm text-gray-600 text-justify">
                  The project doesn't end at commissioning. Our final phase ensures the system runs smartly and reliably for years to come through Smart Integration of Building Management Systems (BMS). Our comprehensive AMCs provide Guaranteed Uptime and 24x7 availability because our service team intimately understands the system they designed.
                </p>
              </div>
            </div>
          </section>

          <hr />

          {/* Adhunik Advantage Section - Renamed to match the blog flow */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-cyan-800">Who Benefits Most From Adhunik’s Turnkey Model?</h2>
              <p className="mt-4 max-w-3xl mx-auto text-gray-600 text-sm">
                Our single-source approach is ideal for complex projects where precision and reliability are paramount:
              </p>
            </div>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
              
              <div className="bg-white p-6 rounded-lg shadow-md border-b-4 border-cyan-600 hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-center mb-4"><Zap className="w-8 h-8 text-cyan-600" /></div>
                <h3 className="text-lg font-semibold text-center text-gray-800 mb-2">Industrial & Manufacturing</h3>
                <p className="text-sm text-gray-600 text-justify">Requiring robust process cooling and specialized ventilation.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border-b-4 border-cyan-600 hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-center mb-4"><Award className="w-8 h-8 text-cyan-600" /></div>
                <h3 className="text-lg font-semibold text-center text-gray-800 mb-2">Healthcare & Pharma</h3>
                <p className="text-sm text-gray-600 text-justify">Demanding certified Clean Room environments where air quality cannot be compromised by vendor disputes.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-b-4 border-cyan-600 hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-center mb-4"><Clock className="w-8 h-8 text-cyan-600" /></div>
                <h3 className="text-lg font-semibold text-center text-gray-800 mb-2">Commercial Hubs & Data Centers</h3>
                <p className="text-sm text-gray-600 text-justify">Where continuous, redundant cooling is essential for business continuity.</p>
              </div>
            </div>
          </section>


          {/* Conclusion Section */}
          <section className="text-center mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-cyan-800 mb-4">Ready to Experience HVAC Excellence?</h2>
              <p className="text-gray-600 text-sm mb-4 text-justify">
                Stop managing technicians. Start partnering with engineers. When you choose ADHUNIK HVAC, you are choosing a single, reliable partner committed to energy efficiency and long-term value.
                If your next project demands superior design, flawless execution, and guaranteed long-term support, talk to the experts who handle it all.
              </p>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="bg-gradient-to-r from-cyan-600 to-cyan-800 rounded-xl p-8 text-white shadow-xl">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-xl md:text-2xl font-bold mb-4">Let’s Deliver Your Next Project On Time and On Budget.</h2>
              <p className="text-cyan-100 mb-8 text-sm">
                Connect with us today for a detailed consultation on how our HVAC SOLUTIONS can deliver your next project with superior performance.
              </p>
              <div className="flex justify-center">
                <CustomLink href="/support-form" className="bg-white text-md font-bold text-cyan-800 hover:bg-cyan-100 py-3 px-8 rounded-lg transition duration-300">
                  GET A QUOTE TODAY
                </CustomLink>
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  )
}