"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { 
  Building2, 
  Layers, 
  TrendingUp, 
  AlertTriangle, 
  DollarSign, 
  Maximize, 
  Clock, 
  Zap, 
  ShieldCheck, 
  Snowflake, 
  ArrowRight,
  LayoutGrid,
  Briefcase
} from "lucide-react";

export default function ModularVsCentralized() {

  const centralizedCons = [
    {
      title: "High Upfront Capital",
      description: "Requires a massive investment for 100% capacity on day one, regardless of actual occupancy.",
      icon: <DollarSign className="w-6 h-6 text-red-500" />
    },
    {
      title: "Lack of Flexibility",
      description: "Scaling down is impossible, and expanding is disruptive. You are stuck running a full-capacity system for a half-empty building.",
      icon: <Maximize className="w-6 h-6 text-red-500" />
    },
    {
      title: "Single Point of Failure",
      description: "If the central chiller fails, the entire building loses cooling, causing operational disaster.",
      icon: <AlertTriangle className="w-6 h-6 text-red-500" />
    }
  ];

  const modularBenefits = [
    {
      title: "1. Phased Investment",
      description: "Don't pay for 100% capacity on day one. Install what you need now and add modules as tenants arrive. This significantly improves cash flow.",
      icon: <DollarSign className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "2. Unmatched Scalability",
      description: "Need to reconfigure a floor? Modular systems adapt seamlessly. Add cooling capacity without disrupting existing operations.",
      icon: <Layers className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "3. Enhanced Redundancy",
      description: "If one module needs maintenance, the others keep running. This ensures uninterrupted cooling for critical environments.",
      icon: <ShieldCheck className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "4. Optimized Efficiency",
      description: "Systems operate efficiently at partial loads. As occupancy fluctuates, the system precisely matches demand, saving energy.",
      icon: <Zap className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "5. Faster Installation",
      description: "Smaller, pre-engineered modules mean quicker installation times, helping you bring your real estate projects to market faster.",
      icon: <Clock className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "6. Space Optimization",
      description: "Modular units can be placed strategically, freeing up valuable basement or rooftop floor area for other revenue-generating uses.",
      icon: <LayoutGrid className="w-8 h-8 text-cyan-600" />
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
                Modular vs. Centralized HVAC: The Smart Choice for Scalable Projects
              </h1>
              <h2 className="text-lg font-semibold text-cyan-600 mb-4 text-center md:text-left">
                "Building a New Commercial Tower? Don't Let Your HVAC System Lock You In."
              </h2>
              <p className="text-sm text-gray-700 mb-6 text-justify">
                As a real estate developer, flexibility is key. Why install a massive, rigid system that costs a fortune upfront? For decades, the Centralized Plant was the standard. Today, the <strong>Modular System</strong> offers a smarter way—allowing you to pay for what you need, when you need it.
              </p>
              
             {/* Intro Badge */}
              <div className="bg-cyan-50 border-l-4 border-cyan-600 p-4 mb-8 rounded-r-lg">
                <p className="text-sm text-gray-800 italic">
                  "With the foundational knowledge of{" "}
                  <strong>
                    <Link 
                      href="https://www.adhunikpowertech.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-cyan-700 hover:underline"
                    >
                      Adhunik Powertech
                    </Link>
                  </strong>
                  , Adhunik HVAC Projects has grown into a Top Contractor with a 19+ year legacy. We give you absolute command over your project's future."
                </p>
              </div>
              
              <div className="flex justify-center md:justify-start">
                <Link href="/support-form" className="bg-cyan-700 hover:bg-cyan-800 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
                  GET A FEASIBILITY STUDY
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative w-full md:w-6/12 h-80 md:h-[28rem]">
              <Image
                src="https://res.cloudinary.com/dxenuee4n/image/upload/v1763546606/modular-vs-centralized-hvac_pyr2kb.webp" 
                alt="Modern Modular HVAC System on Commercial Roof"
                fill
                className="object-cover rounded-xl shadow-lg"
                priority
              />
            </div>
          </section>

          {/* Section 1: The Centralized Conundrum */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-cyan-800">The Centralized Conundrum: A Legacy Approach</h2>
              <p className="mt-4 max-w-3xl mx-auto text-gray-600 text-sm">
                For decades, the centralized chiller plant was the standard. While efficient for fully occupied static buildings, it poses significant risks for modern, dynamic developments.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-6 border-b pb-2">Why Traditional Centralized Systems Struggle</h3>
              <div className="grid md:grid-cols-3 gap-8">
                {centralizedCons.map((item, index) => (
                  <div key={index} className="flex flex-col items-center text-center">
                    <div className="bg-red-50 p-3 rounded-full mb-4">
                      {item.icon}
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">{item.title}</h4>
                    <p className="text-xs text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 2: The Modular Revolution (Benefits Grid) */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-cyan-800">The Modular Revolution: Designed for Tomorrow</h2>
              <p className="mt-4 max-w-3xl mx-auto text-gray-600 text-sm">
                Enter modular chiller plants. Instead of one giant system, modular designs use multiple smaller units that work together, offering unmatched agility for real estate developers.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {modularBenefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-cyan-600 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    {benefit.icon}
                    <h3 className="text-lg font-semibold text-gray-800">{benefit.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600 text-justify">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: Adhunik Story (Interactive Card Layout) */}
          <section className="mb-16">
            <div className="group relative bg-gradient-to-br from-cyan-50 via-white to-blue-50 rounded-2xl p-8 border border-cyan-100 shadow-lg hover:shadow-2xl hover:border-cyan-300 transition-all duration-500 overflow-hidden">
                
                {/* Interactive Background Icon */}
                <div className="absolute -right-10 -bottom-10 opacity-5 group-hover:opacity-10 transition-all duration-700 group-hover:rotate-12 group-hover:scale-110 pointer-events-none">
                   <Briefcase className="w-80 h-80 text-cyan-800" />
                </div>
                
                {/* Centered Header Content */}
                <div className="relative z-10 flex flex-col items-center">
                   <div className="text-center max-w-3xl mb-10">
                      <h3 className="text-xl md:text-3xl font-bold text-cyan-800 mb-4 group-hover:text-cyan-600 transition-colors">
                        Our Story :~ Adhunik HVAC Projects
                      </h3>
                      <p className="text-sm text-gray-700">
                        Our 19+ year legacy isn't just a number. Inheriting the pioneering spirit of <strong>Adhunik Powertech</strong>, we have consistently adapted to the evolving needs of the commercial sector.
                      </p>
                   </div>
                   
                   {/* The "Little Columns" Grid */}
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                      
                      {/* Column 1 */}
                      <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group/card">
                         <div className="bg-cyan-100 p-3 rounded-full mb-4 group-hover/card:bg-cyan-600 group-hover/card:text-white transition-colors duration-300">
                            <TrendingUp className="w-8 h-8 text-cyan-600 group-hover/card:text-white" />
                         </div>
                         <h4 className="font-bold text-gray-800 mb-2">Superior Performance</h4>
                         <p className="text-xs text-gray-600">Tailored engineering for industrial and commercial demands.</p>
                      </div>

                      {/* Column 2 */}
                      <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group/card">
                         <div className="bg-cyan-100 p-3 rounded-full mb-4 group-hover/card:bg-cyan-600 group-hover/card:text-white transition-colors duration-300">
                            <Zap className="w-8 h-8 text-cyan-600 group-hover/card:text-white" />
                         </div>
                         <h4 className="font-bold text-gray-800 mb-2">Energy Efficiency</h4>
                         <p className="text-xs text-gray-600">Reducing operational costs and carbon footprints significantly.</p>
                      </div>

                      {/* Column 3 */}
                      <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group/card">
                         <div className="bg-cyan-100 p-3 rounded-full mb-4 group-hover/card:bg-cyan-600 group-hover/card:text-white transition-colors duration-300">
                            <ShieldCheck className="w-8 h-8 text-cyan-600 group-hover/card:text-white" />
                         </div>
                         <h4 className="font-bold text-gray-800 mb-2">Long-Term Value</h4>
                         <p className="text-xs text-gray-600">Systems built for durability, reliability, and easy maintenance.</p>
                      </div>

                   </div>
                </div>
            </div>
          </section>

          {/* Conclusion & CTA */}
          <section className="bg-cyan-900 rounded-xl p-8 text-white shadow-lg text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-xl md:text-2xl font-bold mb-4">The Adhunik Advantage: Partnering for a Smarter Future</h2>
              <p className="text-cyan-100 mb-8 text-sm text-justify md:text-center">
                Whether you're planning a new commercial complex or upgrading a facility, the choice between modular and centralized HVAC impacts your long-term success. Adhunik HVAC Projects conducts thorough feasibility studies to determine the optimal solution for you.
              </p>
              <div className="flex justify-center">
                <Link href="/support-form" className="bg-white text-md font-bold text-cyan-800 hover:bg-cyan-100 py-3 px-8 rounded-lg transition duration-300 flex items-center gap-2">
                  CONSULT WITH EXPERTS <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  )
}